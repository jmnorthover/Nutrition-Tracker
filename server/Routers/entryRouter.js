const express = require('express');
const { addFood } = require('../Services/Food');
const { getDay, addDay, removeEntry } = require('../Services/Day');
const { addEntry, deleteEntry } = require('../Services/Entry');
const auth = require('../Middleware/auth');
const addEntryRules = require('../Validation/addEntryRules');
const deleteEntryRules = require('../Validation/deleteEntryRules');
const validate = require('../Validation/validate');

const router = express.Router();

// Creates a new entry for a given food on a given day
router.post('/', auth, addEntryRules, validate, async (req, res) => {
  const { body } = req;
  const { user } = req;

  try {
    const food = await addFood(body.foodInfo);

    let day = user.days.find(d => d.date.getTime() === Date.parse(body.date));

    if (!day) {
      day = await addDay();
      user.days = user.days.concat({ dayId: day._id, date: body.date });
    } else {
      day = await getDay(day.dayId);
    }

    const newEntry = await addEntry(food._id, body.foodInfo.servings);

    day[body.mealName] = day[body.mealName].concat(newEntry._id);

    await user.save();
    await day.save();

    return res.status(200).json({ message: 'Food saved' });
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

// Deletes an entry
router.delete(
  '/:entryId',
  auth,
  deleteEntryRules,
  validate,
  async (req, res) => {
    const { entryId } = req.params;
    const { mealName, date } = req.body;
    const { user } = req;

    try {
      const day = user.days.find(d => d.date.getTime() === Date.parse(date));
      await deleteEntry(entryId);
      await removeEntry(day._id, entryId, mealName);
      res.status(200).json({ message: 'Entry deleted' });
    } catch (error) {
      res.status(404).json({ error: 'Failed to delete entry' });
    }
  },
);

module.exports = router;
