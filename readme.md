####  简介
- 单线程服务器 擅长处理高并发请求 通过内部事件 非阻塞IO 事件驱动机制  改变了js只能运行在浏览器的局面 js与web可进行交互
- npm 包管理器 起因node 目前以扩展为一个生态圈
- buffer
- fs文件系统 错误优先原则
    - 简单文件的读写 writeFile readFile
    - 流文件的读写 createReadStream createWriteStream pipe
    - 查看文件/文件夹的信息 stat
    - 创建文件/文件夹/层级文件夹插件 mkdirp
    - 增删读 mkdir unlink readdir
- node snippets node提示插件
- supervisor 不用重启服务器
- silly-datetime 格式化日期
- node 模块化（一种规范）
    - commomjs
        - 核心模块（系统模块）
        - 文件模块（自定义模块）
        - node_modules>文件名>packages.json（npm init -yes）>main入口文件
        - 包 包含模块引用关系的功能文件
        - 模块 实现某一功能的js文件
        - 常用的npm命令
            - npm info 包名 查看包信息
            - npm list 查看安装的所有包
- http模块
    - http.createServer(()=>{}).listen(3000)
- EJS 后台模板 可以将数据库读取的文件数据填充在html上


