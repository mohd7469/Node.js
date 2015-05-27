var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res) {
  //console.log(req.body.name);
  res.send(req.body.name);
});
router.get('/hello', function(req, res) {
  //console.log(req.body.name);
  res.send('welcome hello world');
});
router.get('/array', function(req, res) {
  //console.log(req.body.name);
  var objArr=[{name:'awais'},{name:'bilal'},{name:'noman'}];
  res.json(objArr);
});
router.post('/array', function(req, res) {
  //console.log(req.body.name);
  var objArr=[{name:'awais'},{name:'bilal'},{name:'noman'}];
  res.json(req.body);
});
module.exports = router;
