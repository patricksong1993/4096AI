function ShareTofriends(img_url,link,title,desc) {  
        //在HTML页面内嵌入这一段JS代码
    if(window.WeixinJSBridge)
    {
        if( typeof(img_url) == 'undefined' || img_url == "")
        {
            var img_url = "http://www.sample.com/test.jpg";
        }
        if( typeof(link) == 'undefined' || link == "")
        {
            var img_url = window.location.href;
        }
        if ( typeof(title) == 'undefined' || title == "" ) 
        {
            var title = '点开看一下吧!';
        }
        if( typeof(desc) == 'undefined' || desc == "")
        {
            var desc = "wendoscoo";
        }
        WeixinJSBridge.invoke('shareTimeline',{
            "img_url": img_url,
            //"img_width": "640",
            //"img_height": "640",
            "link": link,
            "desc": desc,
            "title": title
        },function(res){
            // 返回res.err_msg,取值
            // share_timeline:cancel 用户取消
            // share_timeline:fail　发送失败
            // share_timeline:ok 发送成功
            WeixinJSBridge.log(res.err_msg);
        });
        return false;
    }
    else
    {
        alert("WeixinJSBridge对象不存在!!");
    }
};