const mongoose = require('mongoose');
const {faker} = require('@faker-js/faker');
require("dotenv").config()
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
});

// Models
const User = require("./models/user")
const Cohort = require("./models/cohort")

const newUser = new User({username:"tyu",email:"tyu",password:"tyu"})

newUser.save()