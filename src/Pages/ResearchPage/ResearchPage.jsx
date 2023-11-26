import { useEffect, useState } from 'react';
import './ResearchPage.css'
import { Link } from 'react-router-dom';

const ResearchPage = () => {
    const [researches, setResearches] = useState([])
    useEffect(() => {
        fetch('research.json')
            .then(res => res.json())
            .then(data => {
                setResearches(data)
            })
    }, [])

    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-8">
            <div className='research-bg py-16 px-12'>
                <div className='z-10 relative'>
                    <h2 className='text-[#262626] lg:text-2xl md:text-2xl sm:text-xl text-base font-bold'>Research of WEG</h2>
                </div>
            </div>
            <div className='py-6'>
                <div>
                    <h2 className='text-xl font-bold text-[#F46957]'>Research</h2>
                    <p className='py-2'>
                        Research lies at the centre-point of WEG.
                        As a research oriented organization, it conducts a
                        number of researches as a routine activity. Generally
                        the research areas cover the contemporary issues in business,
                        social science and technology. Interested researchers,
                        academicians, and professionals can also attend the research
                        projects run by WEG.
                    </p>

                    <p>
                        WEG provides funds to a number of research projects every year.
                        Interested researchers are instructed to form a research group of which the
                        number of members should not exceed five. Groups are asked to submit the research
                        proposal to the director at demo@gmail.com along with the prescribed application
                        from. An amount equivalent to USD 300 (lump sum) will be given to each selected research
                        group. The final research paper will be published in the journals run by WEG.
                        Interested researchers are requested to submit their proposal before December
                        15 of every year because selection process and financing are completed before
                        December 31 (once a year).
                    </p>
                </div>

                <div className='w-full lg:flex gap-8 py-8'>

                    <div className='lg:w-3/4 w-full'>
                        <h2 className='text-xl font-medium text-[#F46957] py-2 border-b'>List Of Research</h2>

                        <div className='space-y-4 py-8 w-full'>
                            {
                                researches.map((research, index) => <div key={index}>
                                    <Link to='/detailsRearch'>
                                        <div className='lg:flex gap-6 lg:space-y-0 space-y-4 cursor-pointer'>
                                            <div className='lg:w-2/4 w-full'>
                                                <img className='w-full' src={research.image} alt="" />
                                            </div>
                                            <div className='lg:w-3/4 w-full group'>
                                                <h2 className='text-xl font-semibold text-[#F46957]'>{research.title}</h2>
                                                <p className='py-1'><span className='font-bold'>Research Topic:</span> <span>{research.topics}</span></p>
                                                <p>{research.overview.slice(0, 180)}...<span className='text-lg font-medium group-hover:text-[#F46957] duration-300'>[read more]</span></p>
                                                <div className='py-1'>
                                                    <p><span className='font-bold'>Date of Completion:</span> {research.date}</p>
                                                    <p><span className='font-bold'>Sponsored By: </span>{research.sponsored}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>)
                            }
                        </div>
                            <div className='flex items-center justify-center mt-5'>
                                  <button className='px-6 py-2 bg-[#F46957] font-medium text-white hover:bg-[#1B577F] duration-300 cursor-pointer'>More Research</button>
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
        </div>
    );
};
export default ResearchPage;