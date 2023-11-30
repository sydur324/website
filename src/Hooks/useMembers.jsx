import { useQuery } from "@tanstack/react-query";


const useMembers = () => {
    const {data: members=[],refetch} =useQuery({
        queryKey:['members'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/members')
            return res.json()
        }
    })
    return [members,refetch]
};
export default useMembers;