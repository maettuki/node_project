var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('guardhome');
});
router.post('/',function(req, res, next) {
  
})
module.exports = router;
