import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import Journals from "../Pages/JournalsPage/Journals/Journals";

  
export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/journals",
          element:<Journals></Journals>,
        }
      ]
    },
  ]);