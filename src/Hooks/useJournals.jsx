import { useQuery } from "@tanstack/react-query";


const useJournals = () => {
    const {data: journals=[],refetch} =useQuery({
        queryKey:['journals'],
        queryFn:async() =>{
            const res = await fetch('jounrals.json')
            return res.json()
        }
    })
    return [journals,refetch]
};
export default useJournals;