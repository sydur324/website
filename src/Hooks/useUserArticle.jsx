import { useQuery } from "@tanstack/react-query";


const useUserArticle = () => {
    const {data: userArticle=[],refetch} =useQuery({
        queryKey:['userArticle'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/userarticles')
            return res.json()
        }
    })
    return [userArticle,refetch]
};
export default useUserArticle;