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
import JournalsPolice from "../Pages/JournalsDetails/JournalsPolice/JournalsPolice";
import JournalIndex from "../Pages/JournalsDetails/JournalIndex/JournalIndex";
import ContactPage from "../Pages/ContactPage/ContactPage";
import JournalsNews from "../Pages/JournalsDetails/JournalsNews/JournalsNews";
import JournalSubscribe from "../Pages/JournalsDetails/JournalSubscribe/JournalSubscribe";
import EducationPage from "../Pages/EducationPage/EducationPage";
import ResearchPage from "../Pages/ResearchPage/ResearchPage";
import ResearchDetails from "../Pages/ResearchPage/ResearchDetails/ResearchDetails";
import TrainingPage from "../Pages/TrainingPage/TrainingPage";
import TeamPage from "../Pages/TeamPage/TeamPage";
import Login from "../LoginSystem/Login/Login";


  
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
        },
        {
          path:"/Education",
          element:<EducationPage></EducationPage>,
        },
        {
          path:"/research",
          element:<ResearchPage></ResearchPage>
        },
        {
          path:"/detailsRearch",
          element:<ResearchDetails></ResearchDetails>
        },
        {
          path:"/traingpage",
          element:<TrainingPage></TrainingPage>
        },
        {
          path:"/teamPage",
          element:<TeamPage></TeamPage>
        },
        {
          path:"/contact",
          element:<ContactPage></ContactPage>
        },
        {
          path:"/login",
          element:<Login></Login>
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
          path:"/journal/policy",
          element:<JournalsPolice></JournalsPolice>
        },
        {
          path:"/journal/faqpage",
          element:<FaqPage></FaqPage>
        },
        {
          path:"/journal/indexing",
          element:<JournalIndex></JournalIndex>
        },
        {
          path:"/journal/contact",
          element:<ContactPage></ContactPage>
        },
        {
          path:"/journal/news",
          element:<JournalsNews></JournalsNews>
        },
        {
          path:"/journal/subscribe",
          element:<JournalSubscribe></JournalSubscribe>
        },
        {
          path:"/journal/login",
          element:<Login></Login>
        }
      ]
    }
  ]);