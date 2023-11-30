import { useQuery } from "@tanstack/react-query";


const useAdviser = () => {
    const {data: adviseres=[],refetch} =useQuery({
        queryKey:['adviseres'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/adveseres')
            return res.json()
        }
    })
    return [adviseres,refetch]
};
export default useAdviser;