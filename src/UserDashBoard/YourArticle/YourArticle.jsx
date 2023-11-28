import { MdOutlineRemoveCircleOutline } from "react-icons/md";
import { TbEdit } from "react-icons/tb";

const YourArticle = () => {
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
                                <th>Submite Date</th>
                                <th>Authors</th>
                                <th>Journals Name</th>
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
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                    <button className="btn btn-ghost btn-xs">details</button>
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
export default YourArticle;