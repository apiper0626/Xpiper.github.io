# AI 解析接口文档

本页汇总了 AI 服务提供的各类解析接口，供开发者参考和调用。

| 环境 | 接口地址                                  |
| :--- | :---------------------------------------- |
| 正式 | https://webchat.aepic.net:9601/apiservice |
| 正式 | http://webchat.aepic.net:9600/apiservice  |

## 1. 地址解析接口

- **接口 URI**: `/ai/parser/parseFullAddress`
- **请求方式**: `POST`
- **请求头**: `Content-Type: application/json`
- **接口描述**: 解析并标准化地址信息。

### 请求参数

| 参数名        | 类型   | 必填 | 说明           |
| ------------- | ------ | ---- | -------------- |
| province      | String | 是   | 省份           |
| city          | String | 否   | 城市           |
| county        | String | 否   | 区/县          |
| detail        | String | 否   | 详细地址       |
| full_location | String | 是   | 完整地址字符串 |
| orig_location | String | 否   | 原始地址片段   |
| town          | String | 否   | 镇/乡          |
| village       | String | 否   | 村/社区        |

### 示例请求

```json
{
  "province": "河北省",
  "city": "石家庄",
  "county": "长安区",
  "detail": null,
  "full_location": "河北省石家庄市裕华区",
  "orig_location": "裕华区",
  "town": null,
  "village": null
}
```

### 响应示例

```json
{
  "data": {
    "citycode": "13010200",
    "cityname": "长安区",
    "parentid": "13010000",
    "parentname": "石家庄市",
    "iscity": "2"
  },
  "msg": "成功",
  "code": "200",
  "count": 0
}
```

### 响应参数说明

- `data`: 解析结果对象，包含如下字段：
  - `citycode`: 编码
  - `cityname`: 名称
  - `parentid`: 上级区域编码
  - `parentname`: 上级区域名称
  - `iscity`: 行政区划等级（0:省，1:市，2:区县）
- `msg`: 响应消息。
- `code`: 响应状态码，200 表示成功。
- `count`: 响应数据条数。

---

## 通用状态码说明

| 状态码 | 说明           |
| ------ | -------------- |
| 200    | 请求成功       |
| 500    | 服务器内部错误 |
