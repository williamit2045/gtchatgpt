require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const mongoStore = require("connect-mongo");
const path = require("path");
const cohortModel = require("./models/cohort");

const app = express();

// Import route files
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const sortRoute = require("./routes/sort");
const searchRoute = require("./routes/search");
const cohortRoute = require("./routes/cohort");
const dashboardRoute = require("./routes/dashboard");
const accountRoute = require("./routes/account");
const quizRoute = require("./routes/quiz");

// Environment variables
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;
const SESSION_SECRET = process.env.SESSION_SECRET;

// Database connection with verification logging
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongoose connected!"))
  .catch((err) => console.error("Mongoose connection error:", err));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Session configuration
app.use(session({
  store: mongoStore.create({
    mongoUrl: MONGO_URI,
    ttl: 30 * 60, // 30 minutes
    autoRemove: "interval",
    autoRemoveInterval: 10,
    collectionName: "sessions",
  }),
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { path: "/", httpOnly: true, secure: false, maxAge: 30 * 60 * 1000 },
  rolling: false,
}));

// Middleware to make user info available globally in templates
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Function to initialize "I am" cohort on server startup
async function initializeIAmCohort() {
  try {
    const cohort = await cohortModel.findOne({ cohort: "I am" });
    if (!cohort) {
      const newCohort = new cohortModel({
        cohort: "I am",
        uids: [],
        userCount: 0,
        sharedCids: [],
        sharedCohortCount: 0,
      });
      iAmCohort = await newCohort.save();
      console.log("Created 'I am' Cohort");
    } else {
      iAmCohort = cohort;
      console.log("'I am' Cohort exists");
    }
  } catch (error) {
    console.error("Error initializing 'I am' Cohort:", error);
  }
}

// Ensure the "I am" cohort is initialized before starting the server
initializeIAmCohort().then(() => {
  
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/search", searchRoute);
app.use("/sort", sortRoute);
app.use("/cohort", cohortRoute);
app.use("/dashboard", dashboardRoute);
app.use("/account", accountRoute);
app.use("/quiz", quizRoute);

// Home page route defined last
app.get('/', function(req, res, next) {
  res.render('front', { title: 'Main' });
});

app.get('/main', function(req, res, next) {
  res.render('main', { title: 'Main' });
})


  // Start server after "I am" cohort initialization
  app.listen(PORT, () => {
    console.log("Server is listening on port:", PORT);
  });
});
