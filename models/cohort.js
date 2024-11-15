// models/cohort.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cohortSchema = new Schema({
    cohort: {
        type: String,
        required: true,
        index: true
    },
    makerUid: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false,
    },
    expirationDate: {
        type: Date,
        required: false,
    },
    uids: {
        type: [Schema.Types.ObjectId],
        ref: 'User',
        default: [],
    },
    userCount: {
        type: Number,
        default: 0,
        index: true,
    },
    sharedCids: {
        type: [Schema.Types.ObjectId],
        ref: 'Cohort',
        default: [],
    },
    sharedCohortCount: {
        type: Number,
        default: 0,
        index: true,
    },
    type: {
        type: String,
        index: true,
    },
    topic: {
        type: [String],
        index: true,
    },
    categories: {
        type: [String],
        default: []
    },    
    inference: {
        type: String,
        index: true,
    },
    set: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Cohort', cohortSchema);