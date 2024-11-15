const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the User schema
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  alias: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  madeCids: {
    type: [Schema.Types.ObjectId],
    ref: 'Cohort',
    default: [],
  },
  cids: {
    type: [Schema.Types.ObjectId],
    ref: 'Cohort',
    default: [],
  },
  expiringCids: {
    type: [Schema.Types.ObjectId],
    ref: 'Cohort',
    default: [],
  },
  cohortsUids: {
    type: [Schema.Types.ObjectId],
    ref: 'User',
    default: [],
  },
  cohortCount: {
    type: Number,
    default: 0,
    index: true,
  },
  cohortUidCount: {
    type: Number,
    default: 0,
    index: true,
  },
}, { timestamps: true });

// Middleware to synchronize `cids` with `madeCids` and update `cohortCount`
userSchema.pre("save", async function (next) {
  // Add madeCids to cids if not already included
  this.madeCids.forEach(madeCid => {
    if (!this.cids.includes(madeCid)) {
      this.cids.push(madeCid);
    }
  });

  // Update cohortCount based on the length of cids
  this.cohortCount = this.cids.length;

  // Calculate cohortUidCount based on unique users in `cohortsUids`
  this.cohortUidCount = [...new Set(this.cohortsUids)].length;
  next();
});

// Helper method to join a cohort and update counters
userSchema.methods.joinCohort = async function (cohortId) {
  if (!this.cids.includes(cohortId)) {
    this.cids.push(cohortId);
    this.cohortCount += 1;
    await this.save();
  }
};

// Helper method to leave a cohort and update counters
userSchema.methods.leaveCohort = async function (cohortId) {
  this.cids = this.cids.filter(cid => cid.toString() !== cohortId.toString());
  this.cohortCount = this.cids.length;
  await this.save();
};

module.exports = mongoose.model('User', userSchema);
