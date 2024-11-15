// seed/seed.js
 
require('dotenv').config();
const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker'); // Correct import
const bcrypt = require('bcrypt'); // For password hashing (recommended)
const User = require('../models/User');
const Cohort = require('../models/Cohort');
 
// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
 
mongoose.set('strictQuery', false); // To suppress deprecation warnings in Mongoose 7
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000, // 10 seconds
})
.then(() => {
  console.log('MongoDB Connected for Seeding');
  seedDatabase(); // Start seeding after successful connection
})
.catch(err => {
  console.error('MongoDB Connection Error:', err);
  process.exit(1);
});
 
// Seeding Function
const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Cohort.deleteMany({});
    console.log('Existing data cleared.');
 
    // Create Cohorts
    const cohortNames = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Epsilon'];
    const cohorts = await Cohort.insertMany(
      cohortNames.map(name => ({ name }))
    );
    console.log(`${cohorts.length} cohorts created.`);
 
    // Create Users
    const users = [];
    const numUsers = 50; // Adjust the number of users as needed
 
    for (let i = 0; i < numUsers; i++) {
      const username = faker.internet.userName() + faker.number.int({ min: 1, max: 1000 });
      const email = faker.internet.email();
      const plainPassword = faker.internet.password();
      const hashedPassword = await bcrypt.hash(plainPassword, 10); // Hash the password
 
      const user = new User({
        username,
        email,
        password: hashedPassword, // Store hashed password
        cohorts: [], // To be assigned
      });
 
      users.push(user);
    }
 
    await User.insertMany(users);
    console.log(`${users.length} users created.`);
 
    // Assign Users to Cohorts
    const allUsers = await User.find({});
    const allCohorts = await Cohort.find({});
 
    allUsers.forEach(user => {
      // Assign each user to 1-3 random cohorts
      const numCohorts = faker.number.int({ min: 1, max: 3 });
      const shuffledCohorts = faker.helpers.arrayElements(allCohorts, { count: allCohorts.length });
      const selectedCohorts = shuffledCohorts.slice(0, numCohorts);
 
      selectedCohorts.forEach(cohort => {
        user.cohorts.push(cohort._id);
        cohort.members.push(user._id);
      });
    });
 
    // Save updated users and cohorts
    await Promise.all([
      ...allUsers.map(user => user.save()),
      ...allCohorts.map(cohort => cohort.save()),
    ]);
 
    console.log('Users assigned to cohorts.');
    console.log('Database seeding completed successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Seeding Error:', error);
    process.exit(1);
  }
};