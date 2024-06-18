# docker 镜像使用

## 拉取镜像


``` bash
docker pull [选项] [Docker Registry 地址[:端口号]/]仓库名[:标签]
docker pull ubuntu:18.04
docker pull nginx
```

### 镜像列表

``` bash
docker images ls
```

### 删除镜像

``` bash
 docker image ls
 docker image rm 501
 docker image rm nginx
```

| 选项   | 说明       |
|------|----------|
| -a   | 删除所有镜像   |
| -f   | 强制删除镜像   |
| -q   | 只显示镜像ID  |
