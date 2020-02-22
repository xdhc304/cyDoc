module.exports = {
    //扫描的文件路径
    paths: ['input/code/'],
    demoDir:"input/demo/",
    //文档页面输出路径
    outdir: 'doc/',
    //内置主题
    // theme:'ui',
    //自定义主题目录
    //themedir: 'theme-smart-ui/',
    //项目信息配置
    project: {

        //项目名称
        name: 'yyDoc',

        //项目描述，可以配置html，会生成到document主页
       // description: '<h2>yyDoc</h2> <p>Javascript Document builder base on YUIDoc.</p>',

        //版本信息
        version: '1.1.0',

        //地址信息
        url: 'https://github.com/xdhc304/yyDoc',

        //导航信息
        navs: [{
            name: "Home",
            url: "https://github.com/xdhc304/yyDoc"
        }, {
            name: "Document",
            url: "/"
        }, {
            name: "About",
            url: "https://github.com/xdhc304/yyDoc"
        }]
    },
    //demo页面需要加载的js库
    demo: {
        paths : ['input/code/ui/uicode.js'],
        link : ['http://code.jquery.com/jquery-1.11.0.min.js'] 
    }
};

