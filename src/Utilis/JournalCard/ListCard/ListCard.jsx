
const ListCard = ({ jounral }) => {
    const { image, title, description, author } = jounral
    return (
        <div className="px-2  group cursor-pointer">
            <div className="flex gap-4">
                <div className="w-[20%]">
                    <img className="w-full h-full" src={image} alt="" />
                </div>
                
                <div className="">
                   <h2 className="text-base text-[#115680] font-medium">{title}</h2>
                   <div className="py-1">
                     <p>{author.name}</p>
                     <p className="text-sm">{author.position}</p>
                   </div>
                   <p className="lg:w-[80%]">{description.slice(0,150)} <span className="text-sm
                    text-[#115680] cursor-pointer
                     group-hover:text-[#A40034] duration-300">[read more..]</span></p>
               
                </div>
            </div>
        </div>
    );
};
export default ListCard;