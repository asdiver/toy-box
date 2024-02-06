# electron学习记录

## 基础

角色：将web前端的技术迁移至C/S架构中，让web前端开发者的手伸到桌面端大展身手。

大致原理：浏览器主要由一个浏览器进程和多个渲染进程，而electron参考了浏览器架构，将node和浏览器进程进行融合，称为主线程，渲染进程不变。

[相关文章](https://juejin.cn/post/7103337772424888356)

## 与Vue结合

官方提供了开发集成方案以保证和在web浏览器开发无大的区别，包含了我想要的vite、vue、typescript [相关文章](https://www.electronforge.io/config/makers) 但是此项目不支持pnpm包管理

## 工具集

electron-connect：electron热更新

[electron-toolkit](https://github.com/alex8088/electron-toolkit/tree/master)：集成工具

## electron和vite的集成

网上已经有对应的脚手架[快速开始 | electron-vite](https://cn.electron-vite.org/guide/) 但是想探索一下相关原理，尝试自己打通开发基建。

### 理论

vite主要的功能是提供开发服务器调试和前端资源打包，electron通过win.loadFile加载本地render文件，但在开发阶段可以使用win.loadURL加载http服务器地址，同时也用上了vite的HMR功能。

### 实践

相关代码：

/scripts/vite-plugin-electron-dev.js

/main/src/main/index.js

/vite.config.js（浏览器获取资源的方式从http转为file协议 所有资源前缀改为相对路径）

## 其他基建

## 注意

* electron对esm模块的支持并不完全，所以还是统一用了commonjs

## 流水账

（文档摆烂了 后续再处理）

* 遵循electron的沙盒安全建议，不直接暴露api

* 配置typescript，使得electron注入window的api可以被编辑器感知
  
  见src\render\event.d.ts

* 使用新版本的eslint，antfu的[GitHub - antfu/eslint-config: Anthony](https://github.com/antfu/eslint-config) 开箱即用
  
  见eslint.config.js & src\eslint.config.js

* 确定进程通信基建，为每个时间编写对应的type
  
  见src\main\listen.ts

* 主进程和渲染进程中双向通信
  
  在src\preload\index.ts进行注册；
  
  在src\main\listen.ts编写渲染进程到主进程的通知
  
  在src\main\dispatch.ts编写主进程到渲染进程的通知
  
  **完整的typescript提示** 在src\render\App.vue测试成功

* 
