import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const ArticleStutes = () => {
    return (
        <div className="px-12 py-8 w-3/4">
            <div className="flex items-center space-x-2 bg-[#F46957] py-2 px-4">
                <p className="text-xl text-white"><MdOutlineRemoveCircleOutline /></p>
                <p className="text-[#fff] text-sm font-bold">For more information Please Completed Your Profile</p>
            </div>

            <div className="my-8">
                <h2 className="py-2 px-2 text-base text-[#F46957] font-bold bg-[#f4695715]">Status of your article</h2>

                <div className="grid lg:grid-cols-3 gap-4 my-8">

                    <div className="bg-[#0707070c] text-center py-8 border-t-8 border-[#F46957] rounded-xl">
                        <h2>Submite</h2>
                    </div>

                    <div className="bg-[#0707070c] text-center py-8 border-t-8 border-[#5771f4] rounded-xl">
                        <h2>Under review</h2>
                    </div>

                    <div className="bg-[#0707070c] text-center py-8 border-t-8 border-[#77f457] rounded-xl">
                        <h2>ready to published</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default ArticleStutes;