# VUE训练营——Todo List

> [简易的Todo List-github地址](https://github.com/wangzhengyi/vue-todolist).

------
## 项目截图
![todo-list](http://img.blog.csdn.net/20170419184728637?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd3p5XzE5ODg=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)

------
## 项目技术点

项目比较简单，主要包括：

1. vue-cli
2. vue基本指令
3. vue-router

------
## 关键代码

关键代码均在TodoList.vue中，这里只贴出js相关处理:

```js
<script>
  let store = {
    save (key, value) {
      localStorage.setItem(key, JSON.stringify(value))
    },
    fetch (key) {
      return JSON.parse(localStorage.getItem(key)) || []
    }
  }
  let list = store.fetch('all')
  let filter = {
    all: function (list) {
      return list
    },
    finished: function (list) {
      return list.filter(function (item) {
        return item.isChecked
      })
    },
    unfinished: function () {
      return list.filter(function (item) {
        return !item.isChecked
      })
    }
  }
  export default {
    name: 'todoList',
    data () {
      return {
        todo: '',
        list: list,
        editorTodoItem: null,
        beforeTodoContent: '',
        hash: 'all',
        hashItems: [
          {
            title: '所有任务',
            isActive: true,
            hash: 'all'
          },
          {
            title: '未完成的任务',
            isActive: false,
            hash: 'unfinished'
          },
          {
            title: '完成的任务',
            isActive: false,
            hash: 'finished'
          }
        ]
      }
    },
    methods: {
      addTodo () {
        let item = {title: this.todo, isChecked: false}
        this.list.push(item)
        this.todo = ''
      },
      deleteTodo (index) {
        this.list.splice(index, 1)
      },
      editTodo (item) {
        this.beforeTodoContent = item.title
        this.editorTodoItem = item
      },
      isEditorItem (item) {
        return item === this.editorTodoItem
      },
      editCompleted () {
        this.editorTodoItem = null
      },
      cancelEdit (item) {
        item.title = this.beforeTodoContent
        this.editorTodoItem = null
      },
      handleHash (item) {
        for (let i = 0; i < this.hashItems.length; i++) {
          this.hashItems[i].isActive = false
        }
        item.isActive = true
        this.hash = item.hash
      }
    },
    computed: {
      noCheckedLength: function () {
        let count = 0
        for (let i = 0; i < this.list.length; i++) {
          if (!this.list[i].isChecked) {
            count++
          }
        }
        return count
      },
      filterList: function () {
        return filter[this.hash] ? filter[this.hash](this.list) : this.list
      }
    },
    directives: {
      'focus': {
        update (el, binding) {
          if (binding.value) {
            el.focus()
          }
        }
      }
    },
    watch: {
      list: {
        handler: function () {
          store.save('all', this.list)
        },
        deep: true
      }
    }
  }
</script>
```


-------
## vue-cli脚手架使用

运行如下命令，创建一个名为todolist的vue项目，通过本地8080端口启动服务

``` bash
# install vue-cli
npm install -g vue-cli

# create todo list project
vue init webpack todolist

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

在运行```bash vue init webpack todolist```后，会依次要求输入以下配置内容:

* 项目名称(Project name)
* 项目描述(Project description)
* 项目作者(Author)
* 选择vue构建方式:
    - 运行+编译(Runtime + Compiler)
    - 运行时(Runtime only)
* 是否安装vue-router(Install vue-router)
* 是否使用ESLint(Use ESLint to your code)
    - 标准模式(Standard)
    - Airbnb
    - 自定义模式(none)
* 是否使用Karma+Mocha的单元测试(Setup unit tests with Karma + Mocha)
* 是否使用Nightwatch e2e测试(Setup e2e tests with Nightwatch).

npm install安装完成后，项目目录结构如下：
```text
|-- build                       // 项目构建相关代码
|   |-- build.js                // 生产环境构建代码
|   |-- check-version.js        // 检查npm、node等相关版本
|   |-- dev-client.js           // 热重载相关
|   |-- dev-server.js           // 构建本地服务器
|   |-- utils.js                // 构建工具相关
|   |-- webpack.base.conf.js    // webpack基础配置
|   |-- webpack.dev.conf.js     // webpack开发环境配置
|   |-- webpack.prod.conf.js    // webpack生产环境配置
|-- config                      // 项目开发环境配置
|   |-- dev.env.js              // 开发环境变量
|   |-- index.js                // 项目一些配置变量（例如ProxyTable）
|   |-- prod.env.js             // 生产环境变量
|-- node_modules                // 依赖项目存放目录
|-- src                         // 项目源码目录
|   |-- assets                  // 资源文件目录
|   |-- components              // 组件目录
|   |-- router                  // 路由目录
|   |-- App.vue                 // 页面入口文件
|   |-- main.js                 // 程序入口文件
|-- .babelrc                    // ES6语法编译配置
|-- .editorconfig               // 定义代码格式
|-- .eslintignore               // ESLint检查忽略的文件
|-- .eslistrc.js                // ESLint文件
|-- index.html                  // 项目入口页面
|-- package.json                // 项目配置信息
```
