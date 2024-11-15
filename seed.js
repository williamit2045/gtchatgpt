// seed.js
const { MBTI } = require('./mbti')
const { MBTI_TYPES } = require('./mbtiTypes')
const cohortModel = require('./models/cohort')
const mongoose = require('mongoose')
require('dotenv').config()

async function seedMBTI() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")

        // Clear existing cohorts
        await cohortModel.deleteMany({})
        console.log("Cleared existing cohorts")

        // Create cohorts from MBTI questions and types
        const cohorts = []
        
        // Add question cohorts
        for (let qNum = 1; qNum <= 60; qNum++) {
            const questionKey = `Q${qNum}`
            const answers = MBTI[questionKey]
            
            if (answers) {
                answers.forEach(answer => {
                    cohorts.push({
                        cohort: answer.cohort,
                        type: answer.type,
                        topic: answer.topics,
                        categories: answer.categories,
                        uids: [],
                        sharedCids: [],
                        userCount: 0,
                        sharedCohortCount: 0
                    })
                })
            }
        }

        // Add MBTI type result cohorts
        MBTI_TYPES.forEach(type => {
            cohorts.push({
                cohort: type.cohort,
                type: type.type,
                topic: type.topics,
                categories: type.categories,
                uids: [],
                sharedCids: [],
                userCount: 0,
                sharedCohortCount: 0
            })
        })

        // Insert all cohorts
        const result = await cohortModel.insertMany(cohorts)
        console.log(`Created ${result.length} total cohorts`)

    } catch (err) {
        console.error("Error seeding database:", err)
    } finally {
        await mongoose.disconnect()
        console.log("Disconnected from MongoDB")
    }
}

seedMBTI()