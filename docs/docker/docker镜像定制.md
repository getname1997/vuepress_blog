# docker 镜像定制

## 项目目录新建 Dockerfile 文件

``` dockerfile
# Use an official Node.js runtime as the base image
FROM node:latest as build-stage

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all files to the working directory
COPY . .

# Build the project
RUN npm run build

# Use a lightweight nginx image as the base for the second stage
FROM nginx:stable-alpine as production-stage

# Copy the built files from the previous stage to the nginx public directory 复制文件到nginx目录
COPY --from=build-stage /app/dist /usr/share/nginx/html
 
# Copy the nginx configuration file to the nginx configuration directory 自定义nginx配置文件
COPY umiBlog.conf /etc/nginx/nginx.conf
 
# Expose port 80
#EXPOSE 80

# Start the nginx server 
CMD ["nginx", "-g", "daemon off;"] 

```

## .dockerignore 文件
``` .dockerignore
.idea/
.git/
node_modules/
yarn-error.log
```

## nginx 配置文件
``` umiBlog.conf

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

 server {
   listen 8080;
   index index.html;
   location / {
        root   /usr/share/nginx/html;
        index  index.html;
       try_files $uri $uri/ /index.html;
   }

   location /api/ {
     proxy_pass   http://175.24.115.95:8090/;
   }
 }
}

```
