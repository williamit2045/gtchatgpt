const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const userModel = require("../models/user");
const cohortModel = require("../models/cohort");



// Helper function to get or create the "I am" cohort
async function getOrCreateIAmCohort() {
    let iAmCohort = await cohortModel.findOne({ cohort: "I am" });
    if (!iAmCohort) {
        iAmCohort = new cohortModel({
            cohort: "I am",
            uids: [],           // List of user IDs in this cohort
            userCount: 0,       // Track number of users in this cohort
            sharedCids: [],     // Shared cohort IDs as needed
            sharedCohortCount: 0,
        });
        await iAmCohort.save();
    }
    return iAmCohort;
}

// Display registration page
router.get("/register", (req, res) => {
    res.render("register", { title: "Register" });
});

// Register new user
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send("Please fill in all required fields.");
        }

        // Check for existing user
        const userExists = await userModel.findOne({ $or: [{ username }, { email }] });
        if (userExists) {
            return res.status(409).send("A user with this username or email already exists.");
        }

        // Hash password and create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({ email, username, password: hashedPassword });
        await user.save();

        // Ensure "I am" cohort exists and add new user to it
        const iAmCohort = await getOrCreateIAmCohort();
        iAmCohort.uids.push(user._id);
        iAmCohort.userCount += 1;
        await iAmCohort.save();

        // Update the user's cohorts array with the "I am" cohort
        user.cids = [iAmCohort._id];
        await user.save();

        // Initialize session with new user data
        req.session.user = { id: user._id, cids: user.cids };
        res.redirect("/dashboard");
    } catch (error) {
        console.error("Registration error:", error);
        res.status(500).send("An error occurred during registration.");
    }
    // At the end of the registration route in auth.js
console.log("Session data after registration:", req.session);

});

// Display login page
router.get("/login", (req, res) => {
    res.render("login", { title: "Login" });
});

// Handle login form submission
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send("All fields are required.");
        }

        // Validate user credentials
        const user = await userModel.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send("Invalid username or password.");
        }

        // Set session data on successful login
        req.session.user = { id: user._id, cids: user.cids };
        res.redirect("/account");
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).send("Server error during login.");
    }
    console.log(req.session.user)
});

// Logout user and clear session
router.get("/logout", (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error("Logout error:", err);
            return res.status(500).send("Could not log out.");
        }
        res.clearCookie("connect.sid"); // Clears session cookie
        res.redirect("/dashboard");
    });
});

module.exports = router;
