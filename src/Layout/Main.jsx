import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import Copyright from "../Shared/Copyright/Copyright";
import TabScrollTop from "../Utilis/TabScrollTop/TabScrollTop";


const Main = () => {
    return (
        <div>
            <TabScrollTop>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
                <Copyright></Copyright>
            </TabScrollTop>
        </div>
    );
};

export default Main;