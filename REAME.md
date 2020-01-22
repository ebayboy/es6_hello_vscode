基于vscode的node的ES2015(ES6)运行环境搭建
用了vscode也有一段时间了，在轻量级的开发环境，它的功能是最强的。跨平台，不依赖java, .net等，UI也很现代，运行速度也相对比较快，占用内存少，平板电脑的win10都可以轻松开发。

环境说明:
node.js 6.9.x
vscode 1.11.2
操作系统 win10 (win7之后的系统，安装方法应该都一样)
编译插件：babel
第一步：安装node
www.nodejs.org 下载安装包 6.x，默认安装 注意：在生产环境，建议使用LTS，比较稳定，bug相对比较少。
下载后，一路默认安装就可以了

第二步：安装vscode
vscode我就不介绍了，去https://code.visualstudio.com/下载对应的安装包就可以了，写这个文章的版本是1.11.2
下载后，一路默认安装就可以了
（如果是国产软件，千万不要一路默认安装，如百****du，会给你默认安装一个全家桶,占领你的启动，瞬间让你的电脑卡成翔）

第三步：安装全局的babel
在命令提示符下，输入下面命令：

npm install babel-cli babel-eslint -g
1
完成后，可以输入

babel --version
1
可以显示babel的版本号

第四步：用npm init创建工程
如果已创建，则跳过
在控制台下，建好工程目录，如:d:\work\firstnode
然后进入该目录

d:
cd d:\work\firstnode
npm init
1
2
3
完成node的工程创建
为了便于管理，我们将源代码目录放在lib目录下面，或src目录，在这里我用的是lib目录
编译后可以运行的目录放在build目录下面
这样就会有两个目录

d:\work\firstnode\lib
d:\work\firstnode\build
1
2
第五步：安装编译插件
在控制台下，目录为d:\work\firstnode安装插件，输入:

npm install --save-dev babel-preset-eslatest-node6
1
第六步:编写.babelrc

//----------------------------------------------------------
{
  "presets": ["eslatest-node6"],
  "plugins": [
  ]
}
//---------------------------------------------------------------
1
2
3
4
5
6
7
第七步：用vscode编写代码
在控制台并在d:\work\firstnode下面，输入code .就可以打开当前工程
或者先启动vscode后，选择打开文件夹，选择这个目录也可以。
在vscode的左边的资源管理器，新建一个index.js放到lib目录下面

//-------------index.js--------------------------------------
console.log("hello world");
//---------------------------------------------------------------
1
2
3
然后在控制台下输入命令

babel lib -d build\lib
1
就可以看到在build\lib目录面，多了一个index.js

第八步：配置运行
用vscode选择调试，调试显示的是没有配置，然后进行配置，就会进入vscode配置lanuch.json编辑

{
    // Use IntelliSense to learn about possible Node.js debug attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "启动程序",
            "program": "${workspaceRoot}\\bulid\\lib\\index.js"
        },
        {
            "type": "node",
            "request": "attach",
            "name": "附加到端口",
            "address": "localhost",
            "port": 5858
        }
    ]
}
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
将program改为${workspaceRoot}\bulid\lib\index.js就可以了，然后按F5就可以运行了。
为了方便调试，修改package.json中的script，增加如下内容

"scripts": {
    "build": "babel lib -d build/lib -s inline",
    "babelWatch":"babel lib/**/*.js -d build -w -s inline",
    "releaseBuild":"babel lib -d release/lib --no-comments --compact true --minified"
},
1
2
3
4
5
然后在控制台下，输入npm run build就会执行babel lib -d build/lib -s inline
这样，就完成了node的vscode环境操作

第九步：最后
除了配置了build，还配置了babelWatch,这样就可以处于监视状态，只要lib目录下一有文件保存，就可以实时编译到build目录下面。-s inline则是生成sourceMap，这样，用vscode断点调试的时候，就可以正常的代码位置。
另外：这个使用的插件是babel-preset-eslatest-node6，这个插件的作用是将ES2015或更ES2017的js代码编译成node 6.x支持的js代码，而不是ES5，node 6.x已经支持99%的ES2015了，这样编译后的代码变化不大。
————————————————

原文链接：https://blog.csdn.net/zdhsoft/article/details/70258109