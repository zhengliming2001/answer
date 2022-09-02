import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 引入样式初始化
import './style/common.less'
// 引入全局组件
import ItemContainer from './components/itemContainer'
// 注册全局组件
Vue.component(ItemContainer.name, ItemContainer);

// 引入router
import router from '@/router'
// 引入store
import store from './store'
const vm = new Vue({
  // 注册路由
  router,
  // 注册store
  store,
  render: h => h(App),
}).$mount('#app')