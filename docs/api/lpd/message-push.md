# 微信消息推送接口文档 v1.0.0

## 1 规范说明

### 1.1 通信协议

HTTPS、HTTP 协议

### 1.2 字符编码

编码均采用 UTF-8 字符集编码格式。

### 1.3 格式说明

元素出现要求说明：

| 符号 | 说明                                        |
| :--: | :------------------------------------------ |
|  R   | 报文中该元素必须出现（Required）            |
|  O   | 报文中该元素可选出现（Optional）            |
|  C   | 报文中该元素在一定条件下出现（Conditional） |

## 2. 接口定义

| 环境        | baseUrl                                |
| ----------- | -------------------------------------- |
| 正式(https) | https://app.aepic.net:11090/apiservice |
| 正式(http)  | http://114.115.131.79:11094/apiservice |

### 2.1 推送消息

- **接口说明：** 根据推送规则编码,推送文本或者链接类消息
- **接口地址：** https://app.aepic.net:11090/apiservice/message/pushMessage
- **请求方式：** POST

#### 2.1.1 请求参数

请求参数采用 JSON 数组格式，每个元素包含以下字段：

| 参数名称     | 类型   | 出现要求 | 描述                                                                                                                                                             |
| :----------- | :----- | :------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sourceID     | string | R        | 源数据 id(非链接类消息使用)                                                                                                                                      |
| systemID     | string | R        | 推送规则编码 (用于区分推送规则需自行配置)                                                                                                                        |
| pushRuleCode | string | R        | 推送规则编码(多个以,进行分割) 测试规则编码(TEST001)                                                                                                              |
| messageType  | string | R        | 消息类型: 01.文本消息 02.链接消息 03.图片消息 04.文件                                                                                                            |
| textContent  | string | O        | 文本消息内容(消息类型为文本的时候使用)                                                                                                                           |
| linkName     | string | O        | 链接左下角显示的名字(链接类消息使用)                                                                                                                             |
| linkTitle    | string | O        | 链接标题(最多两行) (链接类消息使用)                                                                                                                              |
| linkDigest   | string | O        | 链接摘要(最多三行) (链接类消息使用)                                                                                                                              |
| linkUrl      | string | O        | 点击链接后跳转的地址(自定义) (链接类,图片类,文件类消息使用) (消息类型为 03,04 时代表文件或者图片 url)                                                            |
| dataTime     | string | O        | 2025.01.03 添加此字段,表示消息的数据时间,用于控制是否推送消息,默认超过当前时间一小时前不推送<br> 1.传入时间格式为 yyyy-MM-dd HH:mm:ss <br>2.不传默认不做时间控制 |

请求示例：

文本消息

```json
{
  "sourceID": "1",
  "systemID": "GZSY001",
  "pushRuleCode": "TEST001",
  "messageType": "01",
  "textContent": "1",
  "dataTime": "2025-01-03 12:00:00"
}
```

链接消息(发送一个链接链接到指定页面)

```json
{
  "sourceID": "",
  "systemID": "GZSY001",
  "pushRuleCode": "TEST001",
  "messageType": "02",
  "linkName": "测试链接",
  "linkTitle": "测试链接标题",
  "linkDigest": "测试链接摘要",
  "linkUrl": "https://www.baidu.com"
}
```

图片消息

```json
{
  "sourceID": "",
  "systemID": "GZSY001",
  "pushRuleCode": "TEST001",
  "messageType": "03",
  "linkUrl": "https://www.baidu.com"
}
```

文件消息

```json
{
  "sourceID": "",
  "systemID": "GZSY001",
  "pushRuleCode": "TEST001",
  "messageType": "04",
  "linkUrl": "https://www.baidu.com"
}
```

#### 2.1.2 返回结果

| 参数名称 | 类型   | 出现要求 | 描述                  |
| :------- | :----- | :------- | :-------------------- |
| code     | string | R        | 200 表示成功,其他失败 |
| msg      | string | R        | &nbsp;                |
| data     | object | R        | &nbsp;                |
| count    | number | R        | &nbsp;                |

示例：

```
{
    "code":200,
    "msg":"保存成功",
    "data":"",
    "count":0
}
```
