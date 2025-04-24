# 生态数智云小程序接口 V2.0 (2025.03.03)

## 1. 接口地址

| 环境 | 接口地址                               |
| :--- | :------------------------------------- |
| 正式 | https://webchat.aepic.net:9601/wdptapi |

## 2. 接口注意事项

- 涉及到系统 id(system_id) 传值统一为固定取值`WEIXIN`
- 涉及 sse 的统一传递 user 格式为 system_id-account 示例: `WEIXIN-13011111111`

## 3. 登陆/鉴权

### 3.1 获取小程序 Access token

- **接口说明：** 获取小程序 Access token
- **接口地址：** /applet/token
- **请求方式：** get

#### 请求参数

无

#### 返回结果

成功响应

```json
{
  "data": {
    "access_token": "85_9FgcIA5ER7pti0l0yJQ9nzMYZYj5BB0SYMcRnUez8kwyR5vS3qAnhvarIZ2fI6IfKfCV_l3y-qOVeXlU4nkSlEGqO2u_0E8kuvjMVIUvCy4HTp9CY0Cb0hVHyJgWKViADAIWH",
    "expires_in": 7197
  },
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `access_token`: 小程序 token
  - `expires_in`: 过期时间
  - [详见微信官方文档](https://developers.WEIXIN.qq.com/doc/offiaccount/Basic_Information/Get_access_token.html)
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 3.2 获取小程序 手机号

- **接口说明：** 获取小程序手机号
- **接口地址：** /applet/getPhoneNumber
- **请求方式：** get

#### **请求参数**

| 参数名称 | 类型   | 出现要求 | 描述                                                                                                                                   |
| :------- | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------- |
| code     | string | R        | 手机号获取凭证([详见官方文档](https://developers.WEIXIN.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html)) |

#### 请求示例

`GET /applet/getPhoneNumber?code=123`

#### 返回结果

成功响应

```json
{
  "data": {
    "errcode": 40029,
    "errmsg": "invalid code hint: [VEeEWnMre-P8dVBa] rid: 6705edf9-02858692-146b48b3"
  },
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `errcode`: 错误码
  - `errmsg`: 错误信息
  - `phone_info`: 手机号信息
  - [详见官方文档](https://developers.WEIXIN.qq.com/miniprogram/dev/OpenApiDoc/user-info/phone-number/getPhoneNumber.html)
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 3.3 登陆接口

- **接口说明：** 登陆 在获取到 token 后，后续接口请求需要带上 Authorization 请求头，格式如下：

`Authorization: 获取到的token 取值`

- **接口地址：** /applet/login
- **请求方式：** POST(application/json)

#### 请求参数

| 参数名称  | 类型   | 出现要求 | 描述               |
| :-------- | :----- | :------- | :----------------- |
| account   | string | R        | 账号/手机号        |
| system_id | string | R        | 所属系统id`WEIXIN` |

#### 请求示例

```json
{
  "account": "13011111111",
  "system_id": "WEIXIN"
}
```

#### 返回结果

成功响应

```json
{
  "data": {
    "username": "李鹏达",
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX3R5cGUiOiJyb2xlX3VzZXIiLCJzeXN0ZW1faWQiOiJXRUlYSU4iLCJpc3MiOiJzYWlsaGVybyIsImV4cCI6MTc0NTQ3NTY3NCwiYWNjb3VudCI6IjEzMDI4Njk1ODI5IiwidXNlcm5hbWUiOiLmnY7puY_ovr4ifQ.BIezGB-Tn5tTKB95KtNp9ko9w4UCHCsfABdA3EY4n0w"
  },
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

失败响应

```json
{
  "data": "",
  "msg": "未授权，请与管理员进行联系",
  "code": "1008",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `username`: 用户名
  - `token`: 令牌
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 3.4 获取登陆用户信息接口

- **接口说明：** 获取登陆用户信息接口
- **接口地址：** /applet/fetchUserInfo
- **请求方式：** get

#### 请求示例

`GET /applet/fetchUserInfo`

#### 返回结果

成功响应

```json
{
  "data": {
    "account": "13011111111",
    "day": 1,
    "count": 10
  },
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `account`: 账号
  - `day`: 陪伴天数
  - `count`: 剩余次数(-1 表示不限制次数)
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 3.5 获取小程序设置接口

- **接口说明：** 获取小程序设置接口
- **接口地址：** /applet/fetchAppletSetting
- **请求方式：** get

#### 请求示例

`GET /applet/fetchAppletSetting`

#### 返回结果

成功响应

```json
{
  "data": {
    "show_guest": true,
    "id": "1"
  },
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `show_guest`: 是否显示游客登录 (boolean)
  - `id`: 设置 ID
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

## 4. 对话

### 4.1 获取对话配置接口

- **接口说明：** 获取对话配置,用于初始化页面
- **接口地址：** /applet/fetchConversationConfig
- **请求方式：** POST(application/json)

#### 请求参数

| 参数名称 | 类型   | 出现要求 | 描述           |
| :------- | :----- | :------- | :------------- |
| con_type | string | R        | 固定值`normal` |

#### 请求示例

```json
{
  "con_type": "normal"
}
```

#### 返回结果

成功响应(只列出有用的字段)

```json
{
  "data": {
    "id": 21,
    "avatar": "https://xh-ai.obs.cn-north-1.myhuaweicloud.com:443/avatar/2024/09/15/png/53592382965716751451579409.png",
    "name": "知识专家",
    "introduction": "专业致力于生态环境科学的研究与实践，着力于环境问题的创新解决，旨在为环保管理提供精准的决策依据",
    "opening_line": "您好，我是生态环境知识专家。很高兴您对生态环境保护和可持续发展感兴趣。请问您有什么具体问题或者需要了解哪方面的知识？",
    "guidance_lines": "沙尘天气过程中颗粒物粒径分布特征？,湿度对PM2.5的影响？,粒径谱数据如何指导日常的管控以及溯源工作？,在工地管控方面有哪些措施？",
    "create_time": "1900-01-01 00:00:00.0",
    "update_time": "2025-03-14 14:42:15.65",
    "con_type": "normal",
    "api_url": "",
    "api_key": "",
    "system_id": "WEIXIN",
    "show_deep_seek": "0",
    "show_net_search": "0",
    "dify_name": "",
    "show_retriever_resources": "0"
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
  - `guidance_lines`: 引导问题, 以逗号分隔
  - `show_deep_seek`: 是否显示深度思考 0 - 不显示 1 - 显示
  - `show_net_search`: 是否显示联网搜索 0 - 不显示 1 - 显示
  - `show_retriever_resources`: 是否显示知识库 0 - 不显示 1 - 显示
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 4.2 对话 sse 接口

- **接口说明：**

  - 此接口提供基于 Dify 工作流的流式对话功能，允许客户端通过 SSE（Server-Sent
    Events）接收实时对话消息。
  - [点击访问平台](http://36.134.82.195:8090/app/ee05c4c7-0332-403b-8913-2d6ca578b98e/develop)
  - **账号：** 992378304@qq.com
  - **密码：** wangzhq@0812

  请仔细阅读并参考[访问 API](http://36.134.82.195:8090/app/ee05c4c7-0332-403b-8913-2d6ca578b98e/develop)
  以及[发送对话消息接口](http://36.134.82.195:8090/app/ee05c4c7-0332-403b-8913-2d6ca578b98e/develop)
  文档。

- **接口地址：** /applet/chat-messages
- **请求方式：** POST(application/json)

#### 请求参数

| 参数名称           | 类型          | 出现要求 | 描述                                                                                                                                                                                                       |
| :----------------- | :------------ | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| inputs             | string        | R        | 允许传入 App 定义的各变量值。 inputs 参数包含了多组键值对（Key/Value pairs），每组的键对应一个特定变量，每组的值则是该变量的具体值。 如果变量是文件类型，请指定一个包含以下 files 中所述键的对象。 默认 {} |
| query              | string        | R        | 用户输入/提问内容                                                                                                                                                                                          |
| response_mode      | string        | R        | streaming 流式模式（推荐）。基于 SSE（Server-Sent Events）实现类似打字机输出方式的流式返回                                                                                                                 |
| conversation_id    | string        | R        | （选填）会话 ID，需要基于之前的聊天记录继续对话，必须传之前消息的 conversation_id                                                                                                                          |
| user               | string        | R        | 格式为系统 id-用户 id                                                                                                                                                                                      |
| files              | array[object] | O        | 文件列表，适用于传入文件结合文本理解并回答问题，仅当模型支持 Vision 能力时可用。                                                                                                                           |
| auto_generate_name | string        | R        | 固定值`true`                                                                                                                                                                                               |
| config_id          | string        | O        | 对话的配置 id,当是对话的时候传入固定值 3                                                                                                                                                                   |
| agent_id           | string        | O        | 智能体 id,当对话智能体时候传入                                                                                                                                                                             |
| chat_id            | string        | O        | 数据库的对话 id 必传(用于保存对话信息使用)                                                                                                                                                                 |

#### 请求示例

```json
{
  "query": "石家庄空气质量",
  "inputs": {
    "deepseek": "true",
    // 字符串,标识开启深度思考
    "searxng": "true"
    // 字符串,表示开启联网搜索
  },
  "response_mode": "streaming",
  "user": "WEIXIN-13011111111",
  "conversation_id": "",
  "auto_generate_name": true,
  "files": [],
  "config_id": 3,
  "agent_id": "智能体id",
  "chat_id": "数据库的对话 id"
}
```

#### 注意事项

:::warning 修改内容

1. 新对话的时候传入 conversation_id 为空,具体的 dify 流程对话 id 会在返回的 data 中返回,下次对话的时候传入这个
   id 即可
2. 新对话可以先创建一个普通的数据库对话 id[4.3-新增对话](#_4-3-新增对话)
   ,然后在流程中获取真实的 dify 对话
   id,然后更新关联关系[4.4 关联数据库对话 id 和流程对话 id](#_4-4-关联数据库对话id和流程对话id)
3. 老对话需要获取获取真实的 dify 对话 id,然后传入对话流程接口即可
   :::

#### 返回结果

成功响应

参考[访问 API](http://36.134.82.195:8090/app)

#### 字段说明

参考[访问 API](http://36.134.82.195:8090/app)

参考处理代码

```javascript
onmessage: async (ev) => {
  // 假设evData 是单条事件返回消息
  const evData = JSON.parse(ev.data);
  // 文本消息
  if (evData.event === "message") {
    console.log(ev.answer);
  }
  if (
    evData.event === "node_finished" &&
    evData.data.node_type === "tool" &&
    evData.data.status === "succeeded"
  ) {
    // 联网搜索结果
    if (evData.data.title === "知识搜索+爬取网页内容") {
      net_search_data = evData.data.outputs.json[0].data;
      // 问数结果
    } else {
      intent_data = evData.data.outputs.json[0].json_data;
    }
  }
  // 结束处理逻辑...
  if (evData.event === "message_end") {
  }
};
```

### 4.3 新增对话

- **接口说明：** 新增对话
- **接口地址：** /applet/createCon
- **请求方式：** POST(application/json)

#### 请求参数

| 参数名称 | 类型   | 出现要求 | 描述      |
| :------- | :----- | :------- | :-------- |
| title    | string | R        | 标题      |
| sys_id   | string | R        | 系统 id   |
| user_id  | string | R        | 用户 id   |
| q_type   | string | R        | 固定值`6` |

#### 请求示例

```json
{
  "title": "测试对话",
  "sys_id": "WEIXIN",
  "user_id": "13028695829",
  "q_type": "6"
}
```

#### 返回结果

成功响应

```json
{
  "data": "229863615711002176178104",
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`: 对话 ID
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 4.4 关联数据库对话 id 和流程对话 id

- **接口说明：** 关联数据库对话 id 和流程对话 id
- **接口地址：** /applet/updateDifyConId
- **请求方式：** POST(application/json)

#### 请求参数

| 参数名称             | 类型   | 出现要求 | 描述             |
| :------------------- | :----- | :------- | :--------------- |
| conversation_id      | string | R        | 对话 id          |
| dify_conversation_id | string | R        | dify 流程对话 id |

#### 请求示例

```json
{
  "conversation_id": "对话id",
  "dify_conversation_id": "流程对话id"
}
```

#### 返回结果

成功响应

```json
{
  "data": "",
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 4.5 获取对话列表

- **接口说明：** 获取对话列表
- **接口地址：** /applet/fetchConList
- **请求方式：** POST(application/json)

#### 请求参数

| 参数名称 | 类型   | 出现要求 | 描述    |
| :------- | :----- | :------- | :------ |
| sys_id   | string | R        | 系统 id |
| user_id  | string | R        | 用户 id |
| keyword  | string | R        | 关键字  |
| q_type   | string | R        | `6`     |

#### 请求示例

```json
{
  "sys_id": "WEIXIN",
  "user_id": "13028695829",
  "keyword": "",
  "q_type": "6"
}
```

#### 返回结果

成功响应

```json
{
  "data": [
    {
      "id": "744ab90c-ed5d-4774-a7b6-9b1ddc59e1a4",
      "title": "石家庄空气质量",
      "sysid": "WEIXIN",
      "userid": "13028695829",
      "createtime": "2025-02-27 11:43:01",
      "q_type": "6",
      "dify_conversation_id": ""
    }
  ],
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `id`: 对话 ID
  - `title`: 标题
  - `sysid`: 系统 ID
  - `userid`: 用户 ID
  - `createtime`: 创建时间
  - `q_type`: 对话类型 0-正常对话，6-意图对话
  - `dify_conversation_id`: dify 流程对话 id
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 4.6 滚动获取对话详情列表

- **接口说明：** 滚动获取对话详情列表
- **接口地址：** /applet/fetchConDetail
- **请求方式：** POST(application/json)

#### 请求参数

| 参数名称       | 类型   | 出现要求 | 描述                                              |
| :------------- | :----- | :------- | :------------------------------------------------ |
| conversationId | string | R        | 对话 id                                           |
| limit          | number | R        | 每次加载的条数                                    |
| offset         | number | R        | 偏移量(一般指你现有加载的消息条数,首次加载传递 0) |

#### 请求示例

```json
{
  "conversationId": "00d073d2-505b-4b43-928c-d1fd6632d0d9",
  "limit": 10,
  "offset": 0
}
```

#### 返回结果

成功响应

包含知识库

```json
{
  "data": [
    {
      "id": "218896075715002060166576",
      "conversationid": "1890309938436837378",
      "sender": "ai",
      "message": "裸土通常出现在以下几个地方：\n\n1. **建筑工地**：在施工过程中，未硬化的地面、堆放的土方和建筑材料等都可能成为裸露的土地。\n2. **闲置地块**：长期或短期未开发的土地，如拆迁后尚未建设的土地、待开发的空地等。\n3. **道路两侧**：新建道路或维修道路时，路旁可能会有裸露的土面。\n4. **围挡围合区域**：在一些临时围挡区域内，如果没有及时进行绿化或硬化处理，也可能存在裸土。\n5. **树穴和草坪**：新栽植树木后的树穴、草坪中的小块裸土等。\n6. **城中村和住宅小区**：这些区域内的空地、未硬化的通道等也可能是裸土出现的地方。\n7. **机关企事业单位内部**：单位内部的一些未硬化的空地或临时堆放材料的地方。\n\n为了有效管控这些裸土，相关部门会采取地面硬化、闲置地块绿化、苫盖等措施。具体实施标准和责任单位如下：\n\n### 一、地面硬化\n- **适用范围**：道路两侧、围挡区域等需快速消除裸露的区域\n- **实施标准**：\n  - 按“宜绿则绿、宜硬则硬、宜景则景”原则处理，3公里范围内全面消除裸土（含树穴、草坪等小块裸土），确保“黄土不见天”。\n  - 每周排查道路两侧及围挡区域，新发现裸土需24小时内整改，实现动态清零。\n- **责任单位**：城市管理局、属地政府\n\n### 二、闲置地块绿化\n- **适用范围**：长期闲置（≥1个月）地块\n- **实施标准**：\n  - 播种低成本草籽/草皮或花卉组合，绿化覆盖率≥95%。\n  - 退化草坪需及时更新，同步完善休憩设施（如座椅）。\n- **责任单位**：地块归属单位\n\n### 三、闲置地块苫盖\n- **适用范围**：短期闲置（＜1个月）地块\n- **实施标准**：\n  - 设置标准化围挡，高度≥1.8米且稳固无破损。\n  - 使用密目≥1600目的防尘网或土工布苫盖，边缘固定严密，防止风吹掀开。\n- **责任单位**：属地政府、地块使用单位\n\n通过这些措施，可以有效减少裸土带来的扬尘污染和水土流失问题。",
      "createtime": "2025-02-25 14:29:48",
      "qtype": "0",
      "event": "{\"intent_data\":null,\"retriever_resources\":[{\"position\":1,\"dataset_id\":\"4be89688-a945-4449-9ec6-f0943191ddf7\",\"dataset_name\":\"管控措施专家\",\"document_id\":\"894beb90-9af8-4291-af4a-ace500ed6b65\",\"document_name\":\"管控措施\",\"data_source_type\":\"upload_file\",\"segment_id\":\"91df9c17-09df-4808-855b-e893d1d700f4\",\"retriever_from\":\"workflow\",\"score\":0.5114110367395326,\"hit_count\":78,\"word_count\":466,\"segment_position\":1,\"index_node_hash\":\"7576bc870ca0b5a2d4f5efceae73323b3c47baf213a5554b5044bfd3ae49aa46\",\"content\":\"裸土裸地管控措施包括地面硬化、闲置地块绿化，闲置地块苫盖。实施单位为城市管理局、属地政府、单位内部的归属各单位。\\n地面硬化管控标准为：\\n1、裸露地面按照“宜绿则绿、宜硬则硬、宜景则景”原则实施整治，3公里范围内全面消除裸土裸地和树穴、草坪等小块裸土，确保无泥土裸露。对道路两侧和围挡围合区域每周进行排查整治，对新发现的裸土裸地立行立改，实现动态清零。\\n2、按照“黄土不见天”的标准，高标准实施“非硬即绿”整治，一周内全面消除裸土裸地和树穴、草坪等小块裸土，确保无泥土裸露。每日对示范区内的道路（含小街小巷）、住宅小区、城中村、机关企事业单位等进行全覆盖排查，对新发现的裸土裸地立行立改，实现动态清零。\\n闲置地块绿化标准为：长期闲置（1个月以上）的地块，通过播种成本不高的草皮、花卉组合或撒草籽培育自然植被等方式对闲置土地实行绿化，绿化覆盖率不低于95%。更新退化的草坪,完善座椅等休憩设施。\\n闲置地块苫盖管控标准为：短期（1个月）内闲置的，地块要按标准进行围挡，裸露土地要用密度不低于1600目的苫盖网进行覆盖或利用土工布进行覆盖。\",\"page\":null},{\"position\":2,\"dataset_id\":\"4be89688-a945-4449-9ec6-f0943191ddf7\",\"dataset_name\":\"管控措施专家\",\"document_id\":\"894beb90-9af8-4291-af4a-ace500ed6b65\",\"document_name\":\"管控措施\",\"data_source_type\":\"upload_file\",\"segment_id\":\"b2b24860-48b5-420f-a438-e28e626ec696\",\"retriever_from\":\"workflow\",\"score\":0.42410533352739893,\"hit_count\":50,\"word_count\":483,\"segment_position\":10,\"index_node_hash\":\"aae30fa72958852cc836c44ced23f1600680ead1d82e5083eff2cd95de2afe95\",\"content\":\"建筑工地管理标准？\\n点位半径500米范围内：建筑物要维持现有面貌，不得擅自动土施工，停止新建、改建、扩建等涉及动土施工作业。确需实施土石方作业的，由相关乡街提交区政府研究同意后报市政府批准。\\n建筑工地内：所有裸土采用抑尘剂喷洒作业，结壳厚度大于10mm，无机动车碾压的情况下效果保持15天以上不起尘，每15天喷洒一次，并采用水印相机拍照留存影像资料。\\n建筑工地外侧：围挡部分加装云微雾装置，施工期间不间断作业，雾直径小于3微米，当空气湿度大于60%停止喷雾，微雾设备需具有记忆完整的运行记录。\\n落实工地“门前三包”措施，门前市容整洁,无乱设摊点、乱搭建、乱张贴、乱涂写、乱刻画、乱吊挂、乱堆放等行为;门前环境卫生整洁，无裸露垃圾、粪便、污水，无污迹，无渣土，无蚊蝇孳生地；门前责任区内的设施、设备和绿地整洁等。\\n工地食堂：加装高效油烟净化器，餐饮油烟排放限值达到1.0mg/m3的标准，要求每个月至少清洗一次，并保留清洗台账确保达标排放。\\n非移动道路机械：采用国三排放标准，使用国六标号的油品，不定期从车辆抽油，送往第三方检测机构检测，并留存机械合格证影像资料备查。\",\"page\":null}],\"net_search_data\":[]}",
      "message_type": ""
    }
  ],
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

包含联网搜搜内容

```json
{
  "data": [
    {
      "id": "163212736842169723379264683",
      "conversationid": "00d073d2-505b-4b43-928c-d1fd6632d0d9",
      "sender": "ai",
      "message": "<details style=\"color:gray;background-color: #f8f8f8;padding: 8px;border-radius: 4px;\" open> <summary> Thinking... </summary>好的，用户之前询问了石家庄的空气质量情况，现在再次提到“石家庄空气质量”，我需要根据之前的对话历史来提供相关信息。\n\n首先，回顾之前的对话，用户第一次问的是关于石家庄空气质量明显改善的文章内容，我提供了该市在2015年5月的优良天数、排名提升以及治理措施等信息。后来用户又询问了“168城市排名”，我给出了另一个时间点的不同城市的AQI排名，但用户可能误解了时间点，或者希望了解石家庄在某个特定排名中的位置。\n\n现在用户再次提到“石家庄空气质量”，需要明确用户的具体需求。可能的情况包括：用户想了解最新的空气质量数据、历史趋势、治理措施的效果，或者比较石家庄与其他城市的情况。考虑到用户之前提到的是2015年的数据，而“168城市排名”的回答涉及的是2025年的数据（可能存在时间错误），需要确认当前的时间点是否准确。但根据现实时间，现在仍是2023年，所以用户提到的2025年数据可能是一个假设或错误。\n\n此外，用户可能希望了解石家庄近年来的空气质量变化，或者当前实时的情况。但由于之前的上下文仅提供了2015年的数据，我需要根据已有的信息回答，并指出时间的限制。同时，应避免提供过时或不准确的信息，如果无法确认最新数据，应建议用户查阅最新报告或官方发布的数据。\n\n另外，用户可能没有明确说明是否需要比较其他城市，或者是否有特定的指标关注（如PM2.5、AQI等）。需要根据之前的回答结构，保持一致性，重点在空气质量改善的情况、排名变化和治理措施。\n\n最后，需要确保回答准确、简洁，符合用户要求的语言，并避免提及信息来源于之前的上下文，而是直接呈现相关内容。如果有不确定的地方，应指出数据的年份，并建议核实最新数据。</details>根据2023年以来的最新数据，石家庄市空气质量持续改善。2023年上半年，石家庄PM2.5平均浓度同比下降7.1%，优良天数比例达62.4%，较去年同期增加3天，在全国重点城市空气质量排名中稳定退出“后十”。通过持续推进产业转型、燃煤替代、扬尘治理等措施，石家庄正逐步实现“蓝天常驻”的目标。具体实时数据可参考生态环境部或本地环保部门发布的最新监测报告。",
      "createtime": "2025-02-28 14:17:52",
      "qtype": "0",
      "event": "{\"intent_data\":null,\"retriever_resources\":[],\"net_search_data\":[{\"content\":\"本报讯（记者耿建扩 通讯员李征）今年5月，河北石家庄连续出现四天一级优”，21个优良天，这是2013年以来该市出现的首个四连优”。加上出现的17天二级良”，5月石家庄市空气质量优良率达67.7%，且没有出现一个重污染天气。\\n6月16日，环保部发布5月份重点区域和74个城市空气质量状况。监测结果显示，石家庄市排在第56位，退出了全国空气质量相对较差城市前十名。这是自2013年我国实行新空气质量标准以来，石家庄单月空气质量最好的一个月，也是在全国排名位次最好的一次。\\n目前，石家庄市已通过环保部核查认定，二氧化硫、氮氧化物完成十二五”时期减排比例的100.1%、107.1%，监控数据传输有效率平均达到96.14%，成为河北全省唯一提前一年完成十二五”时期主要污染物减排任务的城市。\\n对于空气质量的改善，石家庄市民感受最深。以前即使下了雨，空气也没有现在这么好。”市民张先生说。每次遇到好天气，把蓝天白云的图片发到朋友圈时，心里就会有一种幸福感。”网友小豆丁”说，不少外地朋友看到她晒的蓝天白云时，一开始还不相信，那时我都会欣慰地对他们说，我们这儿现在变化可大了，好天气越来越多了。”\\n在今年4月8日的全市大气污染防治工作专题调度会上，河北省委常委、石家庄市委书记孙瑞彬的话掷地有声：把大气污染防治摆在更加突出的位置，坚定必胜信心，持之以恒推进，做深做细做实，真刀真枪实干，确保今年实现省会大气质量明显改善。”\\n大气污染治理是一个长期的过程。石家庄以壮士断腕的魄力提出，要通过大力实施压煤、抑尘、控车、迁企、减排、增绿”六大治污措施，推动空气质量明显改善。\\n4月30日，石\",\"index\":0,\"link\":\"http://epaper.gmw.cn/gmrb/html/2015-08/09/nw.D110000gmrb_20150809_1-01.htm?div=-1\",\"refer\":\"ref_1\",\"title\":\"石家庄空气质量明显改善-光明日报-光明网\"},{\"content\":\"新华社石家庄12月19日电(记者巩志宏)京津冀及周边地区从16日开始的重污染天气到了19日进一步加剧，河北石家庄、辛集、邯郸3市AQI出现爆表”。其中，石家庄市空气污染最重，19日市区内世纪公园”监测点PM2.5和PM10一度双双突破1000微克立方米。\\n19日一早，记者在石家庄街头看到，连日来的重污染天气仍在持续，且程度更为严重，浓得化不开的雾霾将城市严密笼罩着。一个朋友告诉记者，今天一出门被浓烈的煤烟味道呛着了，不停地咳嗽。而且单位办公区内朦胧一片，室内空气污染也非常严重。\\n根据河北AQI在线”监测结果，19日13时，河北省除了张家口空气质量为良外，其他城市均不同程度出现污染天气。其中，石家庄、辛集、邯郸三市AQI达到500、已经爆表”，廊坊、保定、衡水、定州都达到400以上、严重污染。\\n其中，石家庄在此次重污染天气中污染程度最重。从18日起，石家庄市内几个监测点便出现爆表”。到19日，爆表”仍在持续。记者查询全国城市空气质量实时发布平台，19日13时，石家庄市内世纪公园”监测点PM2.5和PM10实时监测数据达到1015、1132，双双破千”。\\n为应对此次重污染天气过程，从16日零时起，河北中南部、中东部区域共10个城市启动红色(级)应急响应。这是12月以来河北第二次启动区域红色应急响应。\\n记者了解到，20日受冷空气影响，重污染天气将略有缓解，21日随着污染回流重污染天气将持续，22日有望缓解。\",\"icon\":\"https://sfile.chatglm.cn/searchImage/m_huanqiu_com_icon.jpg\",\"index\":0,\"link\":\"http://m.huanqiu.com/r/MV8wXzk4MzE0MjhfOTBfMTQ4MjE0Mzk0NQ==\",\"media\":\"环球网\",\"refer\":\"ref_2\",\"title\":\"河北多地空气质量“爆表” 石家庄PM2.5指数超过1000\"},{\"content\":\"全国空气质量后10位城市河北占7席 石家庄成空气最差城市\\n央广网石家庄12月5日消息(记者孟晓光)据中国之声《新闻纵横》报道，除了北京和天津，河北省也饱受雾霾困扰。2号开始空气污染叠加大雾天气，部分地区能见度不足50米。河北省会石家庄市的空气污染指数从2号下午开始持续爆表，城区道路能见度不足100米，远处的建筑都淹没在了大雾中。\\n河北省气象台昨天(4号)连续发布了大雾和霾红色预警。受严重雾霾天气影响，从昨天傍晚开始，北京以南，河北境内的所有高速公路再次关闭。经过了一个晚上，目前河北省的天气情况如何？\\n目前石家庄被重雾霾所笼罩，能见度约1000米左右，截止到今早7点30分，石家庄空气污染指数是392，属于严重污染。2号开始，河北中南大部出现了重污染天气过程，河北省气象台昨天在11点和17点时连续发布大雾和霾红色预警，属于最高级别预警。截止到昨天下午3点，河北省192个大气监测点中，17个监测点空气污染指数AQI超500，处于爆表状态，石家庄市区世纪公园检测点PM2.5指数，一度攀升至814。昨天石家庄一度处于极度污染状态，成为全国空气质量最差的城市。河北有7个城市昨天都排在全国空气质量后10位，今天早上到上午，河北中南平原地带有能见度小于15米的浓雾，中南大部还将出现中到重度霾。\\n根据河北环保部门实时监测，截止到7点30分，石家庄邯郸目前为严重污染，其中邯郸AQI指数爆表，超过500，辛集、衡水、邢台重度污染，其余地方为轻度污染或良，相较于前两天，今天早晨雾霾范围和程度处于减弱过程，今天白天受冷空气的影响，河北大部分地区将出现4级左右偏北风，雾和霾\",\"icon\":\"https://sfile.chatglm.cn/searchImage/m_huanqiu_com_icon.jpg\",\"index\":0,\"link\":\"https://m.huanqiu.com/r/MV8wXzk3NzQ5MjBfOTBfMTQ4MDk0NTc1Ng==?__from=cambrian\",\"media\":\"环球网\",\"refer\":\"ref_3\",\"title\":\"石家庄4日遭遇极度污染 成全国空气质量最差城市\"},{\"content\":\"新京报讯 (记者王硕)24日，环保部部长陈吉宁赴河北省石家庄市开展2017年第一季度空气质量专项督查。据介绍，2016年，石家庄全年PM2.5平均浓度比2015年上升了11.2%，在全国74个重点城市空气质量排名倒数第二。今年1月，PM2.5浓度更是达到200微克/立方米，较去年同期上升了51.5%。\\n24日晚，陈吉宁主持召开石家庄市大气污染防治工作座谈会，市直各部门以及各县、区主要负责人悉数参加，共同分析研判石家庄市面临的严峻形势以及下一步的工作安排。\\n陈吉宁说，从2016年10月开始，石家庄全市空气质量出现大幅下滑，今年1、2月份各项主要污染物指标均不降反升”，这里面有气象等客观原因，更主要的是压力传导不够、县镇一级问题突出，管理粗放、散乱污”企业扎堆、道路扬尘严重、重污染天气应急不落实等问题尚未解决。\\n陈吉宁表示，希望通过这次督查，一方面让各种问题水落石出”、充分暴露，另一方面，重点抓住区县这个关键和薄弱环节，传导压力，夯实责任，真刀真枪把暴露出来的问题解决好。\\n又讯 据新华社电 环保部正在对京津冀及周边区域18个城市进行2017年第一季度空气质量专项督查，并继续加大暗查夜查力度。督查发现，邯郸市河北天瑞橡胶有限公司被查封后仍有生产迹象。\\n赴现场检查的督查人员26日介绍，这家企业违规建设燃煤锅炉，锅炉房已于2月21日被当地复兴区环保局查封。24日上午，督查组人员看到锅炉房大门贴着封条，但透过门缝可以看到锅炉正在工作，烟囱也是热的，企业的生产设备仍有余温，生产迹象明显。督查组人员告诉记者，企业的相关情况已经移交给当地政府和环保部门进行查处。\",\"index\":0,\"link\":\"http://epaper.bjnews.com.cn/html/2017-02/27/content_672672.htm?div=-1\",\"refer\":\"ref_4\",\"title\":\"环保部部长带队督查石家庄空气质量\"},{\"content\":\"10月1日至12月9日，石家庄市重污染天数共5天，同比减少27天；优良天数共35天，同比增加19天，其中一级天增加5天、二级天增加14天\\n本报讯（记者任学光 通讯员翟相哲）最近一段时间，蓝天白云一直眷恋石家庄，连续的好天气给省会市民带来好心情。石家庄市大气和水污染防治指挥部办公室提供的数据显示，10月1日至12月9日，石家庄市重污染天数共5天，同比减少27天；优良天数共35天，同比增加19天，其中一级天增加5天、二级天增加14天。\\n进入秋冬季后，石家庄市坚持科学治霾、依法治霾、铁腕治霾，通过实施散乱污”企业治理、劣质散煤管控、降低工业污染等多项举措，举全市之力打响蓝天保卫战”，空气质量得到明显改善。\\n推进劣质散煤管控和燃煤锅炉淘汰。在劣质散煤管控中，坚持发现一起、取缔一起，集中开展劣质散煤管控百日会战”，386户无照散煤经营户被取缔，4704吨散煤被查扣。针对燃煤锅炉淘汰，全市多次开展拉网式大排查和回头看”，杜绝弄虚作假、死灰复燃。截至目前，全市列入淘汰范围的5385台、7185.86蒸吨燃煤锅炉已全部拆除，15台35-65蒸吨燃煤锅炉提标改造也已全部完成。\\n最大限度降低工业污染。强化重点行业产能压减，坚持落后产能应去尽去、僵尸企业”应退尽退，共压减水泥产能331万吨、炼铁产能52万吨，焦炭产能压减任务65万吨正在加紧推进；强化散乱污”企业整治，共排查3641家涉气散乱污”企业，关停取缔1523家、整改提升2092家、搬迁入园26家；对水泥、铸造（不含电炉）、化工、医药、农药等行业的770家企业，实施停限产、错峰生产等措施。\\n综合施策精细治理扬尘污\",\"icon\":\"https://sfile.chatglm.cn/searchImage/hbrb_hebnews_cn_icon.jpg\",\"index\":0,\"link\":\"http://hbrb.hebnews.cn/pc/paper/c/201712/20/c40941.html\",\"media\":\"hebnews.cn\",\"refer\":\"ref_5\",\"title\":\"石家庄秋冬季空气质量明显改善\"},{\"content\":\"石家庄空气质量优良天数比率达67.4%\\n近日，石家庄市委、市政府出台《关于深入打好污染防治攻坚战的实施意见》，明确今后三年污染防治攻坚战目标任务：到2025年，全市主要污染物排放总量持续下降，全市PM2.5浓度达到40微克/立方米，空气质量优良天数比率达到67.4%，地表水—类水体比例达到66.7%，基本消除重污染天气，全部消除黑臭水体，土壤污染风险得到有效管控。\\n深入打好蓝天保卫战。打好退后十”成果巩固攻坚战，聚焦产业、能源和交通运输结构调整，开展重点行业资源利用效率、能源消耗、污染物排放对标行动，提高城市精细化管理水平。到2025年，空气质量综合指数排名稳定退出全国后十位。完善市县两级重污染天气应急预案体系，实施重点行业企业绩效分级管理，依法严厉打击不落实应急减排措施行为。加快新能源车推广应用，深入实施清洁柴油车（机）行动，淘汰国三及以下排放标准汽车。\\n深入打好碧水保卫战。统筹石家庄市白洋淀上游流域水生态环境整治和修复，促进白洋淀上游流域水质全面改善。系统推进城市黑臭水体治理，全面完成市政合流制排水管网雨污分流改造，推进城镇污水管网全覆盖。巩固提升饮用水安全保障水平，基本完成乡镇级水源保护区划定、立标并开展环境问题排查整治。突出对民心河、太平河、环城水系等城市景观河道水质监管，逐步改善景观水系水质。\\n深入打好净土保卫战。因地制宜推进农村厕所革命、农村生活污水和生活垃圾治理，聚焦补齐乡村生态环境突出短板，深化农村生态环境综合整治。到2025年，农村生活污水治理率达到45%，化肥农药利用率达到43%以上，畜禽粪污综合利用率达到85%以上。开展无废\",\"index\":0,\"link\":\"http://he.news.cn/xinwen/2022-09/13/c_1128997682.htm\",\"refer\":\"ref_6\",\"title\":\"到2025年石家庄空气质量优良天数比率达67.4%（发布时间：2022-09-13 10:10:59）\"},{\"content\":\"2017年1月74个城市空气质量状况：石家庄垫底\\n环境保护部今日发布2017年1月全国和京津冀、长三角、珠三角区域及直辖市、省会城市、计划单列市空气质量状况。全国338个地级及以上城市平均优良天数比例为60.0%，同比下降6.7个百分点。PM2.5、PM10浓度分别为78微克/立方米、117微克/立方米，同比均上升14.7%。\\n环境保护部环境监测司司长刘志全介绍，1月，74个城市中空气质量排名相对较差的后10位城市（从第74名到第65名）分别是：石家庄、邢台、邯郸、保定、乌鲁木齐、西安、太原、衡水、郑州和唐山市；空气质量排名相对较好的前10位（从第1名到第10名）城市依次是：海口、舟山、拉萨、昆明、丽水、福州、台州、厦门、深圳和惠州市。\\n京津冀区域13个城市平均优良天数比例为36.2%，同比下降19.6个百分点。PM2.5浓度为128微克/立方米，同比上升43.8%；PM10浓度为189微克/立方米，同比上升41.0%。\\n北京市优良天数比例为51.6%，同比下降19.4个百分点。PM2.5浓度为116微克/立方米，同比上升70.6%；PM10浓度为131微克/立方米，同比上升63.8%。\\n长三角区域25个城市平均优良天数比例为74.1%，同比上升16.2个百分点。PM2.5浓度为60微克/立方米，同比下降16.7%；PM10浓度为86微克/立方米，同比下降18.9%。\\n珠三角区域9个城市平均优良天数比例为84.2%，同比下降13.3个百分点。PM2.5浓度为51微克/立方米，同比上升59.4%；PM10浓度为69微克/立方米，达到国家二级年均浓度标准\",\"icon\":\"https://sfile.chatglm.cn/searchImage/www_kepuchina_cn_icon.jpg\",\"index\":0,\"link\":\"http://www.kepuchina.cn/qykj/zykx/201702/t20170222_95722.shtml\",\"media\":\"kepuchina.cn\",\"refer\":\"ref_7\",\"title\":\"2017年1月74个城市空气质量状况：石家庄垫底\"}]}",
      "message_type": ""
    }
  ],
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `id`: 消息 ID
  - `conversationid`: 对话 ID
  - `sender`: 发送者,ai 为机器人
  - `message`: 消息内容 markdown 格式
  - `createtime`: 创建时间
  - `qtype`: 消息类型
  - `event`: 事件(字符串,需要你解析为 json)
    - ~~`intent-data`: 意图数据 (详见[意图类接口统一返回格式](./意图类接口统一返回格式.md)) (
      当回答中有意图命中时返回)~~
    - `retriever_resources`: 引用知识库的回答 (当回答中引用知识库时返回)
      - `document_name`: 文档名称
      - `content`: 内容
    - `net_search_data`: 联网搜索的回答 (当回答中联网搜索时返回)
      - `content`: 回答内容
      - `icon`: 图标
      - `link`: 链接
      - `title`: 标题
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 4.7 删除对话

- **接口说明：** 删除对话
- **接口地址：** /applet/delCon
- **请求方式：** get

#### 请求参数

| 参数名称       | 类型   | 出现要求 | 描述    |
| :------------- | :----- | :------- | :------ |
| conversationId | string | R        | 对话 id |

#### 请求示例

`/applet/delCon?conversationId=205114260906001022858275`

#### 返回结果

成功响应

```json
{
  "data": "",
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`: 对话 ID
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

## 5. 创作相关

:::warning
整体功能流程概述

- 获取智能体列表
  - 普通类智能
    - 调用[5.2 普通类获取智能体详情](#_5-2-普通类获取智能体详情)
    - 调用[5.3](#_5-3-模板类获取智能体详情)获取对应的对话 id
    - 然后[4.对话](#_4对话)获取对应的对话类接口
  - 模板类智能体
    - 模板类智能体体无需保存查看对话历史,调取配置,进行对话生成即可

:::

### 字典-获取智能体分类

- **接口说明：** 获取智能体分类
- **接口地址：** /applet/fetchAgentCategoryList
- **请求方式：** post(application/json)

#### 请求参数

无

#### 返回结果

成功响应

```json
{
  "data": [
    {
      "id": 37,
      "dic_code": "A04",
      "dic_name": "气象分析",
      "catalog_code": "agent_category",
      "is_enable": "1",
      "dic_sort": 0,
      "remark": "气象",
      "create_time": "2024-09-18 16:11:35",
      "update_time": "2024-09-18 16:11:35"
    },
    {
      "id": 20,
      "dic_code": "A02",
      "dic_name": "办公工具",
      "catalog_code": "agent_category",
      "is_enable": "1",
      "dic_sort": 11,
      "remark": "办公",
      "create_time": "2024-09-09 14:59:35",
      "update_time": "2024-09-09 14:59:35"
    },
    {
      "id": 21,
      "dic_code": "02",
      "dic_name": "角色",
      "catalog_code": "agent_category",
      "is_enable": "1",
      "dic_sort": 144,
      "remark": "角色",
      "create_time": "2024-09-09 14:59:56",
      "update_time": "2024-09-09 14:59:56"
    },
    {
      "id": 22,
      "dic_code": "03",
      "dic_name": "工具",
      "catalog_code": "agent_category",
      "is_enable": "1",
      "dic_sort": 355,
      "remark": "工具",
      "create_time": "2024-09-09 15:00:15",
      "update_time": "2024-09-09 15:00:15"
    }
  ],
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `id`: ID
  - `dic_code`: 分类代码
  - `dic_name`: 分类名称
  - `catalog_code`: 目录代码
  - `is_enable`: 是否启用
  - `dic_sort`: 排序
  - `remark`: 备注
  - `create_time`: 创建时间
  - `update_time`: 更新时间
- `msg` : 消息
  - `code`: 状态码
  - `count`: 计数

### 5.1 获取 AI 智能体列表

- **接口说明：** 获取 AI 智能体列表
- **接口地址：** /applet/fetchAgentList
- **请求方式：** post(application/json)

#### 请求参数

| 参数名称       | 类型   | 出现要求 | 描述              |
| :------------- | :----- | :------- | :---------------- |
| keyword        | string | O        | 关键字            |
| agent_category | string | O        | 智能体分类,字典值 |

#### 请求示例

```json
{
  "keyword": "",
  "agent_category": ""
}
```

#### 返回结果

成功响应(只写用到的字段)

```json
{
  "data": [
    {
      "id": "270616544836002834206273",
      "avatar": "https://xh-ai.obs.cn-north-1.myhuaweicloud.com:443/avatar/2025/02/19/png/189436090393618173191508850.png",
      "agent_name": "管控措施专家",
      "introduction": "提供精准管控策略建议以优化空气质量管理。",
      "opening_line": "各类源精细化管控措施库",
      "agent_type": "normal",
      "agent_category": "03"
      // ...
    }
  ],
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `id`: 智能体 id
  - `avatar`: 头像
  - `agent_name`: 智能体名称
  - `introduction`: 介绍
  - `opening_line`: 开场白
  - `agent_type`: 智能体类型(字典)
    - `normal`: 普通智能体
    - `template`: 模板智能体
  - `agent_category`: 智能体分类(字典)
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 5.2 普通类获取智能体详情

- **接口说明：** 获取登陆用户信息接口
- **接口地址：** /applet/fetchAgentDetail
- **请求方式：** post

#### 请求参数

| 参数名称 | 类型   | 出现要求 | 描述      |
| :------- | :----- | :------- | :-------- |
| agentId  | string | R        | 智能体 id |

#### 请求示例

`GET /applet/fetchAgentDetail?agentId=194534468457860733191149788`

#### 返回结果

成功响应

```json
{
  "data": {
    "configs": [
      {
        "id": "194535237402320213191191861",
        "agent_id": "194534468457860733191149788",
        "config_type": "guidance_line",
        "value": "法律法规知识库问答"
      },
      {
        "id": "194535237402661183191191435",
        "agent_id": "194534468457860733191149788",
        "config_type": "guidance_line",
        "value": "法律法规知识库问答"
      },
      {
        "id": "194535237402707893191191850",
        "agent_id": "194534468457860733191149788",
        "config_type": "guidance_line",
        "value": "法律法规知识库问答"
      },
      {
        "id": "194535237402765493191191838",
        "agent_id": "194534468457860733191149788",
        "config_type": "show_deep_seek",
        "value": "true"
      },
      {
        "id": "194535237402808303191191380",
        "agent_id": "194534468457860733191149788",
        "config_type": "show_net_search",
        "value": "true"
      }
    ],
    "agent": {
      "id": "194534468457860733191149788",
      "avatar": "https://xh-ai.obs.cn-north-1.myhuaweicloud.com:443/avatar/2025/02/25/jpg/194535208141359303191149182.jpg",
      "agent_name": "法律法规知识库问答",
      "introduction": "法律法规知识库问答",
      "character_setting": "",
      "opening_line": "法律法规知识库问答",
      "know_id": "",
      "agent_type": "normal",
      "agent_category": "02",
      "link_address": "",
      "temperature": "",
      "is_show": "1",
      "system_id": "",
      "dify_api": "http://localhost:8090/v1",
      "dify_key": "app-bTmtmFiOwLa6guaaa5E0DUiB"
    }
  },
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:

  - `configs`: 配置信息

    - `id`: 配置 id
    - `agent_id`: 智能体 id
    - `config_type`: 配置类型 (根据取值进行分组,参考下表)
      | 取值 | 类型 | 描述 |
      | :------- | :----- | :-------- |
      | show_net_search|String | 是否有联网搜索功能 ture 或者 false|
      | show_deep_seek|String| 是否有深度搜索功能 ture 或者 false |
      | guidance_line| String |引导语 |
    - `value`: 配置值

- `agent`: 智能体信息参考 [5.1 获取 AI 智能体列表](#_5-1-获取-ai-智能体列表)

- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 5.3 普通类对话智能体获取对应的对话 id

- **接口说明：** 获取登陆用户信息接口
- **接口地址：** /applet/saveOrGetAgentUsageRecord
- **请求方式：** post

#### 请求参数

| 参数名称  | 类型   | 出现要求 | 描述      |
| :-------- | :----- | :------- | :-------- |
| system_id | string | R        | 系统 id   |
| user_id   | string | R        | 用户 id   |
| agent_id  | string | R        | 智能体 id |

#### 请求示例

```json
{
  "system_id": "WEIXIN",
  "user_id": "13028695829",
  "agent_id": "194534468457860733191149788"
}
```

#### 返回结果

成功响应

```json
{
  "data": {
    "id": "1894253252508422145",
    "dify_conversation_id": "b4b7a95d-9f5e-4f63-96ad-e6f831711c61"
  },
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - id: 对话 id
  - dify_conversation_id: dify 对话 id(当有对话历史的时候此值有取值,用于进行多次对话)
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 5.3 普通类智能体对话

同[4.2 对话 sse 接口](#_4-2-对话-sse-接口)

### 5.3 模板类智能体获取详情

- **接口说明：** 获取登陆用户信息接口
- **接口地址：** /dify/parameters
- **请求方式：** post

#### 请求参数

| 参数名称 | 类型   | 出现要求 | 描述      |
| :------- | :----- | :------- | :-------- |
| agent_id | string | R        | 智能体 id |

#### 请求示例

`GET /dify/parameters?agent_id=49436477017656561451227590`

#### 返回结果

成功响应

```json
{
  "data": {
    "agent": {
      "id": "49436477017656561451227590",
      "avatar": "https://xh-ai.obs.cn-north-1.myhuaweicloud.com:443/avatar/2024/09/12/png/51140261157705731451168221.png",
      "agent_name": "项目周报编写",
      "introduction": "一键自动化生成高效周报。精准汇总项目进度、问题挑战、成果亮点，辅以数据分析与趋势预",
      "character_setting": "- Role: 研发团队的项目经理\n- Background: 作为研发团队的项目经理，需要每周向公司管理层汇报团队的研发进展、遇到的问题以及下一步的计划。\n- Profile: 你是一位经验丰富的项目经理，对研发流程和项目管理有着深刻的理解，能够准确把握项目的关键节点和潜在风险。\n- Skills: \n你具备出色的沟通能力、分析能力和问题解决能力，能够清晰地表达复杂的技术问题，并且\n能够制定合理的研发计划。\n获取系统时间并按照指定格式进行输出。\n- Goals:\n  - 接收用户输入的周报信息\n  - 对周报信息进行筛选和精简\n  - 将周报信息按照结构化格式排版\n  - 将排版好的周报输出\n  - 周报的阅读对象是直属领导, 请注意周报的措词和语气\n- Constrains: \n  -周报需要简洁明了，避免过多的技术细节，确保非技术人员也能理解和关注。\n  -直接输出内容，不需要任何解释或说明。\n- OutputFormat: \n\n一、本周工作总结\n- 工作事项1(限150字以内)\n- 工作事项2(限150字以内)\n- 工作事项3(限150字以内)\n二、下周工作计划\n- 工作计划1(限150字以内)\n- 工作计划2(限150字以内)\n- 工作计划3(限150字以内)\n三、存在问题\n- 问题1(限150字以内)\n- 问题2(限150字以内)\n\n- Workflow:\n  1. 汇总本周研发团队的工作进展和成果。\n  2. 识别并记录在研发过程中遇到的问题和挑战。\n  3. 分析问题原因，提出解决方案或改进措施。\n  4. 规划下周的研发工作和目标。\n  5. 不需要回答与周报不相关的内容。\n- Examples:\n  - 例子1：完成了产品A的新功能开发，进行了内部测试，发现性能瓶颈，计划下周进行性能优化。\n  - 例子2：产品B的用户界面设计已完成，等待用户反馈，下周将根据反馈进行调整。\n  - 例子3：遇到了数据库迁移的问题，已经找到了解决方案，下周将进行迁移工作。\n- Initialization: 用户提交相关信息后，将信息进行结构化分类，并按照提供的格式进行排版。",
      "opening_line": "",
      "know_id": "",
      "agent_type": "template",
      "agent_category": "A02",
      "link_address": "",
      "temperature": 0.1,
      "is_show": "1",
      "system_id": "",
      "dify_api": "",
      "dify_key": ""
    },
    "parameters": {
      "opening_statement": "",
      "suggested_questions": [],
      "suggested_questions_after_answer": {
        "enabled": false
      },
      "speech_to_text": {
        "enabled": false
      },
      "text_to_speech": {
        "enabled": false,
        "language": "",
        "voice": ""
      },
      "retriever_resource": {
        "enabled": true
      },
      "annotation_reply": {
        "enabled": false
      },
      "more_like_this": {
        "enabled": false
      },
      "user_input_form": [
        {
          "paragraph": {
            "label": "本周工作内容",
            "variable": "this_week",
            "required": true,
            "default": ""
          }
        },
        {
          "paragraph": {
            "label": "下周工作计划",
            "variable": "last_week",
            "required": true,
            "max_length": 48,
            "default": ""
          }
        },
        {
          "paragraph": {
            "label": "问题及需要的支持",
            "variable": "q_s",
            "required": true,
            "max_length": 48,
            "default": ""
          }
        }
      ],
      "sensitive_word_avoidance": {
        "configs": [],
        "enabled": false,
        "type": ""
      },
      "file_upload": {
        "image": {
          "detail": "high",
          "enabled": false,
          "number_limits": 3,
          "transfer_methods": ["remote_url", "local_file"]
        },
        "enabled": false,
        "allowed_file_types": [],
        "allowed_file_extensions": [
          ".JPG",
          ".JPEG",
          ".PNG",
          ".GIF",
          ".WEBP",
          ".SVG",
          ".MP4",
          ".MOV",
          ".MPEG",
          ".MPGA"
        ],
        "allowed_file_upload_methods": ["remote_url", "local_file"],
        "number_limits": 3
      },
      "system_parameters": {
        "image_file_size_limit": 10,
        "video_file_size_limit": 100,
        "audio_file_size_limit": 50,
        "file_size_limit": 15,
        "workflow_file_upload_limit": 10
      }
    }
  },
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:

  - `agent`: 智能体信息参考 [5.1 获取 AI 智能体列表](#_5-1-获取-ai-智能体列表)
  - `parameters`:
    参考[dify 接口获取应用参数](http://36.134.82.195:8090/app/5692943e-6986-4566-b333-2c1210ca9a7e/develop)
    - `parameters.user_input_form`: [用户输入表单配置](http://36.134.82.195:8090/app/5692943e-6986-4566-b333-2c1210ca9a7e/develop)

- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 5.5 模板类智能体对话,生成内容(sse)

- **接口说明：** 模板类智能体对话,生成内容,主要参考 dify 文档
- **接口地址：** /dify/completion-messages
- **请求方式：** post
- **返回方式：** sse

:::warning 注意事项

1.参考[dify 文本生成型应用接口](http://36.134.82.195:8090/app/e03aed9a-61b1-41e9-bf71-3af65bc5cac8/develop)

2.inputs 的键值对主要就是配置接口返回的键值对内容

3.接口以 sse 方式返回

4.无需保存对话历史,无需创建对话

:::

#### 请求参数

| 参数名称      | 类型   | 出现要求 | 描述                                                                                                                                                                      |
| :------------ | :----- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| agent_id      | string | R        | 智能体 id                                                                                                                                                                 |
| inputs        | string | R        | 允许传入 App 定义的各变量值。 inputs 参数包含了多组键值对（Key/Value pairs），每组的键对应一个特定变量，每组的值则是该变量的具体值。 文本生成型应用要求至少传入一组键值对 |
| response_mode | string | R        | streaming                                                                                                                                                                 |
| user          | string | R        | 必须是系统 id+用户 id                                                                                                                                                     |

#### 请求示例

```json
{
  "agent_id": "49436477017656561451227590",
  "inputs": {
    "this_week": "123",
    "last_week": "123",
    "q_s": "123"
  },
  "user": "WEIXIN-13028695829",
  "response_mode": "streaming"
}
```

#### 返回结果

参考[dify 文本生成型应用发送消息接口](http://36.134.82.195:8090/app/e03aed9a-61b1-41e9-bf71-3af65bc5cac8/develop)

## 6. 指令相关

### 6.1 获取指令分类

- **接口说明：** 获取指令分类
- **接口地址：** /applet/fetchCommandCategoryList
- **请求方式：** post(application/json)

#### 请求参数

无

#### 返回结果

成功响应

```json
{
  "data": [
    {
      "id": 9,
      "dic_code": "CATEGORY001",
      "dic_name": "知识",
      "catalog_code": "command_category",
      "is_enable": "1",
      "dic_sort": 7,
      "remark": "与办公相关的指令",
      "create_time": "2024-09-09 14:04:20",
      "update_time": "2024-09-09 14:04:20"
    }
  ],
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `id`: 指令 ID
  - `dic_code`: 指令分类代码
  - `dic_name`: 指令分类名称
  - `catalog_code`: 目录代码
  - `is_enable`: 是否启用
  - `dic_sort`: 排序
  - `remark`: 备注
  - `create_time`: 创建时间
  - `update_time`: 更新时间
- `msg` : 消息
  - `code`: 状态码
  - `count`: 计数

### 6.2 获取指令列表

- **接口说明：** 删除对话
- **接口地址：** /applet/fetchCommandList
- **请求方式：** post(application/json)

#### 请求参数

| 参数名称         | 类型   | 出现要求 | 描述                                                                                                    |
| :--------------- | :----- | :------- | :------------------------------------------------------------------------------------------------------ |
| keyword          | string | O        | 关键词                                                                                                  |
| command_category | string | O        | 指令分类                                                                                                |
| creator          | string | R        | 创建者                                                                                                  |
| command_type     | string | R        | 指令类型: <ul><li><code>duihua</code>: 普通对话指令</li><li><code>wenshu</code>: 意图对话指令</li></ul> |
| agent_id         | string | O        | 智能体 id                                                                                               |

#### 请求示例

对话指令

```json
{
  "keyword": "",
  "command_category": "",
  "creator": "",
  "command_type": "duihua"
}
```

问数指令

```json
{
  "keyword": "",
  "command_category": "",
  "creator": "",
  "command_type": "wenshu"
}
```

智能体指令

```json
{
  "keyword": "",
  "command_category": "",
  "creator": "",
  "command_type": "wenshu",
  "agent_id": "对应的智能体id"
}
```

#### 返回结果

成功响应

```json
{
  "data": [
    {
      "id": 50,
      "command_type": "duihua",
      "command_category": "CATEGORY001",
      "title": "臭氧(O3)管控措施有哪些？",
      "content": "臭氧(O3)管控措施有哪些？污染协同控制专项行动有哪些？",
      "creator": "",
      "create_time": "2024-09-20 16:22:51",
      "update_time": "2024-09-20 16:22:51",
      "agent_id": ""
    }
  ],
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `id`: 指令 ID
  - `command_type`: 指令类型
  - `command_category`: 指令分类
  - `title`: 指令标题
  - `content`: 指令内容
  - `creator`: 创建者
  - `create_time`: 创建时间
  - `update_time`: 更新时间
  - `agent_id`: 智能体 ID
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

## 7. 其他

### 7.1 导出markdown为word

- **接口说明：** 导出markdown为word
- **接口地址：** /applet/markdownToWord
- **请求方式：** post(application/json)

#### 请求参数

| 参数名称 | 类型   | 出现要求 | 描述            |
| :------- | :----- | :------- | :-------------- |
| markdown | string | R        | markdown 字符串 |

#### 请求示例

```json
{
  "markdown": "# title"
}
```

#### 返回结果

成功响应

```json
{
  "data": "https://xh-ai.obs.cn-north-1.myhuaweicloud.com:443/docx/2025/04/24/docx/1915225992196419584.docx",
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`: word 文件地址
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

### 7.2 获取agent名称转义列表

- **接口说明：** 获取agent名称转义列表
- **接口地址：** /dify/fetchToolMappingList
- **请求方式：** get

#### 请求示例

`GET /dify/fetchToolMappingList`

#### 返回结果

成功响应

```json
{
  "data": [
    {
      "tool_code": "getAirCityRankData",
      "tool_label": "获取沙河空气质量排名数据",
      "comment": ""
    },
    {
      "tool_code": "getAlarmGzData",
      "tool_label": "获取沙河空气质量高值数据",
      "comment": ""
    }
    // ...
  ],
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

#### 字段说明

- `data`:
  - `tool_code`: 工具代码
  - `tool_label`: 工具名称
  - `comment`: 备注
- `msg` : 消息
- `code`: 状态码
- `count`: 计数

## 异常结果返回格式

```json
{
  "code": "错误码",
  "msg": "错误信息"
}
```

| 错误码 | 描述           |
| :----- | :------------- |
| 401    | 授权失败       |
| 500    | 服务器内部错误 |

## 注意事项

1. **SSE 流式传输**：客户端需要使用 EventSource API 接收服务器推送的数据，并处理流式传输的响应。
2. **错误处理**：客户端需要根据返回的状态码和错误信息进行相应的错误处理。
3. **令牌有效期**：客户端需要在令牌过期前重新获取新的 `access_token`。
