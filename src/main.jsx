import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom"; 
import Home from './Pages/Home.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import RootLayout from './Layout/RootLayout.jsx';
import PlantDetails from './Pages/PlantDetails.jsx';
import axios from 'axios';
import LoadingSpinner from './Components/LoadingSpinner.jsx';


const router = createBrowserRouter([
  {
    path:'/',
    Component: RootLayout,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children:[
      {
    index:true ,
    
    Component: Home,
   
    loader:()=> fetch('https://openapi.programming-hero.com/api/plants')
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
  {
    path:'/plant-details/:id',
    Component: PlantDetails,
    loader: ({params}) => axios(`https://openapi.programming-hero.com/api/plant/${params.id}`)
  },
    ]
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)


