import { MdDelete, MdOutlineRemoveCircleOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";
import useUserArticle from "../../Hooks/useUserArticle";
import { FaRegEdit } from "react-icons/fa";

const YourArticle = () => {
    const [userArticle, refetch] = useUserArticle()

    // const handleDelete = article => {

    //     fetch(`http://localhost:5000/userarticles/${article._id}`, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data)
    //             refetch()
    //         })
    // }
    return (
        <div className="px-12 py-8 w-3/4">
            <div className="flex items-center space-x-2 bg-[#F46957] py-2 px-4">
                <p className="text-xl text-white"><MdOutlineRemoveCircleOutline /></p>
                <p className="text-[#fff] text-sm font-bold">For View or Edit Your Article Please Completed Your Profile</p>
            </div>

            <div className="my-8">
                <div className="overflow-x-auto">
                    <table className="table text-center">
                        {/* head */}
                        <thead className="font-bold text-white text-[14px]">
                            <tr className="bg-[#EF645A]">
                                <th>Title</th>
                                <th>Authors</th>
                                <th>Number</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className="my-2">
                            {
                                userArticle.map((article, index) => <tr key={article._index}>

                                    <td>
                                        <div className="font-bold">{article.title}</div>
                                    </td>
                                    <td>{article.firstAuthor}</td>
                                    <td>{article.cNumber}</td>

                                    <th className="space-x-2">

                                        <button className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><FaRegEdit /></button>

                                        <button className="py-2 px-2 bg-[#EA5F5C] hover:bg-[#22587E] duration-300 text-white rounded-md"><MdDelete /></button>
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
export default YourArticle;