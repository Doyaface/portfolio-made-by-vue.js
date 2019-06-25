import Vue from 'vue'
import Router from 'vue-router'

// import menu from '@/components/menu'
import HomeItem from '@/components/HomeItem'
import AboutItem from '@/components/AboutItem'
import WorksItem from '@/components/WorksItem'
import ContactItem from '@/components/ContactItem'
import page1 from '@/components/page1'
import page2 from '@/components/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeItem
    },
    {
      path: '/AboutItem',
      component: AboutItem
    },
    {
      path: '/WorksItem',
      component: WorksItem
    },
    {
      path: '/ContactItem',
      component: ContactItem
    },
    {
      path: '/page1',
      component: page1
    },
    {
      path: '/page2',
      component: page2
    }
  ]
})
