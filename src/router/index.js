import Vue from 'vue'
import Router from 'vue-router'

// import menu from '@/components/menu'
import HomeItem from '@/components/HomeItem'
import AboutItem from '@/components/AboutItem'
import WorksItem from '@/components/WorksItem'
import ContactItem from '@/components/ContactItem'

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
    }

  ]
})
