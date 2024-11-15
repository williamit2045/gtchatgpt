// middleware/cohortMiddleware.js
const updateCohortCounts = (req, res, next) => {
    if (req.cohort) {
        req.cohort.userCount = req.cohort.uids.length
        req.cohort.sharedCohortCount = req.cohort.sharedCids.length
    }
    next()
}

module.exports = { updateCohortCounts }