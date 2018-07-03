/*
* 需求：点击哪一个li,就让其有select这个样式类（对应的div也有这个样式类），其余的li（div）都把select样式类移除即可
*
* 不管点击哪一个li，我首先让所有的li（div）都移除select，再让当前点击的有select样式类
* */
var tabBox = document.getElementById("tabBox"),
    oList = tabBox.getElementsByTagName("li"),
    oDivList = tabBox.getElementsByTagName("div");

//=>创建一个函数实现页卡切换的功能
function change(index) {
    //->index： 形参，实现方法的时候我们不知道用户点击的是哪一个li，设定一个入口，当用户点击需要页卡切换的时候，只要执行change方法，并把点击这个li的索引传递给我们，我们就可以在oList集合中通过索引获取到当前点击对的这个li对象
    //->让所有的li和div移除select样式类
    for (var i = 0; i < oList.length; i++) {
        oList[i].className = "";
        oDivList[i].className = "";
    }
    //->让当前点击的这个li有选中的样式
    oList[index].className = "select";
    oDivList[index].className = "select";
}

//=>给每一个li绑定点击事件，点击的时候执行change方法，把当前点击li的索引传递进来，实现页卡的切换
/*
for (var i = 0; i < oList.length; i++) {
    oList[i].index=i;
    oList[i].onclick=function(){
        console.log(i);//=>3 不管点击哪一个li输出的结果都为3
        change(this.index);
    }
}*/
//=>使用闭包实现
/*for(var i=0;i<oList.length;i++){
    ~ function (i){
        oList[i].onclick=function(){
            change(i);
        }
    }(i);
}*/
for (var i = 0; i < oList.length; i++) {
    oList[i].onclick = (function (i) {
        return function () {
            change(i);
        }
    })(i)
}