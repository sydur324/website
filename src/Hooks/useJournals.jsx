import { useQuery } from "@tanstack/react-query";


const useJournals = () => {
    const {data: journalls=[],refetch} =useQuery({
        queryKey:['journalls'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/journals')
            return res.json()
        }
    })
    return [journalls,refetch]
};
export default useJournals;