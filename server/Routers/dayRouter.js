const express = require('express');
const { getPopulatedDay } = require('../Services/Day');
const auth = require('../Middleware/auth');

const router = express.Router();
const getDayRules = require('../Validation/getDayRules');
const validate = require('../Validation/validate');

// Retrieve the user's log for a particular date
router.get('/:date', auth, getDayRules, validate, async (req, res) => {
  const { date } = req.params;
  const { user } = req;

  const day = user.days.find(d => d.date.getTime() === Date.parse(date));
  if (!day) {
    return res.status(200).json({
      breakfast: [],
      lunch: [],
      dinner: [],
      snacks: [],
    });
  }

  const populatedDay = await getPopulatedDay(day.dayId);

  return res.status(200).json(populatedDay);
});

module.exports = router;
