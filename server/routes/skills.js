module.exports = function(app) {
  var _ = require('lodash');
  var request = require('request-json');
  var fs = require('fs');

  var skills = [
    {
      name: 'HTML 5',
      id: 0,
      _id: 0
    },
    {
      name: 'CSS3',
      id: 1,
      _id: 1
    },
    {
      name: 'Javascript',
      id: 2,
      _id: 2
    }
  ];

  app.route('/api/skills')
    .get(function(req, res) {
    		res.send(skills);
    })
   
  app.route('/api/skills/:id')
    .get(function(req, res) {
      var obj = _.find(skills, function(obj) { return obj.id == req.params.id });
      res.send(obj);
    })

  app.route('/skills/:id')
    .get(function(req, res) {
      var obj = _.find(skills, function(obj) { return obj.id == req.params.id });
      var client = request.createClient('http://api.indeed.com/ads/apisearch?publisher=6924066004310579&q=' + obj.name + '&v=2&format=json&co=gb&fromage=30');

      client.get('', function(err, _res, body) {
        obj.results = body.totalResults;
        res.render('./../app/skill.ejs', obj);
      });
    })
};
