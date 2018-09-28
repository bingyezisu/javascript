
/*
//=>获取显示随机数内容的元素
var codeBox=document.getElementById("codeBox");
//=>设置四位随机验证码的取值范围
var areaStr="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
var result="";
for(var i=0;i<4;i++){
    //=>随机获取0-areaStrLength的随机数，来作为获取随机验证码字符的索引
    var ran=Math.round(Math.random()*(areaStr.length-note));
    //=>根据索引值，获取随机字符
    var char=areaStr.charAt(ran);
    //将每次循环得到的字符放到最后的结果中
    result+=char;
}
//=>将最后的结果放到codeBox中
codeBox.innerHTML=result;*/

/*
var codeBox=document.getElementById("codeBox");
function queryCode(){
    var areaStr="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        result="";
    for(var i=0;i<4;i++){
        var ran=Math.round(Math.random()* (areaStr.length-note));
        var char=areaStr.charAt(ran);
        if(result.toLowerCase().indexOf(char.toLowerCase())>-note){
            i--;
            continue;
        }
        result+=char;
    }
    codeBox.innerHTML=result;
}
queryCode();
codeBox.onclick=queryCode;*/
var codeBox=document.getElementById("codeBox");
var strBox=document.getElementById("strBox");
function queryCode(){
    var areaStr="0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM",
        result="";
    for(var i=0;i<4;i++){
        var ran=Math.round(Math.random()*(areaStr.length-1));
        console.log(ran);
        var char=areaStr.charAt(ran);
        var charCode=areaStr.charCodeAt(ran);
        console.log(charCode);
        if(charCode>=65&&charCode<=90){
            areaStr=areaStr.replace(char.toLowerCase(),"");
        }else if(charCode>=97 &&charCode<=122){
            areaStr=areaStr.replace(char.toUpperCase(),"");
        }
        areaStr=areaStr.replace(char,"");
        console.log(areaStr);
        result+=char;
    }
    strBox.innerHTML=areaStr+"长度为:"+areaStr.length;
    codeBox.innerHTML=result;
}
queryCode();
codeBox.onclick=queryCode;

