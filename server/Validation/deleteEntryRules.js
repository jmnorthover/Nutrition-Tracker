const { body } = require('express-validator');

module.exports = [
  body('date')
    .isLength({ min: 10, max: 10 })
    .isAfter(new Date(0).toString())
    .withMessage('Invalid date'),
  body('mealName')
    .isIn(['breakfast', 'lunch', 'dinner', 'snacks'])
    .withMessage('Meal name must breakfast, lunch, dinner, or snacks'),
];
