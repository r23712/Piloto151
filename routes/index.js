require('mongodb').MongoClient('mongodb://localhost:27017/piloto151',
  {native_parser: true}, function (e, db) {
    this.db = db;
  });
/*
 * GET home page.
 */

exports.index = function (req, res) {
  res.render('index');
};

exports.check = function (req, res) {

};

exports.save = function (req, res) {

};