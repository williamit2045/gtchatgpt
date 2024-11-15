// routes/sort.js
const express = require("express");
const cohortModel = require("../models/cohort");
const router = express.Router();

// Function to retrieve sorted cohorts
const getCohorts = async (req, res, baseCohort = null) => {
    try {
        const sortType = req.query.sort || 'related';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 30;
        const skip = (page - 1) * limit;

        // Query conditions based on request parameters
        let query = {};
        if (req.query.query) {
            const regexPattern = req.query.query.split(" ").join('|');
            query.cohort = { $regex: new RegExp(regexPattern, 'i') };
        } else if (req.query.cids) {
            query._id = { "$in": req.query.cids };
        }

        // Fields to select in query results
        const projection = {
            _id: 1,
            cohort: 1,
            userCount: 1,
            sharedCohortCount: 1,
            sharedCids: 1,
            uids: 1
        };

        // Sort cohorts alphabetically
        if (sortType === 'alpha') {
            return await cohortModel.find(query)
                .select(projection)
                .sort({ cohort: 1 })
                .skip(skip)
                .limit(limit)
                .lean();
        }

        // Sort by most users
        if (sortType === 'users') {
            return await cohortModel.find(query)
                .select(projection)
                .sort({ userCount: -1 })
                .skip(skip)
                .limit(limit)
                .lean();
        }

        // Sort by related cohorts based on shared users with `baseCohort`
        if (sortType === 'related' && baseCohort) {
            const pipeline = [
                { $match: query },
                {
                    $addFields: {
                        sharedUserCount: {
                            $size: { $setIntersection: ["$uids", baseCohort.uids || []] }
                        }
                    }
                },
                { $sort: { sharedUserCount: -1 } },
                { $skip: skip },
                { $limit: limit },
                { $project: projection }
            ];
            return await cohortModel.aggregate(pipeline);
        }

        // Sort by shared cohorts
        if (sortType === 'sharedCohorts' && baseCohort) {
            const pipeline = [
                { $match: query },
                {
                    $addFields: {
                        sharedCohortsCount: {
                            $size: { $setIntersection: ["$sharedCids", baseCohort.sharedCids || []] }
                        }
                    }
                },
                { $sort: { sharedCohortsCount: -1 } },
                { $skip: skip },
                { $limit: limit },
                { $project: projection }
            ];
            return await cohortModel.aggregate(pipeline);
        }

        return [];
    } catch (err) {
        console.error("Sort error:", err);
        return [];
    }
};

// Sorting route for cohorts
router.get("/sort", async (req, res) => {
    try {
        const baseCohortId = req.query.baseCohortId;
        const baseCohort = baseCohortId ? await cohortModel.findById(baseCohortId) : null;
        const sortedCohorts = await getCohorts(req, res, baseCohort);
        res.json(sortedCohorts);
    } catch (err) {
        console.error("Error sorting cohorts:", err);
        res.status(500).json([]);
    }
});

module.exports = router;
