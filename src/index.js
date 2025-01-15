import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Components/Pages/About';
import { Route } from 'react-router-dom';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Body from './Components/Body';
import Contact from './Components/Pages/Contact';
import RestaurantMenu from './Components/RestaurantMenu';
import { lazy } from 'react';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import Store from './Components/Utilities/ReduxStore';
import Shimmer from './Components/Utilities/Shimmer';
import Login from './Components/Login';
const Grocery = lazy(()=>import('./Components/Grocery'))
const routelayout = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/login',element:<Login/>
            },
            {
                path:'/',element:<Body/>
            },
            {
                path:'/about',element:<About/>
            },
            {
                path:'/contact',element:<Contact/>
            },
            {
                path:'/home',element:<Body/>
            },
            {
                path:'/home',element:<Body/>
            },
            {
                path:'/resmenu/*',
                element:<RestaurantMenu/>
            },
            {
                path:'/grocey',
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            }
    
        ]
    }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={Store}><RouterProvider router={routelayout} /></Provider>);

