import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

import useMembers from "../../Hooks/useMembers";
import { Link } from "react-router-dom";
const ManageMembers = () => {

    const [members, refetch] = useMembers()

    const handleDelete = member => {

        fetch(`http://localhost:5000/members/${member._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }
    return (
        <div className="px-12 py-8 w-4/5">
            <h2 className="py-2 px-4 border font-bold text-sm">Manage All Members</h2>

            <div className="my-8">
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead className="font-bold text-white text-[14px]">
                            <tr className="bg-[#EF645A]">
                                <th>No</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Date</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                members.map((member, index) => <tr key={member._id}>
                                    <td>{index + 1}</td>
                                    <td>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={member.image} alt="" />
                                            </div>
                                        </div>


                                    </td>
                                    <td>{member.name}</td>
                                    <td>{member.designation}</td>
                                    <td>{member.date}</td>
                                    <th className="space-x-2">

                                    <Link to={`/adminDashBoard/updatemember/${member._id}`}>
                                            <button className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><FaRegEdit /></button>
                                        </Link>

                                        <button onClick={() => handleDelete(member)} className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><MdDelete /></button>
                                    </th>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};
export default ManageMembers;