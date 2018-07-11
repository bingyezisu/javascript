var newsBox=document.getElementById("newsBox");
var newsList=newsBox.getElementsByTagName("li");
/*
for(var i=0;i<newsList.length;i++){
    /!*
    * i=0 第一次循环  第一个li newsList[0]
    * i=1 第二次循环  第二个li newsList[1]
    *  newsList[i] 当前这一轮循环，我们获取到想要操作的那个li
    *
    *  第一个li(奇数行) 索引是0（偶数）
    *  第二个li(偶数行) 索引是1(奇数)
    * *!/
    if(i%2===1){
        newsList[i].style.backgroundColor="#EEE";
    }
}*/
/*for(var i=0;i<newsList.length;i++){
    i%2===1? newsList[i].style.backgroundColor="#EEE":null;
}*/
//=>思考题：实现每三个为一组的颜色切换（红绿蓝）
/*
for(var i=0;i<newsList.length;i++){
    if(i%3===0){
        newsList[i].style.backgroundColor="red";
    }else if(i%3===1){
        newsList[i].style.backgroundColor="green";
    }else if(i%3===2){
        newsList[i].style.backgroundColor="blue";
    }
}*/
for(var i=0;i<newsList.length;i++){
    switch(i%3){
        case 0:
            newsList[i].style.backgroundColor="red";
            break;
        case 1:
            newsList[i].style.backgroundColor="green";
            break;
        default:
            newsList[i].style.backgroundColor="blue";
    }
}