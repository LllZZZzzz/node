const http = require('http');
const { static } = require('./urils/static');
const ejs = require('ejs');
const url = require('url');
http.createServer((req, res) => {
    // 默认访问的页面
    if (req.url == '/') {
        req.url='/index.html'
    }
    // 访问静态页面
    static(req, res, './static');
    const pathName = url.parse(req.url, true).pathname;
    if (pathName == '/login') {
        const list = [
            '我','啊',3
        ]
        ejs.renderFile('./pages/login.ejs', { msg: '我是ejs渲染的服务器获取的数据', list }, (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
            res.end(data);
        });
    }
    // 动态渲染页面 （路由）
    if (pathName == '/doLogin') {
        // 获取post传过来的数据 以流的方式传过来的 所以要以流的方式读取
        let postMessage = '';
        req.on('data', (data) => {
            postMessage += data;
        });
        req.on('end', () => {
            ejs.renderFile('./pages/doLogin.ejs', { msg: postMessage }, (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html;charset=Utf-8' });
                res.end(data);
            });
        })
    }
}).listen(8081)
