'use strict';
const path = require('path');

module.exports = {
  dev: {
    entry: {
      app: './src/main.js',
    },
    templateSPA: './index.html',
    staticPath: './static',
    port: 8080,
    useEslint: false,
  },
  prod: {
    entry: {
      app: './src/main.js',
    },
    templateSPA: './index.html',
    staticPath: './static',
    useEslint: false,
    prodJsSourceMap: true,
    assetsPublicPath: "./", // 编译发布的根目录，可配置为资源服务器域名或 CDN 域名
    assetsRoot: path.resolve("./dist"), // 编译输出的静态资源路径
    assetsSubDirectory: "static", // 编译输出的二级目录
    favicon: path.resolve("./favicon.ico"), //favicon
  },
  base: {
    mockPath: './mock',

    JSBabelInclude: ['src', 'mock'],

    prettier: {
      switch: true,
      files: [
        'mockdata/**/*.js',
        '.postcssrc.js',
        'env.config.js',
        'env.param.config.js',
        '.eslintrc.js',
      ],
    },
  },
};
