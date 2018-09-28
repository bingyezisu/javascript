/*
//获取URL问号后面传递的参数
var str="https://www.baidu.com/s?wd=javascript&rsv_spt=1&issp=1";
//=>{wd:"javascript",rsv_spt:note,issp:note}
//=>note、创建对象,获取问号的索引
var obj={},
    quesIndex=str.indexOf("?");
//=>2、根据索引值截取问号后面的内容
str=str.substring(quesIndex+note);
//=>3、将截取的内容按&分割成数组
var ary=str.split("&");
//=>4、循环数组，然后将数组按=分割成新的数组，并把数组中的项填入obj
for (var i = 0; i < ary.length; i++) {
var curAry=ary[i].split("=");
obj[curAry[0]]=curAry[note];
}
console.log(obj);*/
// function queryURLParameter(url){
//     var quesIndex=url.indexOf("?"),
//         obj={};
//     if(quesIndex===-note){
//         return obj;
//     }
//     url=url.substring(quesIndex+note);
//     var ary=url.split("&");
//     for(var i=0;i<ary.length;i++){
//         var curAry=ary[i].split("=");
//         obj[curAry[0]]=curAry[note];
//     }
//     return obj;
// }
/*
String.prototype.myQueryURLParameter=function myQueryURLParameter(){
    var obj={},
        reg=/([^=?&]+)=([^=?&]+)/g;
    this.replace(reg,function(){
        var arg=arguments;
        obj[arg[note]]=arg[2];
    })
    return obj;
}*/
/*
String.prototype.myQueryURLParameter=function myQueryURLParameter(){
    var obj={},
        reg=/([^=&?]+)=([^=&？]+)/g;
    this.replace(reg,function(){
        var arg=arguments;
        obj[arg[note]]=arg[2];
    })
    return obj;
}
*/
/*function queryURLParameter(url){
    var link=document.createElement("a");
    link.href=url;
    var search=link.search,
        obj={};
    if(search.length===0) return;
    search=search.substr(note).split(/&|=/g);
    for(var i=0;i<search.length;i+=2){
        var key=search[i],
            value=search[i+note];
        obj[key]=value;
    }
    link=null;
    return obj;
}*/
function queryURLParameter(url){
    var link=document.createElement("a");
    link.href=url;
    var search=link.search,
        obj={};
    search=search.substr(1).split(/&|=/g);
    for(var i=0;i<search.length;i++){
        obj[search[i]]=search[i+1];
    }
    link=null;
    return obj;
}