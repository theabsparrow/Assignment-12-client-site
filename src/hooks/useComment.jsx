import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useComment = (id) => {
const axiosPublic = useAxiosPublic()


    const { data:comments=[], isLoading,refetch } = useQuery({
        queryKey: ['comment', id],
        queryFn: async () => {
            const {data} = await axiosPublic.get(`/comment/${id}`);
            return data;
        }
    })
    return [comments,refetch, isLoading]
};

export default useComment;