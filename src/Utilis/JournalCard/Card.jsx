import './Card.css'
const Card = ({jounral}) => {
    const {image,title,description,author} = jounral
    return (
        <div className="px-2  group cursor-pointer">
               <div className="overflow-hidden"><img className="w-full overflow-hidden group-hover:scale-105 duration-300" src={image} alt="" /></div>
               <div className=" py-2">
                   <h2 className="text-base text-[#115680] font-medium">{title}</h2>
                   <div className="py-1">
                     <p>{author.name}</p>
                     <p className="text-sm">{author.position}</p>
                   </div>
                   <p>{description.slice(0,64)} <span className="text-sm text-[#115680] cursor-pointer group-hover:text-[#A40034] duration-300">[read more..]</span></p>
               </div>
        </div>
    );
};
export default Card;