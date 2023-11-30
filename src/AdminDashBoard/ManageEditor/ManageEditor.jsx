import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import useEditor from "../../Hooks/useEditor";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const ManageEditor = () => {
    const [editors, refetch] = useEditor()

    const handleDelete = editor => {

        fetch(`http://localhost:5000/editors/${editor._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }
    return (
        <div className="">
            <div className="py-2">
                <h2 className="py-2 px-4 border font-bold text-sm">Manage All Editor</h2>

                <div className="my-8">
                    <div className="overflow-x-auto">
                        <table className="table text-center">

                            <thead className="font-bold text-white text-[14px]">
                                <tr className="bg-[#EF645A]">
                                    <th>No:</th>
                                    <th>Name</th>
                                    <th>Information</th>
                                    <th>Date</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody className="my-2">
                                {
                                    editors.map((editor, index) => <tr key={editor._id}>

                                        <td>{index + 1}</td>
                                        <td>{editor.editor}</td>
                                        <td>{editor.information}</td>
                                        <td>{editor.date}</td>
                                        <th className="space-x-2">
                                        <Link to={`/adminDashBoard/updateeditor/${editor._id}`}>
                                            <button className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><FaRegEdit /></button>
                                        </Link>
                                            <button onClick={() => handleDelete(editor)} className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><MdDelete /></button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>


                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ManageEditor;