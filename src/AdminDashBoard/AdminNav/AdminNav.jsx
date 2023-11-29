import { Link, NavLink } from "react-router-dom";
import userImg from '../../assets/image/userImg.jpg'
import { FaHome } from "react-icons/fa";
import { RiFolderUploadFill } from "react-icons/ri";
import { MdArticle } from "react-icons/md";
import { GiConvergenceTarget } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdLogout } from "react-icons/md";

const AdminNav = () => {
    const adminNavLink = [
        { id: 1, name: "Admin Home", to: "/adminDashBoard", icon: <FaHome /> },
        { id: 2, name: "Add Journals", to: "/adminDashBoard/addjournals", icon: <RiFolderUploadFill /> },
        { id: 2, name: "Manage Journals", to: "/adminDashBoard/managejournals", icon: <MdArticle /> },
        { id: 2, name: "Add Article", to: "/adminDashBoard/addarticle", icon: <GiConvergenceTarget /> },
        { id: 2, name: "Manage Article", to: "/adminDashBoard/managearticle", icon: <IoSettingsSharp /> },
        { id: 2, name: "Manage User", to: "/adminDashBoard/manageuser", icon: <IoSettingsSharp /> },
        { id: 2, name: "Add & Manage Editorial", to: "", icon: <IoSettingsSharp /> },
        { id: 2, name: "Add & Manage Advisory", to: "", icon: <IoSettingsSharp /> },
        { id: 2, name: "Add Member", to: "", icon: <IoSettingsSharp /> },
        { id: 2, name: "Manage Member", to: "", icon: <IoSettingsSharp /> },
    ]

    const commonLink = [
        { id: 1, name: "Home", to: "/", icon: <FaHome /> },
        { id: 2, name: "Log Out", to: "", icon: <MdLogout /> },

    ]

    return (
        <div className="bg-[#1B577F] lg:w-1/5 w-full lg:h-full  relative">

            <div className="flex items-center justify-center flex-col text-center py-4 mt-4 border-b border-[#ffffff67]">
                <div className="w-full flex items-center justify-center">
                    <img className="rounded-full w-1/3 border p-2" src={userImg} alt="" />
                </div>
                <div>
                    <h2 className="text-[#fff] text-xl font-bold pt-2">WEG Admin</h2>
                    <p className="py-1 font-medium text-[#ffffffb8]">weg6060@gmail.com</p>
                </div>
            </div>
            <div className='py-6'>
                {
                    adminNavLink.map(nav => <li className='list-none flex items-center lg:items-start justify-center flex-col hover:bg-[#F46957]  border-b border-[#fffdfd45]' key={nav.id}>

                        <Link to={nav.to}>
                            <div className="">
                                <p className="flex  items-center  space-x-2 px-6 py-3  text-white">
                                    <span className="text-xl">{nav.icon}</span>
                                    <span>{nav.name}</span>
                                </p>
                            </div>
                        </Link>

                    </li>)
                }

            </div>

            <div className="bg-[#f8f6f60b]  py-8 w-full group">
                {

                    commonLink.map(nav => <li className='list-none hover:bg-[#F46957]  group-hover:text-[#fff] border-b border-[#fffdfd45]' key={nav.id}>

                        <Link to={nav.to}>
                            <p className="flex items-center  space-x-2 px-6 py-3 duration-300">
                                <span>{nav.icon}</span>
                                <span>{nav.name}</span>
                            </p>
                        </Link>

                    </li>)


                }
            </div>
        </div>
    );
};
export default AdminNav;