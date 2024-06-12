import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllVotes = () => {
    const axiosSecure = useAxiosSecure();

    const { data: allVotes = [], isLoading, refetch } = useQuery({
        queryKey: ['votes'],
        queryFn: async () => {
            const { data } = await axiosSecure('/votes');
            return data
        }
    })
    return [allVotes, isLoading, refetch]
};

export default useAllVotes;