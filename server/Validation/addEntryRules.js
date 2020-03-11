const { body } = require('express-validator');

module.exports = [
  body('date')
    .isLength({ min: 10, max: 10 })
    .isAfter(new Date(0).toString())
    .withMessage('Invalid date'),
  body('mealName')
    .isIn(['breakfast', 'lunch', 'dinner', 'snacks'])
    .withMessage('Invalid meal name'),
  body('foodInfo.name')
    .exists()
    .withMessage('Food name required'),
  body('foodInfo.api_id')
    .exists()
    .withMessage('Api ID required'),
  body('foodInfo.calories')
    .isInt()
    .withMessage('Calorie count must be a whole number'),
  body('foodInfo.protein')
    .isInt()
    .withMessage('Protein count must be a whole number'),
  body('foodInfo.carbs')
    .isInt()
    .withMessage('Carb count must be a whole number'),
  body('foodInfo.fat')
    .isInt()
    .withMessage('Fat count must be a whole number'),
];
