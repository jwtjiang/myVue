/* eslint-disable no-unused-vars */
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import MyFirstVue from '@/components/MyFirstVue';
import cue from "@/components/cue";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyFirstVue',
      component: MyFirstVue,
      children:[
        {
          path: '/cue',
          name: 'vueRouter',
          component: cue
        }
      ]
    },
  ]
})
