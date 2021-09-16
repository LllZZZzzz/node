const fs = require('fs')
const http = require('http');
const path = require('path');
// 静态资源的访问
http.createServer(function (request, response) {
    // 请求static静态资源 判断请求的url 发送对应请求
    if (request.url !== 'favicon.ico') {
        fs.readFile(`static/${request.url}`, (err, data) => {
            if (err) {
                response.writeHead(404, { 'Content-Type': 'text/html;charset="utf-8"' });
                response.end('404页面丢了。。。');
            } else {
                // 响应的类型
                // text/html text/css text/javascript
                // 更多的响应类型可自定义方法获取。。这里先不玩了。。
                console.log(data)
                response.writeHead(200, { 'Content-Type': `text/${path.extname(request.url).replace('.','')};charset="utf-8"` });
                response.end(data);
            }
        })
    }
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');