// 引入vue
import Vue from "vue";
// 引入vuex
import Vuex from 'vuex';
// 使用vuex
Vue.use(Vuex);
// 引入子仓库
import item from './item'
// 向外暴露仓库
export default new Vuex.Store({
    // 模块化
    modules: {
        item
    }
})