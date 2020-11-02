
import HomeSoftware from '../pages/HomeSoftware'

import NotFound from '../pages/elements/404'

export const routes = [
    {
        path:'/',
        name: 'syGlass VR',
        component: HomeSoftware
    },
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
];