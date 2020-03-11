const Entry = require('../../Schema/entrySchema');

// Removes an entry from the entries collection by ID
const deleteEntry = async entryId => {
  return Entry.deleteOne({ _id: entryId });
};

// Adds an entry to the entries collection with the given food ID and serving number
const addEntry = async (food, servings) => {
  const entry = new Entry({ food, servings });
  return entry.save();
};

module.exports = {
  addEntry,
  deleteEntry,
};
