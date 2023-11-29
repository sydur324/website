import { useQuery } from "@tanstack/react-query";


const useArticle = () => {
    const {data: articles=[],refetch} =useQuery({
        queryKey:['articles'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/articles')
            return res.json()
        }
    })
    return [articles,refetch]
};
export default useArticle;