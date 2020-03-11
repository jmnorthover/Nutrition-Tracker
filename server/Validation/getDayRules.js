const { param } = require('express-validator');

module.exports = [
  param('date')
    .isLength({ min: 10, max: 10 })
    .isAfter(new Date(0).toString())
    .withMessage('Invalid date'),
];
