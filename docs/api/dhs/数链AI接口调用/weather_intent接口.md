# weather_intent接口

接口地址：http://116.204.85.243:8080/weather_intent

请求方式：POST

请求参数：

```
{
    "query": "石家庄裕华区PM2.5浓度是多少"
}
```

返回结果：

```
{
    "code": 200,
    "msg": "success",
    "intent": "天气查询",
    "slot": {
        "city_loc": "石家庄裕华区"
    }
}
```
