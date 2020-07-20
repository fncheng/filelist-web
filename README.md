# filelist

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

### mock 数据

[apifox](https://www.apifox.cn/)

## 过程

图标库:font-awesome

## 问题

> 1.  scss 中多个类名下其中一个子类的 css 样式嵌套怎么连写
>
> ```css
> .title,
> .readme,
> .list-wrapper {
>   margin: 0 auto;
>   h1 {
>     color: red;
>   }
> } /* 其中h1是.title下的标签 */
> ```

一个解析 markdown 的 css 样式表[Github Markdown css](https://github.com/sindresorhus/github-markdown-css)

### Vue-router 中的 hash

通过修改 hash 值(window.location.hash) => 修改 url 中/# 后面的地址

例如

```js
// 假设url为:localhost:8080
window.location.hash = "/chrome-plugin"
// url就会跳转到localhost:8080/#/chrome-plugin
// 注意:/#会自动加上
```

问题:

- Uncaught (in promise) TypeError: Cannot read property 'cancelToken' of undefined
  [相关链接](https://github.com/svrcekmichal/redux-axios-middleware/issues/83)
