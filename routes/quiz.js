// routes/quiz.js
const express = require("express");
const router = express.Router();
const cohortModel = require("../models/cohort");
const userModel = require("../models/user");
const { MBTI } = require("../mbti"); // Importing MBTI questions

// Helper function to calculate the MBTI type based on answers
function calculateMBTIType(answers) {
  let e = 0, i = 0, s = 0, n = 0, t = 0, f = 0, j = 0, p = 0;

  Object.entries(answers).forEach(([questionKey, answer]) => {
    const questionNum = parseInt(questionKey.slice(1), 10); // Extract number from "Q1", "Q2", ...

    if ([1, 6, 11].includes(questionNum)) answer.includes("Introversion") ? i++ : e++;
    else if ([2, 7, 12].includes(questionNum)) answer.includes("Sensing") ? s++ : n++;
    else if ([3, 8, 13].includes(questionNum)) answer.includes("Thinking") ? t++ : f++;
    else if ([4, 9, 14].includes(questionNum)) answer.includes("Judging") ? j++ : p++;
  });

  return `${e > i ? 'E' : 'I'}${s > n ? 'S' : 'N'}${t > f ? 'T' : 'F'}${j > p ? 'J' : 'P'}`;
}

// GET route for displaying each MBTI question
router.get("/mbti", (req, res) => {
  if (!req.session.user) return res.redirect("/auth/login");

  if (!req.session.mbtiAnswers) {
    req.session.mbtiAnswers = {};
    req.session.currentQuestionIndex = 0;
  }

  const questionKeys = Object.keys(MBTI); // Array of "Q1", "Q2", ..., "Q60"
  const totalQuestions = questionKeys.length;
  const currentIndex = req.session.currentQuestionIndex;

  if (currentIndex >= totalQuestions) {
    const mbtiType = calculateMBTIType(req.session.mbtiAnswers);
    const resultCohortName = `Your MBTI type is ${mbtiType}`;

    cohortModel.findOneAndUpdate(
      { cohort: resultCohortName },
      { $addToSet: { uids: req.session.user.id }, $inc: { userCount: 1 } },
      { upsert: true, new: true }
    ).then((resultCohort) => {
      userModel.findByIdAndUpdate(req.session.user.id, {
        $addToSet: { cids: resultCohort._id }
      }).then(() => {
        delete req.session.mbtiAnswers;
        delete req.session.currentQuestionIndex;
        res.redirect(`/cohort/details?id=${resultCohort._id}`);
      });
    }).catch((err) => {
      console.error("Error processing MBTI results:", err);
      res.status(500).send("Error processing MBTI results");
    });
    return;
  }

  const questionKey = questionKeys[currentIndex]; // "Q1", "Q2", ...
  const options = MBTI[questionKey]; // Array of options for the current question
  res.render("mbti", {
    title: `MBTI Quiz - Question ${currentIndex + 1}`,
    questionKey,
    options,
    currentIndex,
    totalQuestions,
    user: req.session.user
  });
});

// POST route for handling answers and navigating questions
router.post("/answer", (req, res) => {
  if (!req.session.user) return res.redirect("/auth/login");

  const { answer } = req.body;
  const currentQuestionIndex = req.session.currentQuestionIndex;
  const questionKey = `Q${currentQuestionIndex + 1}`; // Corresponding "Q1", "Q2", ...

  // Save the answer in the session
  req.session.mbtiAnswers[questionKey] = answer;
  req.session.currentQuestionIndex++;

  // Redirect to display the next question
  res.redirect("/quiz/mbti");
});

module.exports = router;
