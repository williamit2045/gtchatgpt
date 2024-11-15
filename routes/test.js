const express = require("express")
const userModel = require("../models/user")
const cohortModel = require("../models/cohort")

const router = express.Router()

router.get("/getUsers", async (req, res) => {
    try {
        
        const users = await userModel.find().exec()
        return res.status(200).send(users)
    } catch (error) {
        
        return res.status(400).send("Some error")
    }

})

router.get("/checkSessionData", (req, res) => {
    
    return res.status(200).send(req.session)
})


router.get("/destroySessions", async (req, res) => {
    await req.session.destroy(err => {
        if (err) {
            return res.status(500).json({ message: 'Could not log out. Please try again.' });
        }
        res.json({ message: 'Successfully logged out.' });
        
    });
    res.clearCookie('connect.sid')
    
})
module.exports = router