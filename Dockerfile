FROM node:18 as build

WORKDIR /tmp

COPY . .

# 清理npm缓存
RUN npm cache verify
RUN npm cache clean -f

RUN npm install --registry https://registry.npm.taobao.org && npm run build

# 以nginx:1.12.2为基础镜像
FROM nginx:1.25

# 修改/usr/share/nginx/html里面的内容为前端需要部署的静态文件，这样前端就跑在nginx上了
WORKDIR /usr/share/nginx/html
RUN rm -f *
COPY --from=build /tmp/build .

# 替换default.conf文件，解决单页面部署后刷新404问题
COPY --from=build /tmp/default.conf /etc/nginx/conf.d/default.conf