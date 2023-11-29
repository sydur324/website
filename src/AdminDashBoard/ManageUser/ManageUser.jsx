import { FaUserFriends } from "react-icons/fa";
import { MdDelete, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const ManageUser = () => {
    return (
        <div className="px-12 py-8 w-3/4">
           <h2 className="py-2 px-4 border font-bold text-sm">Manage All Article</h2>

            <div className="my-8">
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead className="font-bold text-white text-[14px]">
                            <tr className="bg-[#EF645A]">
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className="my-2">
                            {/* row 1 */}
                            <tr className=" my-2">

                                <td>
                                    <div className="font-bold">Hart Hagerty</div>
                                </td>
                                <td> Zemlak, Daniel and Leannon</td>
                                <td>Purple</td>
                                <td>Journal</td>
                                <th className="space-x-2">
                                    <button className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><FaUserFriends /></button>
                                    <button className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><MdDelete /></button>
                                </th>
                            </tr>
                            <tr className="">

                                <td>
                                    <div className="font-bold">Hart Hagerty</div>
                                </td>
                                <td> Zemlak, Daniel and Leannon</td>
                                <td>Purple</td>
                                <td>Journal</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};
export default ManageUser;


