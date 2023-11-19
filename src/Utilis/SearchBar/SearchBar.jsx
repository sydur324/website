import { CiSearch } from 'react-icons/ci';
import './SearchBar.css'

import { HiOutlineXMark } from "react-icons/hi2";


const SearchBar = () => {


    return (
        <div className='xl:px-80 lg:px-40 md:px-14 sm:px-12 px-12 py-8'>
            <div className='w-full flex items-center gap-4'>
                <input className='w-full rounded border-[#ffffffa2] py-2 outline-none px-4 border bg-transparent' type="text" placeholder="Find a journal" />
                <button className='text-2xl rounded  py-2 px-2 bg-[#F46957]
                 text-white hover:bg-[#1B577F] duration-300
                ' type='submit'><CiSearch></CiSearch></button>
            </div>
        </div>
    );
};

export default SearchBar;