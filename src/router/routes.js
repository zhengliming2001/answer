export default [
    {
        path: '/',
        // 路由懒加载
        component:()=>import('@/pages/home')
    },
    {
        path: '/item',
        component:()=>import('@/pages/items')
    },
    {
        name:'score',
        path: '/score/:score',
        component:()=>import('@/pages/score')
    }
]