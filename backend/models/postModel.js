const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add text']
  }
},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Post', postSchema);