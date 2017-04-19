import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../components/TodoList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: TodoList
    }
  ]
})
