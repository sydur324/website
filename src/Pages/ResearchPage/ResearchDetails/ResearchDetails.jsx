import { useEffect, useState } from 'react';
import './ResearchDetails.css'
import { Link } from 'react-router-dom';
const ResearchDetails = () => {
    const [researches, setResearches] = useState({})
    useEffect(() => {
        fetch('singlereach.json')
            .then(res => res.json())
            .then(data => {
                setResearches(data)
            })
    }, [])
    return (
        <div className="xl:px-20 lg:px-16 md:px-14 sm:px-12 px-12 py-8">
            <div className='researchsingle-bg py-16 px-12'>
                <div className='z-10 relative flex items-center space-x-2 text-lg font-bold'>
                    <Link to='/research'>
                        <p className='hover:text-[#F46957] duration-300 cursor-pointer'>Research</p>
                    </Link>
                    <p>/</p>
                    <p className='text-[#1B577F]'>{researches.title}</p>
                </div>
            </div>

            <div className='pt-8'>
                <h2 className='text-xl font-semibold text-[#F46957]'>{researches.title}</h2>

                <div className='py-2 space-y-1'>
                    <p><span className='font-medium py-3'>Research Topic</span> : <span>{researches.topics}</span></p>
                    <p><span className='font-medium'>Date of Completion : </span>{researches.date}</p>
                    <p><span className='font-medium'>Sponsored By : </span>{researches.sponsored}</p>
                </div>

                <div>
                     <h2 className='font-bold text-xl text-[#F46957] py-2 border-b'>Overview :</h2>
                     <p className='py-2 mt-2'>{researches.overview}</p>
                </div>
            </div>
        </div>
    );
};
export default ResearchDetails;