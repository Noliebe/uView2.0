<p align="center">
    <img alt="logo" src="https://uviewui.com/common/logo.png" width="120" height="120" style="margin-bottom: 10px;">
</p>
<h3 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">uView 2.0</h3>
<h3 align="center">多平台快速开发的UI框架</h3>

[![stars](https://img.shields.io/github/stars/umicro/uView2.0?style=flat-square&logo=GitHub)](https://github.com/umicro/uView2.0)
[![forks](https://img.shields.io/github/forks/umicro/uView2.0?style=flat-square&logo=GitHub)](https://github.com/umicro/uView2.0)
[![issues](https://img.shields.io/github/issues/umicro/uView2.0?style=flat-square&logo=GitHub)](https://github.com/umicro/uView2.0/issues)
[![Website](https://img.shields.io/badge/uView-up-blue?style=flat-square)](https://uviewui.com)
[![release](https://img.shields.io/github/v/release/umicro/uView2.0?style=flat-square)](https://gitee.com/umicro/uView2.0/releases)
[![license](https://img.shields.io/github/license/umicro/uView2.0?style=flat-square)](https://en.wikipedia.org/wiki/MIT_License)



## TODO

<u--input>的具名插槽 prefix 在 .vue 文件中 不管用, u-input 的插槽生效

```js

<u--input v-model="formData.name" placeholder="请输入您的姓名">
	<block slot="prefix">
		<image
			:src="$urlImg('ico_pop_mendian_1.png')"
			class="modal-add-popup-close-btn block m-auto"
			mode="widthFix"
		/>
	</block>
</u--input>
```

## 说明

uView UI，是[uni-app](https://uniapp.dcloud.io/)全面兼容 nvue 的 uni-app 生态框架，全面的组件和便捷的工具会让您信手拈来，如鱼得水

## [官方文档：https://uviewui.com](https://uviewui.com)

### [点击加 13 群交流反馈：879811455](https://jq.qq.com/?_wv=1027&k=vz4By4k5)

## 特性

-   全面兼容 nvue，原生渲染，高性能
-   兼容安卓，iOS，微信小程序，H5，QQ 小程序，百度小程序，支付宝小程序，头条小程序
-   60+精选组件，功能丰富，多端兼容，让您快速集成，开箱即用
-   众多贴心的 JS 利器，让您飞镖在手，召之即来，百步穿杨
-   众多的常用页面和布局，让您专注逻辑，事半功倍
-   详尽的文档支持，现代化的演示效果
-   按需引入，精简打包体积

## 预览

您可以通过**微信**扫码，查看最佳的演示效果。
<br>
<br>
<img src="https://uviewui.com/common/weixin_mini_qrcode.png" width="220" height="220" >

## 链接

-   [官方文档](https://www.uviewui.com/)
-   [更新日志](https://www.uviewui.com/components/changelog.html)
-   [升级指南](https://www.uviewui.com/components/changeGuide.html)
-   [关于我们](https://www.uviewui.com/cooperation/about.html)

## 交流反馈

欢迎加入我们的 QQ 群交流反馈：[点此跳转](https://www.uviewui.com/components/addQQGroup.html)

## 关于 PR

> 我们非常乐意接受各位的优质 PR，但在此之前我希望您了解 uView2.0 是一个需要兼容多个平台的（小程序、h5、ios app、android app）包括 nvue 页面、vue 页面。
> 所以希望在您修复 bug 并提交之前尽可能的去这些平台测试一下兼容性。最好能携带测试截图以方便审核。非常感谢！

## 安装

#### **uni-app 插件市场链接** —— [https://ext.dcloud.net.cn/plugin?id=1593](https://ext.dcloud.net.cn/plugin?id=1593)

请通过[官网安装文档](https://www.uviewui.com/components/install.html)了解更详细的内容

## 快速上手

请通过[快速上手](https://uviewui.com/components/quickstart.html)了解更详细的内容

## 版权信息

uView 遵循[MIT](https://en.wikipedia.org/wiki/MIT_License)开源协议，意味着您无需支付任何费用，也无需授权，即可将 uView 应用到您的产品中。

## 使用

1.安装 uview。

```shell
npm install uview-ui -s            //安装最新版
npm install uview-ui@2.0.31 -s     //指定版本安装

//结合使用sass
npm install sass -s
```

2.根据官方文档的提示，在 main.js 文件在 import Vue 之后加入如下代码，记住一点要在 import Vue 之后添加：

```js
import Vue from "vue";
//在Vue后面添加以下代码
import uView from "uview-ui";
Vue.use(uView);

//uView 2.0版本修改uView内置配置方案
uni.$u.setConfig({
	// 修改$u.config对象的属性
	config: {
		// 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
		unit: "rpx",
	},
	// 修改$u.props对象的属性
	props: {
		// 修改radio组件的size参数的默认值，相当于执行 uni.$u.props.radio.size = 30
		radio: {
			size: 15,
		},
		// 其他组件属性配置
		// ......
	},
});
```

3.在根目录下找到 uni.scss 文件加入如下的代码

```scss
@import "uview-ui/theme.scss";
```

4.在根目录下找到 App.vue 文件下 style 添加以下代码，引入 uView scss 的基础样式

```scss
@import "uview-ui/index.scss";
```

5. 在根目录下找到 pages.json 文件在第一层添加以下代码：

```json
// 指引 uni_modules 以外的目录可以使用 easycom
"easycom": {
     "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
},
```

6.在页面上使用 uView 组件, 看是否正常

```vue
<template>
	<view class="content">
		<u-search
			v-model="searchKey"
			height="66"
			placeholder="请输入搜索关键词"
			searchIconSize="36"
			bgColor="#f4f6f9"
		>
		</u-search>
	</view>
</template>
```
