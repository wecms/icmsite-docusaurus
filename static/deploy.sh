#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 设置 Git 用户名
export GIT_USER=icms

# 设置 Git 连接方式
export USE_SSH=true

# 部署
yarn deploy
