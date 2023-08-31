1. eslint 安装 airbnb typescript 规则；
2. 代码格式细节；
3. prettier 没有联动 lint-staged 做自动格式化；
4. eslint 兼容 prettier 配置；
5. 尽量不要忽略 eslint 规则，尝试解决问题；
6. 优化 eslint 配置，有一部分配置与 airbnb 冗余；
7. lint-staged 时的 eslint 配置不要自动 fix；
8. commitlint.config.js 文件内容错误；
9. 依赖错误；
10. 养成格式化的习惯；
11. 没有用的依赖删除掉；
12. 使用shell脚本发布应用；
13. 【拓展】使用github-action实现提交代码自动打包和部署；

- commitlint doesn't work;
- chakra-ui vs antd

下阶段 docker部署
14. docker & nginx
- 安装docker desktop： 
    https://docs.docker.com/desktop/install/windows-install/
    需要重启，运行 wsl --update 指令安装适用于 Linux 的 Windows 子系统
    运行 docker run hello-world 指令验证成功安装
    配置阿里云镜像：https://zhuanlan.zhihu.com/p/441965046
- 新建Dockerfile文件
下阶段 后台服务开发

create-react-app

vite