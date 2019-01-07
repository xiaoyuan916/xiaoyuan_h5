import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import Typography from '@/components/Typography'
import Icon from '@/components/Icon'
import DropDown from '@/components/DropDown'
import JsToJava from '@/components/JsToJava'
import ObtainData from '@/components/ObtainData'
import ObtainUersData from '@/components/ObtainUersData'
import UsingReusable from '@/components/UsingReusable'
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
    {
      path: '/JsToJava',
      component: JsToJava
    },
    {
      path: '/ObtainData',
      component: ObtainData
    },
    {
      path: '/ObtainUersData',
      component: ObtainUersData
    },
    {
      path: '/UsingReusable',
      component: UsingReusable
    },
  ]
})
