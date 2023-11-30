import useAdviser from "../../../Hooks/useAdviser";


const AdviserBoard = () => {
    const [adviseres,refetch] = useAdviser()
    return (
        <div className="my-4">
             <div className="space-y-2">
                {
                   adviseres.map(advisere => <div key={advisere._id}>
                        <div>
                            <h2 className="font-medium text-[#EF645A]">{advisere.adviser}</h2>
                            <p>{advisere.information}</p>
                        </div>
                   </div>) 
                }
             </div>  
        </div>
    );
};
export default AdviserBoard;