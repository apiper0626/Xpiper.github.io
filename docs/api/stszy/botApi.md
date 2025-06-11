# 机器人接口

## 1. 接口地址

| 环境 | 接口地址                               |
| :--- | :------------------------------------- |
| 正式 | https://webchat.aepic.net:9601/wdptapi |

## 2. 对话

### 2.1 对话 sse 接口

- **接口说明：**

  - 此接口提供基于 Dify 工作流的流式对话功能，允许客户端通过 SSE（Server-Sent
    Events）接收实时对话消息。
  - [点击访问平台](https://chat.aepic.net:8090/app/774a6b9f-ee23-4f99-9c55-32adb3998355/develop)
  - **账号：** 992378304@qq.com
  - **密码：** wangzhq@0812

  请仔细阅读并参考[访问 API](https://chat.aepic.net:8090/app/774a6b9f-ee23-4f99-9c55-32adb3998355/develop)
  以及[发送对话消息接口](https://chat.aepic.net:8090/app/774a6b9f-ee23-4f99-9c55-32adb3998355/develop)
  文档。

- **接口地址：** /mobileApp/chat-messages
- **请求方式：** POST(application/json)

#### 请求参数

| 参数名称       | 类型   | 出现要求 | 描述                                                   |
| :------------- | :----- | :------- | :----------------------------------------------------- |
| query          | string | R        | 用户输入/提问内容                                      |
| systemId       | string | R        | 系统id(用于加载不同的配置信息)                         |
| conversationId | string | O        | 对话id(需要历史记忆时传入,由dify流程中返回,新对话传空) |

#### 请求示例

```json
{
  "query": "石家庄空气质量",
  "systemId": "SHSAPP001",
  "conversationId": ""
}
```

#### 返回结果

成功响应

参考[访问 API](https://chat.aepic.net:8090/apps)

#### 字段说明

参考[访问 API](https://chat.aepic.net:8090/apps)

### 2.2 获取系统配置接口

- **接口说明：** 发布广播消息
- **接口地址：** /mobileApp/fetchSystemConfig
- **请求方式：** GET

#### 请求参数

| 参数名称  | 类型   | 出现要求 | 描述                                               |
| :-------- | :----- | :------- | :------------------------------------------------- |
| system_id | string | R        | 系统ID(暂时传入`SHSAPP001`,后期依据多系统进行调整) |

#### 请求示例

`/mobileApp/fetchSystemConfig?system_id=SHSAPP001`

#### 返回结果

成功响应

```json
{
  "data": {
    "id": 20,
    "avatar": "https://xh-ai.obs.cn-north-1.myhuaweicloud.com:443/avatar/2024/09/15/png/53592382965716751451579409.png",
    "name": "知识专家",
    "introduction": "专业致力于生态环境科学的研究与实践，着力于环境问题的创新解决，旨在为环保管理提供精准的决策依据",
    "opening_line": "您好，我是生态环境知识专家。很高兴您对生态环境保护和可持续发展感兴趣。请问您有什么具体问题或者需要了解哪方面的知识？",
    "guidance_lines": "沙河市空气质量,沙河市气象条件,沙河市今日空气质量高值情况,沙河市空气质量排名情况",
    "create_time": "",
    "update_time": "2025-03-12 09:32:31.803",
    "con_type": "normal",
    "api_url": "",
    "api_key": "",
    "system_id": "SHSAPP001"
  },
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `id`: 对话配置 ID
  - `avatar`: 头像
  - `name`: 名称
  - `introduction`: 简介
  - `opening_line`: 开场白
  - `guidance_lines`: 引导问题, 以逗号分隔
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

## 注意事项

1. **SSE 流式传输**：客户端需要使用 EventSource API 接收服务器推送的数据，并处理流式传输的响应。
2. **错误处理**：event 为 `error` 时，表示发生错误，客户端应根据具体错误信息进行处理。
