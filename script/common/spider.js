
var https = require('https');
var fs = require('fs');
//解析网页
var cheerio = require('cheerio');

//删除文件后，传入评论的昵称，内容等保存到本地comment.tex文件中
fs.unlink('./data/comment.txt', function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("文件删除成功！");
});
savedContent = function (item) {
//将新闻文本内容一段一段添加到/data文件夹下，并用新闻的标题来命名文件
    fs.appendFile('./data/' + 'comment.txt', "ID："+item.nickname
        +"\t\t\t评论"+item.comment
       /* +"\t"+item.star
        +"\t"+item.vote
        +"\t"+item.state
        +"\t"+item.time+"\n"*/
        , 'utf-8', function (err) {
            if (err) {
                console.log(err);
            }
        });
};

pageDeal = function(html){
    $ = cheerio.load(html);
    var commentList = $('.comment-item');
    var itemList = [];
    commentList.each(function(item) {
        var cap = $(this);
        var item = {//昵称 星级 状态 投票 时间 评论内容
            nickname:cap.find('.avatar').find('a').attr('title'),
            star:cap.find('.comment-info').find('span.allstar10').attr('title'),
            state:cap.find('.comment-info').find('span').first().text(),
            vote:cap.find('.comment-vote').find('span.votes').text(),
            time:cap.find('.comment-info').find('.comment-time').text(),
            comment: cap.find('.comment').find('p').text(),
        }
        console.log(item);
        savedContent(item);

    });
}

getNextUrl = function (html){
    $ = cheerio.load(html);
    var nextPageuRL = $('#paginator').find('a.next').attr('href');
    var finalUrl = "https://movie.douban.com/subject/6982558/comments"+ nextPageuRL;
    //只要获取到最后下一页的连接，那么直接获取网页内容然后调用函数执行。
    return finalUrl;
};

startRequest = function(url,i){
    https.get(url, function(res) {
        var html='';
        res.on('data', function(data) {
            html += data;
        });
        res.on('end',function() {
            //console.log(html);
            i++;
            //将html告诉cherrio解析
            if(i<9){
                pageDeal(html);
                nextPage = getNextUrl(html);
                console.info(nextPage);
                startRequest(nextPage,i);
            }
            else{
                console.log("由于豆瓣限制，只能够暂时爬取前8页");
            }
        });
    }).on('error', function() {
        console.log('error');
    });
};

exports.fetch = function(url,i){
    startRequest(url,i);
};
