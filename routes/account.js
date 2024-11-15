// routes/account.js
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

async function getOrCreateIAmCohort() {
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

router.get("/", async (req, res) => {
    if (!req.session.user) return res.redirect("/auth/login");

    try {
        const baseCohortForUser = await getOrCreateIAmCohort();
        const { 
            userSort = "sharedUsers",
            relatedSort = "sharedUsers", 
            page = 1 
        } = req.query;

        console.log('Requested user sort type:', userSort); // This should now show changes

        const userCids = req.session.user ? req.session.user.cids || [] : [];

        // Use applySorting instead of the direct queries
        const userQuery = cohortModel.find({ _id: { $in: userCids } });
        const userCohorts = await applySorting(userQuery, userSort);

        const userIdsInCohorts = Array.from(new Set(userCohorts.flatMap(cohort => cohort.uids)));

        const relatedQuery = cohortModel.find({
            _id: { $nin: userCids },
            uids: { $in: userIdsInCohorts }
        });
        const relatedCohorts = await applySorting(relatedQuery, relatedSort);

        res.render("account", {
            title: "Account",
            user: req.session.user,
            userCohorts,
            cohorts: relatedCohorts,
            cids: userCids,
            baseCohort: baseCohortForUser,
            baseCohorts: userCohorts,
            userSortType: userSort,     // Change back to userSortType
            relatedSortType: relatedSort,
            page: parseInt(page)
        });
    } catch (err) {
        console.error("Error loading account:", err);
        res.status(500).send("Error loading account");
    }
});

module.exports = router;
