var express = require('express');
var comment = require('../script/common/getComment');
var router = express.Router();
var fs= require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {

  var list = comment.getComment();
  console.log(list);
  res.render('index', { title: '《长城》豆瓣部分影评',list: list });
});

module.exports = router;
