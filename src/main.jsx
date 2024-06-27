import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './app/store.js'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import SignUp from './Pages/SignUp.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // children:[
    //   {
    //     path:'/',
    //     element:<Body/>
    //   },
    //   {
    //     path:'/about',
    //     element:<About/>
    //   },
    //   {
    //     path:'/contact',
    //     element:<Contact/>
    //   },
    //   {
    //     path:'/cart',
    //     element:<Cart/>
    //   },
    //   {
    //     path:'/restaurant/:id',
    //     element:<Restaurantmenu/>
      
    //   }
    // ],
    // errorElement:<Error/>
  },
  {
    path: '/signup',
    element: <SignUp />
  }
  
  // {
  //   path: '/shimmer',
  //   element: <ShimmerCards />
  // }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  </Provider>
  
)


