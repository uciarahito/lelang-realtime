import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Content from '@/components/Content'
import DetailItem from '@/components/DetailItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/detailitem',
      name: 'DetailItem',
      component: DetailItem
    }
  ]
})
