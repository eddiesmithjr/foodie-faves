require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useMongoClient: true });
const db = mongoose.connection;

db.on('error', (err) => {
  console.log('mongoose connection error ', err);
});

db.once('open', () => {
  console.log('mongoose connected successfully!');
});

const itemSchema = mongoose.Schema({
  quantity: Number,
  description: String,
});

const Item = mongoose.model('Item', itemSchema);

const selectAll = function (callback) {
  Item.find({}, (err, items) => {
    if (err) {
      console.log('this is a db error ', err);
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
