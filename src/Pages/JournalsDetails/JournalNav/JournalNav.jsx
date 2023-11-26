import { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { HiOutlineMenu } from "react-icons/hi";

import { Link } from 'react-router-dom';
const JournalNav = () => {

    const navLink = [
        { id: 1, name: "Home", to: "/journal" },
        { id: 2, name: "Journals", to: "/journals" },
        { id: 3, name: "Policies", to: "/journal/policy" },
        { id: 4, name: "Subscription", to: "/journal/subscribe" },
        { id: 5, name: "FAQ", to: "/journal/faqpage" },
        { id: 6, name: "Index", to: "/journal/indexing" },
        { id: 7, name: "News", to: "/journal/news" },
        { id: 8, name: "Contact", to: "/journal/contact" },
    ]

    const [changeColor, setChangeColor] = useState()

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 10) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 90) setChangeColor(true);
            else setChangeColor(false);
        })
    }, [])

    return (
        <div className="">
            {/* ---head-nav-start--- */}
            <div className='border-b'>
                <div className='flex items-center justify-between xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-6'>
                    <div>
                        <Link to='/'>
                            <h2 className='leading-4 text-[#005581] text-xl font-bold'>WESTREN <br></br><span>Education Group</span></h2>
                        </Link>
                    </div>

                    <div className='lg:flex hidden items-center justify-center space-x-4 cursor-pointer text-sm font-medium text-[#4d4c4c]'>
                        <p>Customer Services</p>
                        <Link to="/journal/login">
                            <p>Log In</p>
                        </Link>
                        <p> Register</p>
                        <p>Institutional Access</p>
                    </div>

                    <div className='lg:hidden'>
                        <div className='flex items-center space-x-2 text-2xl'>
                            <div>
                                <p><CiSearch></CiSearch></p>
                            </div>
                            <div className='px-2 py-2 cursor-pointer bg-[#005581] text-white duration-300'>
                                <p><HiOutlineMenu /></p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* ---head-nav-end--- */}

            {/* ---NavLink-start--- */}
            <div className={isSticky ? 'sticky z-50 duration-300' : ''}>
                <div className={`xl:px-20 lg:px-16 z-50 md:px-14 sm:px-12 px-12  bg-[#E5E5E5] hidden lg:block  w-full duration-300 ${changeColor ? " duration-300 bg-[#E5E5E5] z-50 shadow-md" : ""}`}>

                    <div className='flex items-center justify-between'>
                        <div className='flex space-x-4'>
                            {
                                navLink.map(nav => <li className='list-none flex' key={nav.id}>

                                    <Link to={nav.to}>
                                        <p className='flex text-base items-center  font-medium hover:text-[#005581] duration-300 cursor-pointer'>
                                            <span>{nav.name}</span>
                                        </p>
                                    </Link>

                                </li>)
                            }
                        </div>

                        <div className='flex items-center justify-center space-x-6'>

                            <div className='h-full  bg-[#F96E54] px-6 py-5 text-white relative inline-block hover:bg-[#005581] duration-300 cursor-pointer'>
                                <button className=''>Published Your Journals</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* ---NavLink-end--- */}
        </div>
    );
};
export default JournalNav;