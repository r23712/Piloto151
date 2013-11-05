var sendgrid = require('sendgrid')(process.env.SG_USER, process.env.SG_PWD);

exports.index = function (req, res) {
  res.render('index');
};

exports.save = function (req, res) {
  sendgrid.send({
    to: 'yamil.asusta@upr.edu',
    from: 'yamil.asusta@upr.edu',
    subject: 'Piloto application',
    text: JSON.stringify(req.body),
    files: [
      {
        filename: req.files.resume.name,
        contentType: req.files.resume.type,
        path: req.files.resume.path
      }
    ]
  }, function (e, json) {
    res.redirect('http://piloto151.com');
  });
};