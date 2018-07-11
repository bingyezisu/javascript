//=>插入排序
var ary=[12,15,14,13,16,11];
function insert(ary){
    //->先抓一张牌（一般都是抓第一张）
    var handAry=[];//->存储的是手里已经抓取的牌
    handAry.push(ary[0]);

    //->依次循环抓取后面的牌
    for(var i=1;i<ary.length;i++){
        var item=ary[i];//->本次新抓的这张牌

        //->拿新抓的牌和手里现有的牌比较
        for (var j = handAry.length-1; j >=0; j--) {
            //handAry[j]://当前比较的手里的这正牌
            //->新抓的牌比当前比较的这张牌打了，我们把新抓的牌放在它的后面
            if(item>handAry[j]){
                handAry.splice(j+1,0,item);
                break;
            }
            if(j===0){
                //新抓的牌是最小的，我们把新抓的牌放在最开始的位置
                handAry.unshift(item);
            }
        }
    }
    return handAry;
}
console.log(insert(ary));