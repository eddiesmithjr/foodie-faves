var mongoose = require('mongoose');
const dbUrl = process.env.DBURL || 'mongodb://localhost/test';
mongoose.connect(dbUrl, { useMongoClient: true});
// debugger;
var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  quantity: Number,
  description: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;