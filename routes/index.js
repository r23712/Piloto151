require('mongodb').MongoClient.connect('mongodb://localhost:27017/piloto151',
  {native_parser: true}, function (e, db) {
    if (e) {
      console.log(e);
      process.exit();
    }
    this.db = db;
  });
require('fs').readFile('./fizzbuzz', function (e, solution) {
  if (e) {
    console.log(e);
    process.exit();
  }
  this.solution = solution;
});

var exec = require('child_process').exec;

exports.index = function (req, res) {
  res.render('index');
};

function save(req, res) {

}

exports.check = function (req, res) {
  /*
  if (req.param('language') === 'java') {
    });
  } else {
    exec()
  }
  exec(command, function (e, stout, stde) {
    if (stdout === solution) res.send(200);
    else res.send(400);
  */
};

