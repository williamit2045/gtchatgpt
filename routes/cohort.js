const express = require("express");
const cohortModel = require("../models/cohort");
const userModel = require("../models/user");
const router = express.Router();

// Helper function to retrieve or initialize the "I am" cohort
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

// Route for creating a cohort (rendering the form page)
router.get("/make", (req, res) => {
    if (!req.session.user) return res.redirect("/login");
    res.render("make", { title: "Make Cohort", user: req.session.user });
});

// Route for handling cohort creation (form submission)
router.post("/make", async (req, res) => {
    if (!req.session.user) return res.redirect("/login");

    try {
        const { cohort, topics } = req.body;

        const newCohort = new cohortModel({
            cohort: cohort,
            uids: [req.session.user.id],
            userCount: 1,
            sharedCids: [],
            sharedCohortCount: 0,
            topic: topics ? topics.split(",").map(topic => topic.trim()) : [],
            type: "Custom"
        });

        await newCohort.save();

        // Update user model to include the new cohort and increment cohort count
        await userModel.findByIdAndUpdate(req.session.user.id, {
            $push: { cids: newCohort._id },
            $inc: { cohortCount: 1 }
        });

        // Add new cohort ID to session
        req.session.user.cids.push(newCohort._id);

        res.redirect(`/cohort/details?id=${newCohort._id}`);
    } catch (err) {
        console.error("Error creating new cohort:", err);
        res.status(500).send("Error creating new cohort");
    }
});

// In routes/cohort.js, update the details route handler:
router.get("/details", async (req, res) => {
    const { id, sort = "sharedUsers", page = 1 } = req.query;

    try {
        const baseCohort = await cohortModel.findById(id);
        if (!baseCohort) return res.status(404).send("Cohort not found");

        const query = cohortModel.find({ 
            _id: { $ne: id }, 
            uids: { $in: baseCohort.uids } 
        });
        const relatedCohorts = await applySorting(query, sort);

        const user = req.session.user || null;
        const cids = user ? user.cids : [];

        res.render("cohort", {
            title: baseCohort.cohort,
            cohort: baseCohort,
            cohorts: relatedCohorts,
            user,
            cids,
            sortType: sort,
            page: parseInt(page)
        });
    } catch (err) {
        console.error("Error loading cohort details:", err);
        res.status(500).send("Error loading cohort details");
    }
});

// Route for joining a cohort
router.get("/join", async (req, res) => {
    if (!req.session.user) return res.redirect("/login");

    const { cohortId } = req.query;
    try {
        const iAmCohort = await getOrCreateIAmCohort();
        if (cohortId === iAmCohort._id.toString()) {
            return res.status(400).send("Cannot join 'I am' manually.");
        }

        const cohort = await cohortModel.findById(cohortId);
        if (cohort && !cohort.uids.includes(req.session.user.id)) {
            await cohortModel.findByIdAndUpdate(cohortId, {
                $addToSet: { uids: req.session.user.id },
                $inc: { userCount: 1 }
            });

            await userModel.findByIdAndUpdate(req.session.user.id, {
                $addToSet: { cids: cohortId },
                $inc: { cohortCount: 1 }
            });

            req.session.user.cids.push(cohortId);
            console.log(`User ${req.session.user.id} joined cohort ${cohortId}`);
        }

        res.redirect(`/cohort/details?id=${cohortId}`);
    } catch (err) {
        console.error("Error joining cohort:", err);
        res.status(500).send("Error joining cohort");
    }
});

// Route for leaving a cohort
router.get("/leave", async (req, res) => {
    if (!req.session.user) return res.redirect("/login");

    const { cohortId } = req.query;
    try {
        const iAmCohort = await getOrCreateIAmCohort();
        if (cohortId === iAmCohort._id.toString()) {
            return res.status(400).send("Cannot leave 'I am' cohort.");
        }

        const cohort = await cohortModel.findById(cohortId);

        if (cohort && cohort.uids.includes(req.session.user.id)) {
            await cohortModel.findByIdAndUpdate(cohortId, {
                $pull: { uids: req.session.user.id },
                $inc: { userCount: -1 }
            });

            await userModel.findByIdAndUpdate(req.session.user.id, {
                $pull: { cids: cohortId },
                $inc: { cohortCount: -1 }
            });

            req.session.user.cids = req.session.user.cids.filter(id => id !== cohortId);
            console.log(`User ${req.session.user.id} left cohort ${cohortId}`);
        }

        res.redirect(`/cohort/details?id=${cohortId}`);
    } catch (err) {
        console.error("Error leaving cohort:", err);
        res.status(500).send("Error leaving cohort");
    }
});

module.exports = router;
