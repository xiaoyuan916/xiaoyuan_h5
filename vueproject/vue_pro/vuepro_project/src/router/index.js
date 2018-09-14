import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import Typography from '@/components/Typography'
import Icon from '@/components/Icon'
import DropDown from '@/components/DropDown'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HomePage',
      component: HomePage
    },
    {
      path: '/Typography',
      component: Typography
    },
    {
      path: '/Icon',
      component: Icon
    },
    {
      path: '/DropDown',
      component: DropDown
    },
  ]
})
