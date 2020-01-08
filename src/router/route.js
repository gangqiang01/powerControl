
import timerSwitch from "../components/powerControl/powerControl"

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
        name: 'main',
        component: main,
        children: childRoute,
        redirect:'/main/powerControl'    
    },
    {
        path: '*',
        redirect:'/main/powerControl'
    }
    
]

export default route