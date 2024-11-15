// remove_invalid_cids.js
const mongoose = require('mongoose');
const User = require('./models/user'); // Import your User model
const Cohort = require('./models/cohort'); // Import your Cohort model
require('dotenv').config();

async function removeInvalidCids() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");

        // Get all valid cohort IDs
        const validCohortIds = new Set((await Cohort.find({})).map(cohort => cohort._id.toString()));

        // Update each user to remove invalid cids, madeCids, and expiringCids
        const users = await User.find({});
        for (const user of users) {
            user.cids = user.cids.filter(cid => validCohortIds.has(cid.toString()));
            user.madeCids = user.madeCids.filter(cid => validCohortIds.has(cid.toString()));
            user.expiringCids = user.expiringCids.filter(cid => validCohortIds.has(cid.toString()));
            user.cohortCount = user.cids.length;
            await user.save();
        }

        console.log("Invalid cids removed from users.");

    } catch (err) {
        console.error("Error removing invalid cids:", err);
    } finally {
        await mongoose.disconnect();
        console.log("Disconnected from MongoDB");
    }
}

removeInvalidCids();
