# html5 聊天机器人接入指南

## 1. 文档说明

本文档主要介绍如何通过提供的链接快速接入 AI 对话机器人。

## 2. 接入流程

### 2.1 获取 access_token

在接入 AI 对话机器人之前，需要动态生成链接中的 `access_token` 参数。`access_token` 是用于身份验证和授权的凭证，确保只有授权用户才能使用该服务。

#### 2.1.1 调用获取 Token 的接口

1. **接口地址**: `https://api3.aepic.net:9601/wdptapi/sysAuth/authThird`
2. **请求方法**: `POST`
3. **请求参数**:

   - `account`: 用户账号。
   - `systemID`: 你的系统ID。

4. **示例请求**:

   ```json
   {
     "account": "13028695829",
     "systemID": "AIWDPT001"
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

### 2.2 生成接入链接

在获取到 `access_token` 后，可以生成接入链接。链接格式如下：

`https://api3.aepic.net:9601/h5bot/#/AgentChat?access_token=<access_token>&agent_id=<agent_id>&theme=<theme>`

#### 参数说明

| 参数           | 说明                                                       | 是否必填 | 示例值                                    |
| -------------- | ---------------------------------------------------------- | -------- | ----------------------------------------- |
| `access_token` | 认证 Token，由接口动态获取,`有有效时间,建议每次都重新获取` | 是       | `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...` |
| `agent_id`     | 机器人 ID，由服务方提供                                    | 是       | `200667950157844043191154906`             |
| `theme`        | 机器人的主题，支持亮色和暗色两种主题                       | 是       | `light` 或 `dark`                         |

#### 示例链接

`https://api3.aepic.net:9601/h5bot/#/AgentChat?access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzeXN0ZW1faWQiOiJBSVdEUFQwMDEiLCJpc192aXAiOiIxIiwiaXNzIjoic2FpbGhlcm8iLCJleHAiOjE3NDM1NzgxODIsImFjY291bnQiOiIxMzAyODY5NTgyOSJ9.8Oj3FgME2Fk-tDeHPaKxGPHh8sEskKpBu17q8buRfxs&agent_id=200667950157844043191154906&theme=light`

### 2.3 使用说明

1. 将生成的链接嵌入到你的网页中，用户点击链接即可打开对话机器人页面。
2. 可根据需求选择 `theme` 参数的值，设置为 `light` 或 `dark`，以适配页面风格。
3. 确保 `access_token` 是动态生成的，并在有效期内使用。

通过以上步骤，即可快速接入 html5 聊天机器人。
