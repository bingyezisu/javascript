/*
"use strict";
function sum(){
    console.log(arguments.callee.caller);//=>Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them
}
function fn(){
    sum(10,20,"candy",{name:"candy"})
}
fn();*/

/*function sum(){
   var total=null;
   for(var i=0;i<arguments.length;i++){
       var cur=arguments[i];//=>每一轮循环获取当前传递的实参值
       //=>为了防止字符串+数字是字符串拼接不是数学的累加，我们最好吧其他数据类型首先转换为number类型
       cur=Number(cur);
       //=>为了防止传递的是非有效数字（数字+NaN=NaN），我们最好做一下非有效数字的检测：有效数字才累加
       if(isNaN(cur)===false){
            total+=cur;
       }
   }
    console.log(total);
}*/
//=>任意数求和
function sum(){
    var total=null;
    for(var i=0;i<arguments.length;i++){
        var cur=Number(arguments[i]);
        !isNaN(cur)?total+=cur:null;
    }
    return total;//=>RWTURN后面跟着的都是值（返回的都是值）：此处不是把total变量返回，而是把total存储的值返回而已
}
console.log(sum(10, 20, 30));
//=>sum:代表的函数本身
//=>sum():让函数先执行，代表的是当前函数返回的结果（RETURN后面是啥，相当于函数返回的是啥）
