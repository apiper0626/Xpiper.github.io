# PDF2WORD接口说明.md

## python一、请求转换接口说明

- **接口地址：**  [http://ai.aepic.net:20000/v1/start_pdf2word](http://ai.aepic.net:20000/v1/start_pdf2word)
- **请求方式：**  POST
- **请求示例：**

```python
import requests
url ="http://ai.aepic.net:20000/v1/start_pdf2word"
# 定义要上传的文件
files = [
    ('files', ('file1.pdf', open('/home/asd/project/PaddleOCR-main/ppstructure/docs/recovery/file1.pdf', 'rb'), 'application/pdf')),
    ('files', ('file2.pdf', open('/home/asd/project/PaddleOCR-main/ppstructure/docs/recovery/file2.pdf', 'rb'), 'application/pdf'))
]

# 发送POST请求
response = requests.post(url, files=files)
```

<br/>

- **参数说明：**

| 参数值   | 示例值 | 参数类型  | 是否必填 | 参数描述                                  |
|-------|-----|-------|------|---------------------------------------|
| files |     | PDF文件 | 是    | 如果列表中有非pdf文件，会返回请确保为pdf格式文件，并且不会再转换文件 |

### 成功响应说明

```
{
  'code': 200, 
  'msg': '调用成功', 
  'data': [
        {'task_id': '174f16da804c45c8bf3d169b8bcf5242', 'status': 'starting', 'progress': 0, 'doc_path': ''},
        {'task_id': '87ab423fe1e243eba216e681c2ec17fb', 'status': 'starting', 'progress': 0, 'doc_path': ''}
    ]
}
```

<br/>

- **参数说明：**

<br/>

| 参数值      | 内容说明                              |
|----------|-----------------------------------|
| code     | 200表示请求成功，400表示文件格式不对，500表示文件上传失败 |
| msg      | 说明                                |
| data     | 请求状态值                             |
| task_id  | 任务id                              |
| status   | 开始转换状态                            |
| progress | 转换进度                              |
| doc_path | 转换生成的文件路径                         |

## 二、获取转换状态接口说明

- **接口地址：**  [http://ai.aepic.net:20001/v1/get_pdf2word_status](http://ai.aepic.net:20001/v1/get_pdf2word_status)
- **请求方式：**  GET
- **请求示例：**

```
params:
task_id = 174f16da804c45c8bf3d169b8bcf5242
```

<br/>

- **参数说明：**

<br/>

| 参数值     | 示例值 | 参数类型   | 是否必填 | 参数描述   |
|---------|-----|--------|------|--------|
| task_id | ""  | string | 是    | 获取任务状态 |

### 成功响应说明

```
{
    "task_id": "174f16da804c45c8bf3d169b8bcf5242",
    "status": "completed",
    "progress": 100,
    "doc_path": "http://data.xhgrid.com/model/pdf2docx/174f16da804c45c8bf3d169b8bcf5242_file1.docx"
}
```

<br/>

- **参数说明：**

<br/>

| 参数值      | 内容说明      |
|----------|-----------|
| task_id  | 任务id      |
| status   | 转换状态      |
| progress | 转换进度      |
| doc_path | 转换生成的文件路径 |

**注意：**

<br/>

==如果该任务完成以后，第一次调用会返回status=completed，progress=100，doc_path="具体路径"
；获取完以后再次调用该任务id，会返回{"task_id":task_id,"status": "idle", "progress": 0,"doc_path":""}，即该任务已销毁状态。==
