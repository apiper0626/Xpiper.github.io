#!/bin/bash

# 预定义的服务器和路径
SERVER="root@api3.aepic.net"
UPLOAD_PATH="/mnt/sdc/apps/10090_STSZY/webapps/"

# 检查参数是否正确
if [ "$#" -ne 1 ]; then
    echo "用法: $0 <文件或目录>"
    exit 1
fi

# 获取要上传的文件或文件夹路径
SOURCE_PATH="$1"

# 判断是文件还是文件夹
if [ -f "$SOURCE_PATH" ]; then
    echo "正在上传文件: $SOURCE_PATH"
    scp "$SOURCE_PATH" "$SERVER:$UPLOAD_PATH"
elif [ -d "$SOURCE_PATH" ]; then
    echo "正在上传目录: $SOURCE_PATH"
    scp -r "$SOURCE_PATH" "$SERVER:$UPLOAD_PATH"
else
    echo "错误: $SOURCE_PATH 不是一个有效的文件或目录"
    exit 1
fi

echo "上传完成。"