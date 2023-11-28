
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
const TermsAndCondition = () => {

    return (

        <div className="px-12 py-8 w-3/4">
            <div className="bg-[#F46957] px-4 py-4">
                <h2 className="text-xl font-bold text-white py-1">Terms and Conditions</h2>
                <p className='font-medium text-sm text-[#ffffff]'>
                    Before submision your article please read carefully the terms and conditions
                </p>
            </div>

            <div className='space-y-2 my-8 cursor-pointer  px-4'>
                <p className='flex items-center space-x-1 font-medium hover:text-[#F46957] duration-300'><span className='text-xl'><IoMdCheckmarkCircleOutline /></span> <span>1st Condition</span></p>
                <p className='flex items-center space-x-1 font-medium hover:text-[#F46957] duration-300'><span className='text-xl'><IoMdCheckmarkCircleOutline /></span> <span>2nd Condition</span></p>
                <p className='flex items-center space-x-1 font-medium hover:text-[#F46957] duration-300'><span className='text-xl'><IoMdCheckmarkCircleOutline /></span> <span>3rd Condition</span></p>
                <p className='flex items-center space-x-1 font-medium hover:text-[#F46957] duration-300'><span className='text-xl'><IoMdCheckmarkCircleOutline /></span> <span>4th Condition</span></p>
                <p className='flex items-center space-x-1 font-medium hover:text-[#F46957] duration-300'><span className='text-xl'><IoMdCheckmarkCircleOutline /></span> <span>5th Condition</span></p>
                <div className="flex items-center space-x-1 py-1 text-[#EF645A]">
                    <input type="checkbox" name="" id="" />
                    <p>I agree this terms and conditions</p>
                </div>

                <button className="px-4 py-2 bg-[#EF645A] text-white font-semibold">
                    <Link to='/userDashBoard/submite'>
                        Submit Article
                    </Link>
                </button>
            </div>


        </div>


    )
};
export default TermsAndCondition;