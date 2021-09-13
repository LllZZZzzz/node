/*
    创造出的专门存储二进制文件的数组
    buffer中存储的都是二进制数据 但是显示的是以16进制显示
    一个字母=1bit 一个汉字=3bit
    1024bit=1byte
    1024byte=1kb
    1024kb=1mb
    1024mb=1gb
 */
const str = '哈哈哈哈哈哈哈'
const strBuf = Buffer.from(str);
const strBuf2 = Buffer.from(strBuf);
const b = Buffer.alloc(10);
const b2 = Buffer.allocUnsafeSlow(10)
const str2 = strBuf.toString();
console.log(strBuf2.toString()== strBuf.toString())

