import { FaRegEdit } from "react-icons/fa";
import { MdDelete, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import useArticle from "../../Hooks/useArticle";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageArticle = () => {

    const [articles, refetch] = useArticle()

    const handleDelete = article => {

        fetch(`http://localhost:5000/articles/${article._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    Swal.fire(
                        'Deleted!',
                        'Article has been deleted.',
                        'success'
                      )
                }
                refetch()
            })
    }
    return (
        <div className="px-12 py-8 w-3/4">
            <h2 className="py-2 px-4 border font-bold text-sm">Manage All Article</h2>

            <div className="my-8">
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead className="font-bold text-white text-[14px]">
                            <tr className="bg-[#EF645A]">
                                <th>Title</th>
                                <th>Submite Date</th>
                                <th>Authors</th>
                                <th>Journals Name</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className="my-2">
                            {
                                articles.map((article, index) => <tr key={article._id}>

                                    <td>
                                        <div className="font-bold">{article.title}</div>
                                    </td>
                                    <td>{article.firstAuthor}</td>
                                    <td><td>{article.firstAuthor}</td></td>
                                    <td>Journal</td>
                                    <th className="space-x-2">
                                        <Link to={`/adminDashBoard/updatearticle/${article._id}`}>
                                            <button className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><FaRegEdit /></button>
                                        </Link>
                                        <button onClick={() => handleDelete(article)} className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><MdDelete /></button>
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
export default ManageArticle;