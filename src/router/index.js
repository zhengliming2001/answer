// 引入vue
import Vue from "vue";
// 引入vue-router
import VueRouter from "vue-router";
// 使用Vue-router
Vue.use(VueRouter);
// 引入路由规则
import routes from './routes'

const router = new VueRouter({
    // 注册路由规则
    routes
})

// 向外暴露
export default router