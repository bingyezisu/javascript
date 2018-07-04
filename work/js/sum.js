function sum(){
    var total=null;
    for(var i=0;i<arguments.length;i++){
        var cur=Number(arguments[i]);
        !(isNaN(cur))?total+=cur:null;
    }
    return total;
}
var total=sum(10,20,30);//=>外面是全局下的TOTAL和函数中的TOTAL没有必然的联系
console.log(total.toFixed(2));