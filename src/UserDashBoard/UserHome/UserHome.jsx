import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const UserHome = () => {
    return (
        <div className="px-12 py-8 w-3/4">
            <div className="flex items-center space-x-2 bg-[#F46957] py-2 px-4">
                <p className="text-xl text-white"><MdOutlineRemoveCircleOutline /></p>
                <p className="text-[#fff] text-sm font-bold">For more information Please Completed Your Profile</p>
            </div>

            <div className="py-4">
                <h2 className="text-lg font-bold">Mr.Beverly Kracher</h2>
                <p className="font-medium">beverly123@gmail.com</p>
                <p className="font-medium">
                    Mr.Beverly Kracher your join with WEG 11 November 2023
                </p>
            </div>

            <div>
                <h2 className="py-2 px-2 text-base text-[#F46957] font-bold bg-[#f4695715]">Your Activity</h2>

                <div className="grid lg:grid-cols-3 gap-4 my-8">

                    <div className="bg-[#0707070c] text-center py-8 border-t-8 border-[#F46957] rounded-xl">
                        <h2 className="font-bold text-lg">Total Article</h2>
                        <span>02</span>
                    </div>
                    
                    <div className="bg-[#0707070c] text-center py-8 border-t-8 border-[#F46957] rounded-xl">
                        <h2 className="font-bold text-lg">Published Article</h2>
                        <span>02</span>
                    </div>
                    
                    <div className="bg-[#0707070c] text-center py-8 border-t-8 border-[#F46957] rounded-xl">
                        <h2 className="font-bold text-lg">Unpublished Article</h2>
                        <span>0</span>
                    </div>

                </div>
            </div>
        </div>
    );
};
export default UserHome;