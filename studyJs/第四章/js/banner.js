(function(){
    var banner=document.getElementById("banner"),bannerInner=utils.firstChild(banner);

    //1、实现数据绑定：Ajax请求数据
    var jsonData=null;
    ~function(){
        var xhr=new XMLHttpRequest;
        xhr.open("get","json/banner.txt?="+Math.random(),false);
        xhr.onreadystatechange=function(){
            if(xhr.readySate===4 && /^2\d{2}$/.test(xhr.status)){
                jsonData=utils.formatJSON(xhr.responseText);
            }
        };
        xhr.send(null);
    }();
    //2、实现数据绑定：按照字符串拼接的方式绑定数据
    ~function(){
        var str="";
        if(jsonData){
            for(var i=0,len=jsonData.length;i<len;i++){
                var curData=jsonData[i];
                str+='<img src="'+curData["img"]+'"/>';
            }
        }
        console.log(str);
        bannerInner.innerHTML=str;
    }();
})();