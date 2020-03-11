const Food = require('../../Schema/foodSchema');

// Adds a new food to the foods collection
const addFood = async foodInfo => {
  let food = await Food.findOne({ api_id: foodInfo.api_id });
  if (!food) {
    food = new Food(foodInfo);
    await food.save();
  }
  return food;
};

module.exports = {
  addFood,
};
