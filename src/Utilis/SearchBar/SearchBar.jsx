import { CiSearch } from 'react-icons/ci';
import './SearchBar.css'
import { useState } from 'react';
import { HiOutlineXMark } from "react-icons/hi2";


const SearchBar = () => {
    const { searchClose, setSearchClose } = useState(false)
    const handleClose = () => {
        setSearchClose(!searchClose)
    }

    return (
        <div>
            {
                searchClose ?
                    <>
                        <div className="top-0 left-0 fixed w-full h-screen bg-[#E5E5E5] z-50">
                            <div className='search flex justify-center items-center py-60 w-full'>
                                <div className='w-full'>
                                    <div onClick={handleClose} className='top-10 right-20 absolute text-2xl px-2 py-2 bg-[#005581] text-white  hover:bg-[#081839] duration-300 cursor-pointer'>
                                        <p><HiOutlineXMark /></p>
                                    </div>
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
                    </>
                    :
                    <></>
            }

        </div>
    );
};

export default SearchBar;