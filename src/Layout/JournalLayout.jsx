import { Outlet } from "react-router-dom";
import JournalNav from "../Pages/JournalsDetails/JournalNav/JournalNav";
import TabScrollTop from "../Utilis/TabScrollTop/TabScrollTop";
import Footer from "../Shared/Footer/Footer";
import Copyright from "../Shared/Copyright/Copyright";

const JournalLayout = () => {

    return (
        <div>

            <TabScrollTop>
                <JournalNav></JournalNav>
                <Outlet></Outlet>
                <Footer></Footer>
                <Copyright></Copyright>
            </TabScrollTop>
        </div>
    );
};
export default JournalLayout;