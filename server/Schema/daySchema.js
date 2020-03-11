const mongoose = require('mongoose');

const { Schema } = mongoose;

const daySchema = new Schema({
  breakfast: [{ type: Schema.Types.ObjectId, ref: 'Entry' }],

  lunch: [{ type: Schema.Types.ObjectId, ref: 'Entry' }],

  dinner: [{ type: Schema.Types.ObjectId, ref: 'Entry' }],

  snacks: [{ type: Schema.Types.ObjectId, ref: 'Entry' }],
});

module.exports = mongoose.model('Day', daySchema);
