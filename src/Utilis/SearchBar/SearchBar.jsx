import { CiSearch } from 'react-icons/ci';
import './SearchBar.css'

const SearchBar = () => {
    return (
        <div className="top-0 left-0 fixed w-full h-screen bg-[#E5E5E5] z-50">
            <div className='search flex justify-center items-center py-60 w-full'>
                <div className='w-full'>
                    <form className='w-full lg:px-80 md:px-40 sm:px-20 px-10 flex items-center space-x-2'>
                        <input className='w-full px-4 py-4 border outline-none' type="text" placeholder="Find a journal" />
                        <button className='text-2xl  px-4 py-4 border bg-[#005581] text-white  hover:bg-[#081839] duration-300 cursor-pointer' type='submit'><CiSearch></CiSearch></button>
                    </form>
                    <div className='right-40 absolute'>
                        <p>Advanced search...</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SearchBar;