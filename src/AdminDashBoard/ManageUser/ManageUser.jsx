import { FaUserFriends } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import useUsers from "../../Hooks/useUsers";
import Swal from "sweetalert2";

const ManageUser = () => {
    const [users,refetch] = useUsers()
    const handleDelete = user => {

        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'User has been deleted.',
                        'success'
                      )
                }
                refetch()
            })
    }
    return (
        <div className="px-12 py-8 w-3/4">
           <h2 className="py-2 px-4 border font-bold text-sm">Manage All User</h2>

            <div className="my-8">
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead className="font-bold text-white text-[14px]">
                            <tr className="bg-[#EF645A]">
                                <th>No</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className="my-2">
                            {
                                users.map((user,index) => <tr key={user._id}>

                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <th className="space-x-2">
                                    <button className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><FaUserFriends /></button>
                                    <button className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><FaEye /></button>
                                    <button onClick={() => handleDelete(user)} className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><MdDelete /></button>
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
export default ManageUser;


