// 核心模块 fs 直接引入 不需要下载
const fs = require('fs');
const { resolve } = require('path');
// // 同步
// const file = fs.openSync('hellow.txt', 'w');
// fs.writeSync(file, '今天星期五nanan ');
// fs.closeSync(file);
// // 异步 错误优先
// // 优点 错误不会影响整个代码 不会阻塞程序 性能比较好
// fs.open('hello2.txt', 'w', (err, fd) => {
//     if (!err) {
//         fs.write(fd, '明天周六', 5, (err, written) => {
//             if (!err) {
//                 fs.close(fd, (err) => {
//                     if (!err) {
//                         console.log('文件关闭')
//                     }
//                 })
//             }
//         })
//     }
// })
// 简单文件写入
// fs.writeFile('htllo3.txt','哈哈哈哈', { flag: 'w' }, (err) => {
    
// })
// 流文件写入
// const ws = fs.createWriteStream('hello4.txt');
// ws.once('open', () => {
//     console.log('我打开了')
// });
// ws.once('close', () => {
//     console.log('我关闭了')
// });
// ws.write('1123')
// ws.write('456')
// ws.write('789')
// ws.write('101112')
// 关得是读取那一端
// ws.end();

// 简单文件读取
// fs.readFile('./image/bear-bird.jpg', (err, data) => {
//     if (!err) {
//         fs.writeFile('copy.jpg', data, (err) => {
//             console.log('拷贝了一张图片')
//         })
//     }
// })
// 流文件读取
// const rs = fs.createReadStream('./image/bear-bird.jpg');
// const ws = fs.createWriteStream('copy3.jpg');
// 监听data事件 获取读取的数据
// rs.once('data', (data) => {
//     ws.write(data)
// });
// 简单方法 直接读取写入
// rs.pipe(ws);
// const isExist = fs.existsSync('./copy3.jpg');
// console.log(isExist);
// fs.stat('copy3.jpg', (err, stat) => {
//     console.log(stat.isFile());
// })
// 删除文件
// fs.unlinkSync('copy3.jpg')
// fs.writeFile('copy2.txt', '123', (err) => {
//     console.log(err)
// })
// fs.unlink('copy2.txt',(err)=>{console.log(err)})
// 读取一个目录结构
// fs.readdir(".", (err, files) => {
//     console.log(err, files)
// }); 
// 截断文件 将文件截断为指定大小
// fs.truncateSync('copy2.txt', 1);
// 创建文件夹
// fs.mkdir('1.txt', (err) => {
//     console.log(err)
// });
// fs.renameSync('hello.txt','hhhhh.txt')
// 监视文件的修改
// fs.watchFile('hhhhh.txt', (curr,pre) => {
//     console.log('修改后'+curr.size,'修改前'+pre.size)
// })
// fs.stat('./test', (err, data) => {
//     if (err) {
//         console.log(err)
//         fs.mkdir('./test', (err) => { });
//         return;
//     }
//     if (data.isDirectory()) {
//         console.log('目录存在')
//     } else {
//         fs.unlink('./test', (err) => {
//             if (err) {
//                 console.log(err)
//             } else {
//                 fs.mkdir('./test', (err) => { })
//             }
//         })
//     }
// });
// function isDir(dir) {
//     return new Promise((resolve) => {
//         fs.stat(dir, (err, data) => {
//             if (!err) {
//                 resolve(data.isDirectory());
//             }
//         })
//     })
// }
// // 将当前目录下的文件放在数组 并判断是否是文件夹
// fs.readdir('./', async (error, data) => {
//     if (!error) {
//         console.log(data)
//     }
//     for (var i = 0; i < data.length; i++) {
//         // 我感觉await就是执行了.then  异步代码变成同步
//         console.log(await isDir(data[i]));
//         console.log(123)
//     }
// });

// function test() {
//     var arr = [1, 2, 3]
//     for (var i = 0; i < arr.length; i++){
//         ((i) => {
//             setTimeout(() => {
//                 console.log(i)
//             },500)
//         })(i)
//     }
// }
// test()
// 这样就算报错 也阔以进行下去 哇哈哈哈
try {
    const res = fs.readFileSync('hahah.js');
    console.log(res)
} catch (error) {
    
}
console.log(123)