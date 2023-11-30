import { useQuery } from "@tanstack/react-query";


const useEditor = () => {
    const {data: editors=[],refetch} =useQuery({
        queryKey:['editors'],
        queryFn:async() =>{
            const res = await fetch('http://localhost:5000/editors')
            return res.json()
        }
    })
    return [editors,refetch]
};
export default useEditor;