# 语音合成接口文档

## 合成语音

### 接口地址

- **URL:** `POST http://ai.aepic.net:8095/paddlespeech/tts`

### 请求参数

| 字段          | 必选 | 类型     | 说明                                                                                                                                        | 
|-------------|----|--------|-------------------------------------------------------------------------------------------------------------------------------------------|
| text        | 是  | string | 待合成的文本                                                                                                                                    |
| spk_id      | 否  | int    | 发音人ID，未使用到，默认：0                                                                                                                           |
| speed       | 否  | float  | 合成音频的语速，值范围：(0，3]，默认：1.0，Windows平台不支持变语速                                                                                                  |
| volume      | 否  | float  | 合成音频的音量，值范围：(0，3]，默认：1.0，值过大可能会存在截幅现象                                                                                                     |
| sample_rate | 否  | int    | 合成音频的采样率，只支持下采样，值选择 [0, 8000, 16000]，默认:0，表示与模型采样率一致                                                                                      |
| save_path   | 否  | string | 通过此参数，可以在合成完成后在本地保存一个音频文件，默认值：None，表示不保存音频，保存音频格式支持wav和pcm。保存路径为 `/home/asd/project/triton_inference_server/images/wavdatadir/` 拼接文件名.wav |

### 请求示例

```json
{
  "text": "你好，欢迎使用百度飞桨深度学习框架！",
  "spk_id": 0,
  "speed": 1.0,
  "volume": 1.0,
  "sample_rate": 0,
  "save_path": "/home/asd/project/triton_inference_server/images/wavdatadir/你的文件名.wav"
}
```

### 返回结果

| 字段          | 必选 | 类型     | 说明                | 
|-------------|----|--------|-------------------|
| lang        | 是  | string | 待合成文本语言（zh 或 en）  |
| spk_id      | 是  | int    | 发音人ID             |
| speed       | 是  | float  | 合成音频的语速，值范围：[0，3] |
| volume      | 是  | float  | 合成音频的音量，值范围：[0，3] |
| sample_rate | 是  | int    | 合成音频的采样率          |
| duration    | 是  | float  | 合成音频的时长，单位为秒      |
| save_path   | 是  | string | 音频链接地址            |
| audio       | 是  | string | 合成音频的base64编码     |

### 返回示例

```json
{
  "success": true,
  "code": 0,
  "message": {
    "global": "success"
  },
  "result": {
    "lang": "zh",
    "spk_id": 0,
    "speed": 1.0,
    "volume": 1.0,
    "sample_rate": 24000,
    "duration": 3.6125,
    "save_path": "http://ai.aepic.net:8095/paddlespeech/tts/example_filename.wav",
    "audio": "LTI1OTIuNjI1OTUwMzQsOTk2OS41NDk4..."
  }
}
```