import { Outlet } from "react-router-dom";
import TabScrollTop from "../Utilis/TabScrollTop/TabScrollTop";
import UserNav from "../UserDashBoard/UserNav/UserNav";

const UserLayout = () => {
    return (
        <div className="lg:flex">
            <TabScrollTop>
                <UserNav></UserNav>
                <Outlet></Outlet>
            </TabScrollTop>
        </div>
    );
};

export default UserLayout;