����vscode��node��ES2015(ES6)���л����
����vscodeҲ��һ��ʱ���ˣ����������Ŀ������������Ĺ�������ǿ�ġ���ƽ̨��������java, .net�ȣ�UIҲ���ִ��������ٶ�Ҳ��ԱȽϿ죬ռ���ڴ��٣�ƽ����Ե�win10���������ɿ�����

����˵��:
node.js 6.9.x
vscode 1.11.2
����ϵͳ win10 (win7֮���ϵͳ����װ����Ӧ�ö�һ��)
��������babel
��һ������װnode
www.nodejs.org ���ذ�װ�� 6.x��Ĭ�ϰ�װ ע�⣺����������������ʹ��LTS���Ƚ��ȶ���bug��ԱȽ��١�
���غ�һ·Ĭ�ϰ�װ�Ϳ�����

�ڶ�������װvscode
vscode�ҾͲ������ˣ�ȥhttps://code.visualstudio.com/���ض�Ӧ�İ�װ���Ϳ����ˣ�д������µİ汾��1.11.2
���غ�һ·Ĭ�ϰ�װ�Ϳ�����
������ǹ��������ǧ��Ҫһ·Ĭ�ϰ�װ�����****du�������Ĭ�ϰ�װһ��ȫ��Ͱ,ռ�����������˲������ĵ��Կ����裩

����������װȫ�ֵ�babel
��������ʾ���£������������

npm install babel-cli babel-eslint -g
1
��ɺ󣬿�������

babel --version
1
������ʾbabel�İ汾��

���Ĳ�����npm init��������
����Ѵ�����������
�ڿ���̨�£����ù���Ŀ¼����:d:\work\firstnode
Ȼ������Ŀ¼

d:
cd d:\work\firstnode
npm init
1
2
3
���node�Ĺ��̴���
Ϊ�˱��ڹ������ǽ�Դ����Ŀ¼����libĿ¼���棬��srcĿ¼�����������õ���libĿ¼
�����������е�Ŀ¼����buildĿ¼����
�����ͻ�������Ŀ¼

d:\work\firstnode\lib
d:\work\firstnode\build
1
2
���岽����װ������
�ڿ���̨�£�Ŀ¼Ϊd:\work\firstnode��װ���������:

npm install --save-dev babel-preset-eslatest-node6
1
������:��д.babelrc

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
���߲�����vscode��д����
�ڿ���̨����d:\work\firstnode���棬����code .�Ϳ��Դ򿪵�ǰ����
����������vscode��ѡ����ļ��У�ѡ�����Ŀ¼Ҳ���ԡ�
��vscode����ߵ���Դ���������½�һ��index.js�ŵ�libĿ¼����

//-------------index.js--------------------------------------
console.log("hello world");
//---------------------------------------------------------------
1
2
3
Ȼ���ڿ���̨����������

babel lib -d build\lib
1
�Ϳ��Կ�����build\libĿ¼�棬����һ��index.js

�ڰ˲�����������
��vscodeѡ����ԣ�������ʾ����û�����ã�Ȼ��������ã��ͻ����vscode����lanuch.json�༭

{
    // Use IntelliSense to learn about possible Node.js debug attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "��������",
            "program": "${workspaceRoot}\\bulid\\lib\\index.js"
        },
        {
            "type": "node",
            "request": "attach",
            "name": "���ӵ��˿�",
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
��program��Ϊ${workspaceRoot}\bulid\lib\index.js�Ϳ����ˣ�Ȼ��F5�Ϳ��������ˡ�
Ϊ�˷�����ԣ��޸�package.json�е�script��������������

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
Ȼ���ڿ���̨�£�����npm run build�ͻ�ִ��babel lib -d build/lib -s inline
�������������node��vscode��������

�ھŲ������
����������build����������babelWatch,�����Ϳ��Դ��ڼ���״̬��ֻҪlibĿ¼��һ���ļ����棬�Ϳ���ʵʱ���뵽buildĿ¼���档-s inline��������sourceMap����������vscode�ϵ���Ե�ʱ�򣬾Ϳ��������Ĵ���λ�á�
���⣺���ʹ�õĲ����babel-preset-eslatest-node6���������������ǽ�ES2015���ES2017��js��������node 6.x֧�ֵ�js���룬������ES5��node 6.x�Ѿ�֧��99%��ES2015�ˣ����������Ĵ���仯����
��������������������������������

ԭ�����ӣ�https://blog.csdn.net/zdhsoft/article/details/70258109