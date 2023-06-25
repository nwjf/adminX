# adminX

### 技术说明
- vue3
- element plus
- typescript
- scss
- vite

### 介绍
基于 Vue3.x setup + TypeScript + Vite + Pinia + Element Plus等流行技术栈的**轻量**后台管理系统，自适应多端、自动注册路由、无限子级权限管理等，无需授权即可免费商用，希望能帮助大家实现快速开发。

### 项目结构
```shell
|-- public  # 静态资源目录
|-- dist    # 构建输出目录
|-- src     # 源代码目录
|   |-- assets      # 静态资源目录
|   |-- components  # 组件目录
|   |-- layout      # 布局目录
|   |-- router      # 路由目录
|   |-- store       # 状态库
|   |-- style       # 样式文件目录
|   |-- theme       # 主题配置目录
|   |-- app.vue     # 根组件
|   |-- main.ts     # 入口文件
|-- .env            # 环境变量
|-- index.html      # 首页
|-- package.json    # 项目配置文件
|-- tsconfig.json   # ts 配置文件
|-- vite.config.ts  # vite配置文件
```

### 界面展示
<img style="display: block; width: 100%;" src="https://gdc.kg.qq.com/6008/5ce13e5d06e754b5c88f62df425d54f1.png">


### document
- [vue3 document](https://cn.vuejs.org/api/)
- [element plus document](https://element-plus.gitee.io/zh-CN/)
- [vite document](https://vitejs.cn/)
- [pinia document](https://pinia.vuejs.org/zh/)
- [vue router document](https://router.vuejs.org/zh/)

### script
```shell
# run
npm run dev
# build
npm run build
# preview
npm run preview
```

### git 提交规范
- **feat** 增加新功能
- **fix** 修复问题/BUG
- **style** 代码风格相关无影响运行结果的
- **perf** 优化/性能提升
- **refactor** 重构
- **revert** 撤销修改
- **test** 测试相关
- **docs** 文档/注释
- **chore** 依赖更新/脚手架配置修改等
- **workflow** 工作流改进
- **ci** 持续集成
- **types** 类型定义文件更改
- **wip** 开发中



https://demo.buildadmin.com/#/admin/crud/crud