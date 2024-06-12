import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useVotes = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: votes=[], isLoading, refetch} = useQuery({
        queryKey:['votes', user?.email],
        queryFn: async() => {
            const {data} = await axiosSecure(`/votes/${user?.email}`);
            return data
        }
    })
    return [votes,isLoading, refetch]
};

export default useVotes;