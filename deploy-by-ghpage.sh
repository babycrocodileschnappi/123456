#!/usr/bin/env sh

set -x  # 这里是为了看错误日志

# 打包项目
npm run build

# 进入打包后的文件夹
cd build

git init
git add -A
git commit -m 'auto deploy'

git branch -M main
git remote add origin https://github.com/babycrocodileschnappi/654321.git
git push -u origin main

