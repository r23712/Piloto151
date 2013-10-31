var fs = require('fs');
var exec = require('child_process').exec;
var client = require('knox').createClient({
  key: 'AKIAJYUKSW5FNKZQWI2Q',
  secret: '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',
  bucket: 'piloto151-resume'
});

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
  this.solution = solution.toString();
});

exports.index = function (req, res) {
  res.render('index');
};

function save(req) {
  var s3 = client.put(req.files.resume.path, { 'x-amz-acl': 'public-read' });
  s3.on('response', function (res) {
    if (res.statusCode === 200) {
      req.body.resume = req.url;
    }
    this.db.collection('applicants', function (e, collection) {
      collection.insert(req.body);
    });
  });
}

exports.check = function (req, res) {
  delete req.body._csrf;
  var filename = Math.floor((Math.random() * 1000) + 1);
  fs.writeFile('./' + filename, req.body.code, function (e) {
    if (e) {
      res.send(500);
    }
    exec('node ' + filename, function (e, stout, stde) {
      fs.unlink('./' + filename, function (error) {
        if (e) {
          res.send(500);
        }
        if (stout === this.solution) {
          save(req);
          res.send(200);
        } else {
          res.send(400);
        }
      });
    });
  });
};