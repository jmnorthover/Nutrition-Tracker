const Day = require('../../Schema/daySchema');

// Retrieves a day with the provided date
const getDay = async (id) => {
  const day = await Day.findOne({ _id: id });
  return day;
};

// Retrieves a day with the provided date and all food info for that day
const getPopulatedDay = async (id) => {
  const day = await Day.findOne({ _id: id }, '-__v -_id').populate({
    path: ' breakfast lunch dinner snacks',
    select: '-__v',
    populate: {
      path: 'food',
      select: 'name calories protein carbs fat -_id',
    },
  });
  return day;
};

// Creates a new day with no entries for a particular date
const addDay = async () => {
  const newDay = new Day({
    breakfast: [],
    lunch: [],
    dinner: [],
    snacks: [],
  });

  return newDay.save();
};

// Removes an entry from a certain day
const removeEntry = async (dayId, entryId, mealName) => {
  const day = await Day.findOne({ _id: dayId });
  if (day) {
    await day[mealName].pull(entryId);
    day.save();
  }
};

module.exports = {
  getDay,
  getPopulatedDay,
  addDay,
  removeEntry,
};
