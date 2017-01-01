var express = require('express');
var comment = require('../script/common/getComment');
var router = express.Router();
var fs= require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {

  var list = comment.getComment();
  console.log(list);
  res.render('index', { title: 'Hello world',list: list });
});

module.exports = router;
