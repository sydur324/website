import { useEffect, useState } from 'react';
import './TeamPage.css'
import { Link } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const TeamPage = () => {
    const [teames, setteames] = useState([])
    useEffect(() => {
        fetch('team.json')
            .then(res => res.json())
            .then(data => {
                setteames(data)
            })
    }, [])
    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-8">
            <div className='team-bg py-16 px-12'>
                <div className='z-10 relative'>
                    <h2 className='text-[#262626] lg:text-2xl md:text-2xl sm:text-xl text-base font-bold'>Team of WEG</h2>
                </div>
            </div>

            <div>
                <h2 className='font-bold text-xl text-[#F46957] py-2 mt-4 border-b'>WEG Global Team</h2>
            </div>

            <div className='w-full lg:flex gap-8 py-8'>

                <div className='lg:w-3/4 w-full'>
                    <div className='space-y-4 py-8 w-full'>
                        {
                            teames.map((research, index) => <div key={index}>
                                <Link to='/detailsRearch'>
                                    <div className='lg:flex gap-6 lg:space-y-0 space-y-4 cursor-pointer'>
                                        <div className='lg:w-1/4 w-full'>
                                            <img className='w-full' src={research.image} alt="" />
                                        </div>
                                        <div className='lg:w-3/4 w-full group'>
                                            <h2 className='text-2xl font-semibold text-[#F46957]'>{research.name}</h2>
                                            <p className='py-1'><span>{research.title}</span></p>
                                            <p>{research.description.slice(0, 200)}...<span className='text-lg font-medium group-hover:text-[#F46957] duration-300'>[read more]</span></p>
                                            <div className='py-1 flex items-center space-x-4'>
                                                <p><span className='font-bold'>Social Link:</span> {research.date}</p>
                                                
                                                    <div className='flex items-center space-x-2'>
                                                        <a className='px-2 py-2  bg-[#4B68A8] text-white rounded-full hover:bg-[#3674fa] hover:scale-105 duration-300' href='https://www.facebook.com/' target="_blank"><FaFacebookF /></a>
                                                        <a className='px-2 py-2  bg-[#D43B78] text-white rounded-full hover:bg-[#ff3787] hover:scale-105 duration-300' href='https://www.instagram.com/' target="_blank"><FaInstagram /></a>
                                                        <a className='px-2 py-2  bg-[#3098E7] text-white rounded-full hover:bg-[#2ca3ff] hover:scale-105 duration-300' href='https://twitter.com/' target="_blank"><FaTwitter /></a>
                                                        <a className='px-2 py-2  bg-[#2E66AA] text-white rounded-full hover:bg-[#2f8dff] hover:scale-105 duration-300' href='https://bd.linkedin.com/' target="_blank"><FaLinkedinIn /></a>
                                                    </div>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                        }
                    </div>
                    <div className='flex items-center justify-center mt-5'>
                        <button className='px-6 py-2 bg-[#F46957] font-medium text-white hover:bg-[#1B577F] duration-300 cursor-pointer'>More Members</button>
                    </div>
                </div>

                <div className='lg:w-1/5 w-full border inline-block h-[50%] my-10'>

                    <div className='text-center'>
                        <h2 className='bg-[#F46957] py-3 text-lg font-semibold text-white border-b'>Context</h2>
                        <div className='cursor-pointer'>
                            <Link to='/journals'>
                                <p className='border-b py-2 hover:bg-[#F46957] hover:text-white duration-300'>Journals</p>
                            </Link>

                            <Link to='/Education'>
                                <p className='border-b py-2 hover:bg-[#F46957] hover:text-white duration-300'>Education</p>
                            </Link>

                            <Link to=''>
                                <p className='border-b py-2 hover:bg-[#F46957] hover:text-white duration-300'>Training</p>
                            </Link>

                            <Link to=''>
                                <p className='border-b py-2 hover:bg-[#F46957] hover:text-white duration-300'>Seminar</p>
                            </Link>

                            <Link to=''>
                                <p className='border-b py-2 hover:bg-[#F46957] hover:text-white duration-300'>Global Team</p>
                            </Link>

                            <Link to=''>
                                <p className='border-b py-2 hover:bg-[#F46957] hover:text-white duration-300'>Contact</p>
                            </Link>





                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
export default TeamPage;