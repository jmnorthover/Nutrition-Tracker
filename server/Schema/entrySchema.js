const mongoose = require('mongoose');

const { Schema } = mongoose;

const entrySchema = new Schema({
  food: {
    type: Schema.Types.ObjectId,
    ref: 'Food',
    required: true,
  },

  servings: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Entry', entrySchema);
