import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '../pages/TodoList.vue'
import SelectPage from '../pages/SelectPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'todolist',
      component: TodoList
    },
    {
      path: '/select',
      name: 'select',
      component: SelectPage
    },
    {
      path: '*',
      component: TodoList
    }
  ]
})
