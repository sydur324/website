import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import useJournals from "../../Hooks/useJournals";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const ManageJournal = () => {

    const [journalls, refetch] = useJournals()

    const handleDelete = journall => {

        fetch(`http://localhost:5000/journals/${journall._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Journal has been deleted.',
                        'success'
                      )
                }
                refetch()
            })
    }
    return (
        <div className="px-12 py-8 w-4/5">
            <h2 className="py-2 px-4 border font-bold text-sm">Manage All Journals</h2>

            <div className="my-8">
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead className="font-bold text-white text-[14px]">
                            <tr className="bg-[#EF645A]">
                                <th>No</th>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                journalls.map((journall, index) => <tr key={journall._id}>
                                    <td>{index + 1}</td>
                                    <td>

                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={journall.image} alt="" />
                                            </div>
                                        </div>


                                    </td>
                                    <td>{journall.title}</td>
                                    <td>{journall.category}</td>
                                    <td>{journall.pdate}</td>
                                    <th className="space-x-2">
                                        <Link to={`/adminDashBoard/updatejournal/${journall._id}`}>
                                            <button className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><FaRegEdit /></button>
                                        </Link>
                                        <button onClick={() => handleDelete(journall)} className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><MdDelete /></button>
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
export default ManageJournal;