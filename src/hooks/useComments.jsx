import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useComments = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: userComments=[], isLoading, refetch} = useQuery({
        queryKey:['comment', user?.email],
        queryFn: async() => {
            const {data} = await axiosSecure(`/comments/${user?.email}`);
            return data
        }
    })
    return [userComments,isLoading, refetch]
};

export default useComments;