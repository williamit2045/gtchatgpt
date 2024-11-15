//routes/search.js - server-side search logic

const express = require("express");
const router = express.Router();
const cohortModel = require("../models/cohort");

// Helper function to retrieve cohorts based on search, sort, and pagination criteria
const getCohorts = async (req, baseCohort = null) => {
    const sortType = req.query.sort || 'related';
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 30;
    const skip = (page - 1) * limit;

    let query = {};
    if (req.query.query) {
        const regexPattern = req.query.query.split(" ").join('|');
        query.cohort = { $regex: new RegExp(regexPattern, 'i') };
    }

    let cohorts;
    if (sortType === 'alpha') {
        cohorts = await cohortModel.find(query)
            .sort({ cohort: 1 })
            .skip(skip)
            .limit(limit)
            .lean();
    } else {
        cohorts = await cohortModel.find(query)
            .sort({ userCount: -1 })
            .skip(skip)
            .limit(limit)
            .lean();
    }

    const userCids = req.session.user ? req.session.user.cids || [] : [];

    // Add `joined` status for each cohort if user is logged in
    if (req.session.user) {
        cohorts.forEach(cohort => {
            cohort.joined = userCids.includes(cohort._id.toString());
        });
    }

    return cohorts;
};

// Regular and AJAX search route
router.get("/", async (req, res) => {
    const isAjax = req.xhr || req.headers.accept.indexOf('json') > -1;
    const cohorts = await getCohorts(req);

    if (isAjax) {
        res.render("partials/searchResults", { 
            cohorts: cohorts.slice(0, 5),
            user: req.session.user,
            cids: req.session.cids
        });
    } else {
        res.render("dashboard", {
            title: "Dashboard",
            cohorts: cohorts,
            user: req.session.user,
            page: req.query.page || 1,
            cids: req.session.cids
        });
    }
});

// Quick search route for AJAX requests
router.get("/quick-search", async (req, res) => {
    try {
        const query = req.query.query;
        const regex = new RegExp(query, 'i');  // Case-insensitive regex search
        const cohorts = await cohortModel.find({ cohort: regex }).limit(5).lean();

        // Add joined status for each cohort if user is logged in
        const userCids = req.session.user ? req.session.user.cids || [] : [];
        if (req.session.user) {
            cohorts.forEach(cohort => {
                cohort.joined = userCids.includes(cohort._id.toString());
            });
        }

        res.json(cohorts);  // Send JSON response to client
    } catch (err) {
        console.error("Quick search error:", err);
        res.status(500).json([]);
    }
});

module.exports = router;
