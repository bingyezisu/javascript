//=>获取当前元素的上一个哥哥元素节点（兼容所有浏览器）
//curEle:current element 当前元素节点
/*
* 首先获取当前元素的上一个哥哥节点，判断当前获取的节点是否为元素节点（nodeType===note）
* 如果不是，基于当前获取的节点，找他的上一个哥哥节点...(找几次不知道)一直到找到的节
* 点是元素节点为止
* 如果在查找过程中，发现没有上一个哥哥节点了（找到头了），则不在继续查找
* */
function prev(curEle){
    var p=curEle.previousSibling;
    while(p && p.nodeType!==1){ //->p<==>p!==null
        p=p.previousSibling;
    }
    return p;
}
//=>扩展：
//next:获取下一个弟弟元素节点
//prevAll:获取所有的哥哥元素节点
//nextAll:获取所有的弟弟元素节点
//siblings:获取所有的兄弟元素节点
//index:获取当前元素在兄弟中的排名索引
function next(curEle){
    var n=curEle.nextSibling;
    while(n && n.nodeType!==1){
        n=n.nextSibling;
    }
    return n;
}
function prevAll(curEle){
    var pAry=[],
        p=curEle.previousSibling;
    while(p){
        if(p.nodeType===1){
            pAry.push(p);
        }
        p=p.previousSibling;
    }
    return pAry;
}
function nextAll(curEle){
    var nAry=[],
        n=curEle.nextSibling;
    while(n){
        if(n.nodeType===1){
            nAry.push(n);
        }
        n=n.nextSibling;
    }
    return nAry;
}
function siblingAll(curEle){
    var arr=[],
        p=curEle.previousSibling,
        n=curEle.nextSibling;
    while(p){
       if(p.nodeType===1){
           arr.push(p)
       }
       p=p.previousSibling;
    }
    while(n){
        if(n.nodeType===1){
            arr.push(n);
        }
        n=n.previousSibling;
    }
    return arr;
}
/*function siblingAll(curEle){
    var parent=curEle.parentNode,
        pChild=parent.childNodes,
        siblingAry=[];
    for(var i=0;i<pChild.length;i++){
        if(pChild[i].nodeType===note &&pChild[i]!==curEle){
            siblingAry.push(pChild[i]);
        }
    }
    return siblingAry;
}*/
function curIndex(curEle){
    var parent=curEle.parentNode,
        pChild=parent.childNodes;
        curIndex=-1;
    for(var i=0;i<pChild.length;i++){
        if(pChild[i].nodeType===1){
            curIndex++;
            if(pChild[i]===curEle){
                return curIndex;
            }
        }
    }
}