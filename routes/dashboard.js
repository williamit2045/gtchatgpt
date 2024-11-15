// routes/dashboard.js
const express = require("express");
const router = express.Router();
const cohortModel = require("../models/cohort");

let cachedIAmCohort = null;

function applySorting(query, sortType) {
  let sortCriteria;
  switch (sortType) {
      case "sharedUsers":
          sortCriteria = { sharedUsers: -1 };
          break;
      case "sharedCohorts":
          sortCriteria = { sharedCohortCount: -1 };
          break;
      case "userCount":
          sortCriteria = { userCount: -1 };
          break;
      case "alpha":
          sortCriteria = { cohort: 1 };
          break;
      default:
          sortCriteria = { sharedUsers: -1 };
  }

  if (sortType === "alpha") {
      query = query.collation({ locale: 'en', strength: 2 });
  }
  
  return query.sort(sortCriteria);
}

// Helper function to get or create the "I am" cohort
async function getIAmCohort() {
    if (cachedIAmCohort) return cachedIAmCohort;
    const cohort = await cohortModel.findOne({ cohort: "I am" });
    if (!cohort) {
        cachedIAmCohort = await new cohortModel({
            cohort: "I am",
            uids: [],
            userCount: 0,
            sharedCids: [],
            sharedCohortCount: 0
        }).save();
    } else {
        cachedIAmCohort = cohort;
    }
    return cachedIAmCohort;
}

// Dashboard route
router.get("/", async (req, res) => {
  const { sort = "sharedUsers", page = 1 } = req.query;

  try {
      const baseCohort = await getIAmCohort();
      const query = cohortModel.find({ _id: { $ne: baseCohort._id } });

      // Count total cohorts to calculate total pages
      const totalItems = await cohortModel.countDocuments({ _id: { $ne: baseCohort._id } });
      const limit = 12; // Items per page
      const totalPages = Math.ceil(totalItems / limit);

      // Apply sorting and pagination
      const cohorts = await applySorting(query, sort)
          .skip((page - 1) * limit)
          .limit(limit);

      res.render("dashboard", {
          title: "Dashboard",
          cohorts,
          baseCohort,
          sortType: sort,
          page: parseInt(page),
          totalPages // Pass totalPages to the template
      });
  } catch (err) {
      console.error("Error fetching cohorts with sorting:", err);
      res.status(500).send("Error loading dashboard");
  }
});


module.exports = router;
