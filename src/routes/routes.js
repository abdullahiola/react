import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Deals = lazy(() => import('../pages/Deals'));
const Store = lazy(() => import('../pages/Store'));
const Water = lazy(() => import('../pages/Water'));
const Beverage = lazy(() => import('../pages/Beverage'));
const CwayLocator = lazy(() => import('../pages/CwayLocator'));
const routes = [

    {
       path:'/',
       component:Home,
       protected:false ,
       exact:true 
    },

    {
        path:'/deals',
        component:Deals,
        protected:false,
     },
     {
      path:'/store',
      component:Store,
      protected:false,
   },
   {
      path:'/water',
      component:Water,
      protected:false,
   },
   {
      path:'/beverage',
      component:Beverage,
      protected:false,
   },
   {
      path:'/cwayLocator',
      component:CwayLocator,
      protected:false,
   }    
]

export default routes;
