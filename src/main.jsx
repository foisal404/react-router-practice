import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Resturent from './components/Resturent/Resturent';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import DetailsCard from './components/DetailsCard/DetailsCard';
import MealDB from './components/MealDB/MealDB';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/resrturent",
        element:<Resturent></Resturent>,
        loader:()=> fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b") ,
      },
      {
        path:"/card/:cardId",
        element:<DetailsCard></DetailsCard>,
        loader :({params}) =>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.cardId}`)
      },
      {
        path:"/mealdb",
        element:<MealDB></MealDB>
      }

    ]
    
  },
  {
    path:"*",
    element: <Error></Error>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
