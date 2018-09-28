var url=require("url");
var str="http://192.168.0.32:80/index.html?name=candy&age=28#bbs";
console.log(url.parse(str));

/*
Url {
  protocol: 'http:',传输协议
  slashes: true,
  auth: null,
  host: '192.168.0.32:80', 域名+端口号
  port: '80', 端口号
  hostname: '192.168.0.32', 域名（IP）
  hash: '#bbs',哈希值
  search: '?name=candy&age=28',问号+传递进来的数据
  query: 'name=candy&age=28', 传递进来的数据，没有问号
  pathname: '/index.html', 请求文件的路径及名称
  path: '/index.html?name=candy&age=28', 路径名称+传递的数据
  href: 'http://192.168.0.32:80/index.html?name=candy&age=28#bbs'
  }
* */
console.log(url.parse(str,true));//->增加true后，query中存储的是经过处理解析后的结果：把传递进来的多组数据以键值对方式进行存储
/*
* Url{
* ....
*   query: { name: 'candy', age: '28' },
* ....
*
* }
*
* */


