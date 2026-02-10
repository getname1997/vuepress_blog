import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Gx',
    description: '',
    Frontmatter:{
        home: true,
    },
    theme: defaultTheme({
        Frontmatter:{
            home: true,
        },
        navbar: [
            {
                text: '主页',
                link: '/',
            },
            {
                text: 'book',
                children: [
                    '/book/甘特图','/book/前端考核','/book/js'
                ]
            },
            {
                text: 'docker',
                children: [
                    '/docker/docker','/docker/docker镜像使用','/docker/docker镜像定制'
                ]
            },
            {
                text: 'node',
                children: [
                    '/node/init','/node/mysql','/node/typeorm','/node/taskScheduling','/node/typeorm一对多注解','/node/sql','/node/fs'
                ]
            },
            {
                text: 'ts',
                children: [
                    '/ts/ts基础','/ts/面试','/ts/rust'
                ]
            },
            {
                text: '机器学习',
                children: [
                    '/machine_learning/1.入门','/machine_learning/2.基础实验','/machine_learning/3.性能公式','/machine_learning/4.线性回归'
                ]
            },
            {
                text: 'python',
                children: [
                    '/python/基础语法'
                ]
            },
            {
                text: 'rust',
                children: [
                    '/rust/基础数据类型','/rust/复合类型','/rust/rust控制流',
                ]
            },
            {
                text: 'vue3',
                children: [
                    '/vue3/v3基础','/vue3/Git'
                ]
            },


        ]

    })
})
