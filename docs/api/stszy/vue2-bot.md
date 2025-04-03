# 生态数智云组件(vue2.x)

## 1. 文档说明

本文档主要介绍了如何在网页中嵌入 AI 对话机器人。

## 2. 接入流程

### 2.1 获取 access_token

在开始嵌入 AI 对话机器人之前，首先需要获取一个有效的 access_token。access_token
是用于身份验证和授权的凭证，确保只有授权用户才能使用该服务。

#### 2.1.1 调取获取 Token 的接口

1. **接口地址**: `http://webchat.aepic.net:9601/wdptapi/sysAuth/authThirdUser`
2. **请求方法**: `POST`
3. **请求参数**:

   - `account`: 用户账号。
   - `systemID`: 你的系统ID。

4. **示例请求**:

   ```json
   {
     "account": "13028695829",
     "systemID": "1"
   }
   ```

5. **响应示例**:

   ```json
   {
     "data": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc192aXAiOiIxIiwiaXNzIjoic2FpbGhlcm8iLCJleHAiOjE3Mjg3MDA4MDYsImFjY291bnQiOiIxMzAyODY5NTgyOSJ9.ghi0tJcm1OvZI1en61DkOyBFjuP-XHlrOmv3g-5_C24",
     "msg": "成功",
     "code": "200",
     "count": 0
   }
   ```

   参数说明：

   - `data`: 获取到的 Token。
   - `msg`: 响应消息。
   - `code`: 响应状态码 200 表示成功。
   - `count`: 响应数据条数。

### 2.2 安装VUE组件

在获取到 Token 后，接下来需要在网页中安装 AI 对话机器人组件。

#### 2.2.1 引入 Vue组件(只支持Vue2.x)

npm 安装 stszy-chat-bot 组件库,注意使用[npm官方源](https://www.npmjs.com/package/stszy-chat-bot)

```bash
  npm i stszy-chat-bot@latest
```

#### 2.2.2 初始化组件

在项目中初始化对话机器人组件

main.js

```js
import StszyChatBot from "stszy-chat-bot";
import "stszy-chat-bot/stszy-chat-bot.css";

//element-ui组件
Vue.use(ElementUI);
// 放在Vue.use(ElementUI)之后
Vue.use(StszyChatBot);
```

#### 2.2.3 添加到页面

引入组件到你的页面,推荐在App.vue或者Main.vue中引入

```html
<StszyChatBot :accessToken="你的token" />
```

#### 2.2.4 组件属性

| 参数         | 说明                                | 类型   | 可选值     | 默认值 |
| ------------ | ----------------------------------- | ------ | ---------- | ------ |
| accessToken  | 认证token(必填)                     | String | -          | -      |
| defaultTheme | 机器人的主题(提供亮色,暗色两种主题) | String | dark/light | dark   |

### 2.3 使用

在页面中引入组件后，即可在页面右下角中看到对话机器人组件，点击即可和机器人进行对话。
