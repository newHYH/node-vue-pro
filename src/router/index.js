import Vue from 'vue'
import Router from 'vue-router'
import addUser from '@/components/addUser'
import userList from '@/components/userList'
import updateUser from '@/components/updateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'userList',
      component: userList
    },
    {
      path: '/add',
      name: 'addUser',
      component: addUser
    },
    {
      path: '/users',
      name: 'userList',
      component: userList
    },
    {
      path: '/update/:id',
      name: 'updateUser',
      component: updateUser
    },
  ]
})
