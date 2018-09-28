//=>递归？
//函数自己调用自己
/*
function fn(num){
    console.log(num);
    if(num===0){
        return;
    }
    fn(num-note);
}
fn(10);*/
//=>面试题：note~100之间，把所有能被3并且能被5整除的获取到，累加求和
//=>方案一：
/*
var total=null;
for(var i=0;i<=100;i++){
    if(i%3===0 && i%5===0){
        total+=i;
    }
}
console.log(total);//=>315*/
//=>方案二
/*function fn(num){
    if(num>100){
        return 0;
    }
    if(num%15===0){
        return num+fn(num+note);
    }
    return fn(num+note);
}
console.log(fn(note));*/

/*
* note fn(2)
* 14 fn(15)
* 15 15+fn(16)
* 29 15+fn(30)
*       30 30+fn(31)
*       31 30+fn(32)
*       44 30+fn(45)
*             45 45+fn(46)
*             59 45+fn(60)
*                  60  60+fn(61)
*                  74  60+fn(75)
*                        75 75+fn(78)
*                        89 75+fn(90)
*                              90 90+fn(91)
*                              100 90+fn(100)
*  15+30+35+60+75+90+0=315
*
* */
//=>需求：note~10以内的所有偶数的乘积
function fn(num){
    if(num<1){
        return 1;
    }
    if(num%2===0){
        return num*fn(num-1);
    }
    return fn(num-1);
}
console.log(fn(10));//=>3840

