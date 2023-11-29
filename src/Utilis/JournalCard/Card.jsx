import './Card.css'
import { Link } from 'react-router-dom';
const Card = ({ jounral }) => {
    const { image, title, amis,_id} = jounral
    return (
        <div className="group cursor-pointer relative mx-2">
            <Link to={`/journaldetails/${_id}`}>
                <div className="overflow-hidden w-full"><img className="w-full overflow-hidden  duration-300" src={image} alt="" /></div>
                <div className=''>
                    <div className="bg-[#F46957] mx-3 px-2 py-2 bottom-4 absolute">
                        <h2 className="text-lg text-[#fff] font-bold">{title}</h2>
                        <div className='my-2 op'>
                            
                            <p>{amis.slice(0, 64)} <span className="text-sm
                    text-[#115680] cursor-pointer
                     group-hover:text-[#A40034] duration-300">[read more..]</span>
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};
export default Card;