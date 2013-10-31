var fs = require('fs');
var exec = require('child_process').exec;

require('mongodb').MongoClient.connect('mongodb://localhost:27017/piloto151',
  {native_parser: true}, function (e, db) {
    if (e) {
      console.log(e);
      process.exit();
    }
    this.db = db;
  });

fs.readFile('./fizzbuzz', function (e, solution) {
  if (e) {
    console.log(e);
    process.exit();
  }
  this.solution = solution;
});

exports.index = function (req, res) {
  res.render('index');
};

function save(req, res) {

}

exports.check = function (req, res) {
  console.log(req);
  res.send(200);
  /*
  var filename = Math.floor((Math.random()*1000)+1);
  fs.writeFile(filename, req.bo)
  exec(command, function (e, stout, stde) {
    if (stdout === solution) res.send(200);
    else res.send(400);
  */
};

