# DOCKER  初始化

## 安装 init

### windows
``` bash 
 winget install Docker.DockerDesktop

```

### linux
``` bash
// 卸载旧版本[docker镜像使用.md](docker%BE%B5%CF%F1%CA%B9%D3%C3.md)
sudo yum remove docker \[docker镜像使用.md](docker%BE%B5%CF%F1%CA%B9%D3%C3.md)
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine

// 安装依赖
sudo yum install -y yum-utils
// 更换源
sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
sudo sed -i 's/download.docker.com/mirrors.aliyun.com\/docker-ce/g' /etc/yum.repos.d/docker-ce.repo
sudo yum install docker-ce docker-ce-cli containerd.io

// 防火墙
firewall-cmd --permanent --zone=trusted --add-interface=docker0
firewall-cmd --reload

// 启动
sudo systemctl start docker
```

