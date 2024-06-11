import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useAllPayments = () => {
    const axiosSecure = useAxiosSecure();

    const { data: paymentInfo = [], isLoading, refetch } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const { data } = await axiosSecure('/payment');
            return data
        }
    })
    
    return [paymentInfo, isLoading, refetch]
};

export default useAllPayments;