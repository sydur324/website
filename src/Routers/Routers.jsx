import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/HomePages/Home/Home";
import Journals from "../Pages/JournalsPage/Journals/Journals";
import JournalLayout from "../Layout/JournalLayout";
import EditorialBoard from "../Pages/JournalsDetails/EditorialBoard/EditorialBoard";
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
import SingUp from "../LoginSystem/SingUp/SingUp";
import UserLayout from "../Layout/UserLayout";
import UserDashBoard from "../UserDashBoard/UserDashBoard";
import SubmitJournals from "../AdminDashBoard/SubmitJournals/SubmitJournals";
import YourArticle from "../UserDashBoard/YourArticle/YourArticle";
import TermsAndCondition from "../UserDashBoard/TermsAndCondition/TermsAndCondition";
import ArticleStutes from "../UserDashBoard/ArticleStutes/ArticleStutes";
import AdminLayout from "../Layout/AdminLayout";
import AdminDashBoard from "../AdminDashBoard/AdminDashBoard";
import AddJournals from "../AdminDashBoard/AddJournals/AddJournals";
import ManageJournal from "../AdminDashBoard/ManageJournal/ManageJournal";
import AddArticle from "../AdminDashBoard/AddArticle/AddArticle";
import ManageArticle from "../AdminDashBoard/ManageArticle/ManageArticle";
import ManageUser from "../AdminDashBoard/ManageUser/ManageUser";
import UpdateJournal from "../AdminDashBoard/UpdatePage/UpdateJournal/UpdateJournal";
import UpdateArticle from "../AdminDashBoard/UpdatePage/UpdateArticle/UpdateArticle";
import AddEditor from "../AdminDashBoard/Board/AddEditor/AddEditor";
import UpdateEditor from "../AdminDashBoard/UpdatePage/UpdateEditor/UpdateEditor";
import AddAdviser from "../AdminDashBoard/Board/AddAdviser/AddAdviser";
import UpdateAdviser from "../AdminDashBoard/UpdatePage/UpdateAdviser/UpdateAdviser";
import AddMembers from "../AdminDashBoard/Members/AddMembers/AddMembers";
import ManageMembers from "../AdminDashBoard/ManageMembers/ManageMembers";
import UpdateMembers from "../AdminDashBoard/UpdatePage/UpdateMembers/UpdateMembers";
import AddArchive from "../AdminDashBoard/Archive/AddArchive";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/journals",
        element: <Journals></Journals>,
      },
      {
        path: "/journaldetails/:id",
        element: <JournalsDetailsHome></JournalsDetailsHome>
      },
      {
        path: "/Education",
        element: <EducationPage></EducationPage>,
      },
      {
        path: "/research",
        element: <ResearchPage></ResearchPage>
      },
      {
        path: "/detailsRearch",
        element: <ResearchDetails></ResearchDetails>
      },
      {
        path: "/traingpage",
        element: <TrainingPage></TrainingPage>
      },
      {
        path: "/teamPage",
        element: <TeamPage></TeamPage>
      },
      {
        path: "/contact",
        element: <ContactPage></ContactPage>
      },

    ]
  },
  {
    path: "/journal",
    element: <JournalLayout></JournalLayout>,
    children: [

      {
        path: "/journal/editorialBoard",
        element: <EditorialBoard></EditorialBoard>
      },
      {
        path: "/journal/policy",
        element: <JournalsPolice></JournalsPolice>
      },
      {
        path: "/journal/faqpage",
        element: <FaqPage></FaqPage>
      },
      {
        path: "/journal/indexing",
        element: <JournalIndex></JournalIndex>
      },
      {
        path: "/journal/contact",
        element: <ContactPage></ContactPage>
      },
      {
        path: "/journal/news",
        element: <JournalsNews></JournalsNews>
      },
      {
        path: "/journal/subscribe",
        element: <JournalSubscribe></JournalSubscribe>
      }

    ],


  },

  {
    path: "/userDashBoard",
    element: <UserLayout></UserLayout>,
    children: [
      {
        path: '/userDashBoard',
        element: <UserDashBoard></UserDashBoard>
      },
      {
        path: '/userDashBoard/submite',
        element: <SubmitJournals></SubmitJournals>
      },
      {
        path: '/userDashBoard/trems&condition',
        element: <TermsAndCondition></TermsAndCondition>
      },
      {
        path: '/userDashBoard/yourarticle',
        element: <YourArticle></YourArticle>
      },
      {
        path: '/userDashBoard/ariticleStutes',
        element: <ArticleStutes></ArticleStutes>
      }
    ]
  },

  {
    path: "/adminDashBoard",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "/adminDashBoard",
        element: <AdminDashBoard></AdminDashBoard>
      },
      {
        path: "/adminDashBoard/addjournals",
        element: <AddJournals></AddJournals>
      },
      {
        path: "/adminDashBoard/updatejournal/:id",
        element: <UpdateJournal></UpdateJournal>
      },
      {
        path: "/adminDashBoard/managejournals",
        element: <ManageJournal></ManageJournal>
      },
      {
        path: "/adminDashBoard/addarticle",
        element: <AddArticle></AddArticle>
      },
      {
        path: "/adminDashBoard/managearticle",
        element: <ManageArticle></ManageArticle>
      },
      {
        path: "/adminDashBoard/updatearticle/:id",
        element: <UpdateArticle></UpdateArticle>
      },
      {
        path: "/adminDashBoard/manageuser",
        element: <ManageUser></ManageUser>
      },
      {
        path: "/adminDashBoard/addormanageEdotor",
        element: <AddEditor></AddEditor>
      },
      {
        path: "/adminDashBoard/updateeditor/:id",
        element: <UpdateEditor></UpdateEditor>
      },
      {
        path: "/adminDashBoard/addormanageAdvaser",
        element: <AddAdviser></AddAdviser>
      },
      {
        path: "/adminDashBoard/updateadviser/:id",
        element: <UpdateAdviser></UpdateAdviser>
      },
      {
        path: "/adminDashBoard/addmembers",
        element: <AddMembers></AddMembers>
      },
      {
        path: "/adminDashBoard/managemenbers",
        element: <ManageMembers></ManageMembers>
      },
      {
        path: "/adminDashBoard/updatemember/:id",
        element: <UpdateMembers></UpdateMembers>
      },
      {
        path: "/adminDashBoard/archive",
        element: <AddArchive></AddArchive>
      },
    ]
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/signup",
    element: <SingUp></SingUp>
  },
]);