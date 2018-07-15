import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import headNav from '../components/common/headNav'
import newsList from '../components/news/newslist'
import photoList from '../components/photoshare/photolist'
import shopList from '../components/shop/shoplist'
import Map from '../components/map/map'
import weaTher from '../components/weather/weather'
import WeatTher from '../components/common/weather'
import shopCart from '../components/shopcart/shopcart'
import bannerDetails from '../components/banner/bannardetails'
import newsDetails from '../components/news/newsdetails'
import photoDetails from '../components/photoshare/photo'
import shopDetails from '../components/shop/shopdetails'
// 安装全局组件
Vue.component('headNav',headNav)
Vue.component('dateWeather',WeatTher)

// 数据请求
import Axios from 'axios'
Axios.defaults.baseURL = 'http://47.96.29.109/vueProject/'
Vue.prototype.$ajax = Axios
Vue.prototype.dataURL = function (file,title,id) {
    id = (id === undefined)?'':id;
    return file+'?title='+title+id;
}
import $ from 'jquery'
Vue.prototype.$jq = $;


// mint-ui组件库
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint)


import Vue2Preview from 'vue2-preview'
Vue.use(Vue2Preview)


Vue.use(Router)

export default new Router({
    linkActiveClass:'rlActive',
    routes: [
        {
            path:'/',
            redirect:{name:'index'}
        },
        {
            path: '/ ',
            name:'index',
            component: Index
        },
        {
            name:'banner.details',
            path:'/banner/details',
            component:bannerDetails
        },
        {
            name:'news.list',
            path:'/news/list',
            component:newsList
        },
        {
            name:'news.details',
            path:'/news/list/newsdetails',
            component:newsDetails
        },
        {
            name:'photo.list',
            path:'/photo/list',
            component:photoList
        },
        {
            name:'photo.details',
            path:'/photo/list/details',
            component:photoDetails
        },
        {
            name:'shop.list',
            path:'/shop/list',
            component:shopList
        },
        {
            name:'shop.shopdetails',
            path:'/shop/list/shopdetails',
            component:shopDetails
        },
        {
            name:'map',
            path:'/map',
            component:Map
        },
        {
            name:'weather',
            path:'/weather',
            component:weaTher
        },
        {
            name:'shopcart',
            path:'/shopcart',
            component:shopCart
        }
    ]
})
