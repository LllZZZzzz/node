const path = require('path');
const fs = require('fs');
// 查找静态资源路径对应的contentType类型
function getContentType(url) {
    const data = JSON.parse(fs.readFileSync('./type.json').toString());
    const extname = path.extname(url+'');
    return data[extname]+'';
}
// 创建访问静态资源
function static(req, res, staticPath) {
    getContentType();
    try {
        res.writeHead(200, { 'Content-Type': `${getContentType(req.url)},charset=utf-8` });
        res.end(fs.readFileSync(staticPath + req.url));
    } catch (error) {
    }
}
module.exports.static = static