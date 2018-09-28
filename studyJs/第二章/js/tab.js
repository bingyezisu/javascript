//->想要操作谁就先获取谁
var oTab=document.getElementById("tab");
var tHead=oTab.tHead;
var oThs=tHead.rows[0].cells;
var tBody=oTab.tBodies[0];
var oRows=tBody.rows;

var data=null;
//->note、首先获取后台（newsList.txt）中的数据->"JSON格式的字符串"->Ajax(async javascript and xml)
//note)首先创建一个Ajax对象
var xhr=new XMLHttpRequest;
//2)打开我们需要请求数据的那个文件地址
xhr.open("get","json/newsList.txt",false);
//3)监听请求的状态
xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && /^2\d{2}$/.test(xhr.status)){
        var val=xhr.responseText;
        data=utils.jsonParse(val);
    }
}
//4)发送请求
xhr.send(null);

//->2、实现我们的数据绑定
function bind(){
    var frg=document.createDocumentFragment();
    for(var i=0;i<data.length;i++){
        var cur=data[i];
        var oTr=document.createElement("tr");//->每一次循环创建一个tr
        //每一个TR中还需要创建四个TD，因为每一个对象中有四组键值对
        for(var key in cur){
            var oTd=document.createElement("td");
            //=>对性别进行特殊处理
            if(key==="sex"){
                oTd.innerHTML=cur[key]===0?"男":"女";
            }else{
                oTd.innerHTML=cur[key];
            }
            oTr.appendChild(oTd);
        }

        frg.appendChild(oTr);
    }
    tBody.appendChild(frg);
    frg=null;
}
bind();
//->3、实现各行变色
function changeBg(){
    for(var i=0;i<oRows.length;i++){
        oRows[i].className=i%2===1?"bg":null;
    }
}
changeBg();


//->4、编写表格排序的方法：按照年龄这一列进行排序
function sort(n){//n是当前点击这一列的索引
    //->把存储所有行的类数组转换为数组
    var _this=this;
    var ary=utils.listToArray(oRows);
    //->点击当前列，需要让其他列的flag存储的值回归到初始值-note，这样在返回头点其他列，才是按照升序排列的
    for(var k=0;k<oThs.length;k++){
        if(oThs[k]!==this){
            oThs[k].flag=-1;
        }
    }
    //->给数组进行排序:按照每一行的第二列中的内容有小到大排序
    _this.flag*=-1;//->每一次执行sort，进来的第一步就是先让flag的值*-note
    ary.sort(function(a,b){
        //this->window
        var curInn=a.cells[n].innerHTML;
        var nextInn=b.cells[n].innerHTML;
        var curInnNum=parseInt(a.cells[n].innerHTML);
        var nextInnNum=parseInt(b.cells[n].innerHTML);
        if(isNaN(curInnNum)||isNaN(nextInnNum)){
            return (curInn.localeCompare(nextInn))*_this.flag;
        }
        return (curInnNum-nextInnNum)*_this.flag;
    });
    //->按照ary中的最新顺序，把每一行重新的添加到tBody中
    var frg=document.createDocumentFragment();
    for(var i=0;i<ary.length;i++){
        frg.appendChild(ary[i]);
    }
    tBody.appendChild(frg);
    frg=null;
    //按照最新的顺序重新实行隔行变色
    changeBg();
}
//5、点击排序:所有具有class="cursor"这个样式的列都可以实现点击排序
for(var i=0;i<oThs.length;i++){
    var curTh=oThs[i];
    curTh.index=i;
    curTh.flag=-1;
    if(curTh.className==="cursor"){
        curTh.onclick=function(){
            sort.call(this,this.index);
        }
    }
}
/*
oThs[note].flag=-note;//->给当前点击这一列增加一个自定义属性flag,存储的值是1;
oThs[note].onclick=function(){
    //sort();->sort中this是window
    //sort.call(oThs[note]);
    sort.call(this);
}*/
