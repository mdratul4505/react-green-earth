import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom"; 
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import RootLayout from './Layout/RootLayout.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    Component: RootLayout,
    children:[
      {
    index:true ,
    
    Component: Home,
  },
  {
    
    path:'/home',
    Component: Home,
  },

  {
    path:'/contact',
    Component: Contact,
  },
  {
    path:'/about',
    Component: About,
  },
    ]
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


