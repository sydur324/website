import { Outlet } from "react-router-dom";
import TabScrollTop from "../Utilis/TabScrollTop/TabScrollTop";
import AdminNav from "../AdminDashBoard/AdminNav/AdminNav";

const AdminLayout = () => {
    return (
        <div className="lg:flex">
            <TabScrollTop>
                <AdminNav></AdminNav>
                <Outlet></Outlet>
            </TabScrollTop>
        </div>
    );
};

export default AdminLayout;