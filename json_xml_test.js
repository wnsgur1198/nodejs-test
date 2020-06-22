fs = require('fs');
var parser = require('xml2json');

fs.readFile( './survey.xml', function(err, data) {
  var json = JSON.parse(parser.toJson(data, {reversible: true}));
  var answers = json["Survey"]["Answer"];
  for (var i = 0; i < answers.length; i++) {
    var answer = answers[i];
    answer.AnswerId = i;
  }

  var stringified = JSON.stringify(json);
  var xml = parser.toXml(stringified);
  fs.writeFile('survey-fixed.xml', xml, function(err, data) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('updated!');
    }
  });
});
