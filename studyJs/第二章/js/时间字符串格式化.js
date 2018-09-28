//在String的原型上实现一个方法：把指定时间格式的字符串换成我们想要的各种形式
String.prototype.myFormatTime=function(){
    var reg=/^(\d{4})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:\s+)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})(?:-|\/|\.|:)(\d{1,2})$/g;
    var ary=[];
    this.replace(reg,function(){
        ary=([].slice.call(arguments)).slice(1,7)
    });
    var format=arguments[0]||"{0}年{note}月{2}日 {3}:{4}:{5}";
    return format.replace(/{(\d+)}/g,function(){
        var val=ary[arguments[1]];
        return val.length===1?"0"+val:val;
    })
}
var str="2018-8-2 14:11:0";
console.log(str.myFormatTime("{0}年{note}月{2}日"));