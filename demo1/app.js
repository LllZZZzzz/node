// 自动生成
// var http = require('http');
// http.createServer(function (request, response) {
//   response.writeHead(200, {'Content-Type': 'text/plain'});
//   response.end('Hello World');
// }).listen(8081);

// console.log('Server running at http://127.0.0.1:8081/');

// http模块 url模块
// 手动创建
// 解决乱码 响应头的编码格式和页面的编码格式(meta标签设置)要相同
// const http = require('http');
// const {URL} = require('url');
// const url = require('url');
// http.createServer((req, res) => {
//     const origin = 'http://localhost:3000'
//     res.writeHead(200, { 'content-type': 'text/html', 'charset': 'ute-8' });
//     res.write('<head><meta chartset="UTF-8"></meta></head>');
//     res.write('<h1>123</h1>');
//     res.end();
//     if (req.url !== '/favicon.ico') {
//         console.log(new URL(req.url,origin).searchParams.get('name'))
//     }
// }).listen(3000)·
// 自定义模块 放在node_modules 默认会去找文件夹中的index.js文件 如果有packages.json则入口文件为packages.json中的main值
console.log(require('test'))