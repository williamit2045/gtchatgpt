// routes/user.js
const express = require("express");
const router = express.Router();
const cohortModel = require("../models/cohort");

router.get("/account", async (req, res) => {
    if (!req.session.user) return res.redirect("/login");

    try {
        const iAmCohort = await getOrCreateIAmCohort();

        // Retrieve user's cohorts excluding "I am"
        const userCohorts = await cohortModel.find({
            _id: { $in: req.session.user.cids, $ne: iAmCohort._id }
        });

        const relatedCohorts = await cohortModel.find({
            _id: { $nin: req.session.user.cids },
            sharedCids: { $in: req.session.user.cids }
        });

        res.render("account", {
            title: "Account",
            user: req.session.user,
            userCohorts,
            cohorts: relatedCohorts,
            cids: req.session.user.cids,
            iAmCohort
        });
    } catch (err) {
        console.error("Error loading account:", err);
        res.status(500).send("Error loading account");
    }
});

// Route for deleting an account
router.get("/deleteAccount", async (req, res) => {
    if (!req.session.user) return res.redirect("/login");

    try {
        const userId = req.session.user.id;
        const iAmCohort = await getOrCreateIAmCohort();

        // Remove user from the "I am" cohort
        await cohortModel.findByIdAndUpdate(iAmCohort._id, {
            $pull: { uids: userId },
            $inc: { userCount: -1 }
        });

        // Remove the user and destroy the session
        await userModel.findByIdAndDelete(userId);
        req.session.destroy((err) => {
            if (err) {
                console.error("Error destroying session:", err);
                return res.status(500).send("Error deleting account");
            }
            res.clearCookie("connect.sid");
            res.redirect("/register");
        });
    } catch (err) {
        console.error("Error deleting account:", err);
        res.status(500).send("Error deleting account");
    }
});

module.exports = router;
