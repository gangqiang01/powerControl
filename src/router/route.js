
import timerSwitch from "../components/powerControl/powerControl"
import login from "../components/account/login"

import main from '@/components/home'

let childRoute = [

    {
        path: 'powerControl',
        component: timerSwitch,
        name: 'powerControl',
        meta: {
            menuname: "powerControl"
        }
    },
    {
        path: '*',
        redirect:'powerControl'
    }
]
let route = [

    {
        path: '/',
        component: login,
        name: 'login',
        beforeEnter: (to, from, next) => {
            _g.doBeforeLoginout();
            next();
        }
    },
    {
        path: '/main',
        name: 'main',
        component: main,
        beforeEnter: (to, from, next) => {
            if(cookie.checkCookie("powerControlToken")){
                next()
            }else{
                _g.doBeforeLoginout();
                next("/")
            }
        },
        children: childRoute,
        redirect:'/main/powerControl'    
    },
    {
        path: '*',
        redirect:'/main/powerControl'
    }
    
]

export default route