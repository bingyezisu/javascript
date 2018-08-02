var utils={
    //->listToArray:实现将类数组转换为数组
    listToArray:function(likAry){
        var ary=[];
        try{
            ary=Array.prototype.slice.call(likAry);
        }catch(e){
            for(var i=0;i<likAry.length;i++){
                ary[ary.length]=likAry[i];
            }
        }
        return ary;
    },
    //=>jsonParse:把JSON格式的字符串转换为JSON格式的对象
    jsonParse:function(str){
        var jsonObj=null;
        try{
           jsonObj=JSON.parse(str);
        }catch(e){
            jsonObj=eval("("+str+")");
        }
        return jsonObj;
    }
}