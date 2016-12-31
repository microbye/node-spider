/**
 * Created by dengb on 2016/12/30.
 */
var fs = require('fs');
//获取评论
exports.getComment = function() {
    var list ={};
    console.log('--------开始读取文件--------');
    list  = fs.readFileSync('data/comment.txt');
    console.log('--------读取结束--------');
    list = list.toString();
    return list.split('\n');
};