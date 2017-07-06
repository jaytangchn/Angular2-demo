# 我的Angular2 学习记录
## 准备安装
* 安装npm node 略过 [中文官网](http://nodejs.cn/download/);
* 安装cnpm , cnpm 为npm的中国镜像,速度更快. `npm install -g cnpm --registry=https://registry.npm.taobao.org`
* 安装Angular-cli , 这里使用命令 `cnpm install -g @angular/cli `
* 如果有之前有安装,需要卸载后再试! `npm uninstall -g angular-cli` 和 `npm cache clean`
## 创建项目
1. `ng new my-app --skip-install`
2. `cd my-app`
3. `cnpm install`

## 模块
`NgModule` 是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。其中最重要的属性是：
    * `declarations` - 声明本模块中拥有的视图类。Angular 有三种视图类：组件、指令和管道。
    * `exports` - declarations 的子集，可用于其它模块的组件模板。
    * `imports` - 本模块声明的组件模板需要的类所在的其它模块。
    * `providers` - 服务的创建者，并加入到全局服务列表中，可用于应用任何部分。
    * `bootstrap` - 指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。
# Demo2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
