import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import Journals from "../Pages/JournalsPage/Journals/Journals";
import JournalLayout from "../Layout/JournalLayout";
import EditorialBoard from "../Pages/JournalsDetails/JournalFixedContent/EditorialBoard/EditorialBoard";
import FaqPage from "../Pages/JournalsDetails/JournalFixedContent/FaqPage/FaqPage";
import JournalsDetailsHome from "../Pages/JournalsDetails/JournalsDetailsHome/JournalsDetailsHome";


  
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
    {
      path: "/journal",
      element:<JournalLayout></JournalLayout>,
      children:[
        {
          path:"/journal",
          element:<JournalsDetailsHome></JournalsDetailsHome>
        },
        {
          path:"/journal/editorialBoard",
          element:<EditorialBoard></EditorialBoard>
        },
        {
          path:"/journal/faqpage",
          element:<FaqPage></FaqPage>
        },
      ]
    }
  ]);