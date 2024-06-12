import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useReports = () => {

    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();

    const {data: reports=[], isLoading, refetch} = useQuery({
        queryKey:['reports', user?.email],
        queryFn: async() => {
            const {data} = await axiosSecure(`/reports/${user?.email}`);
            return data
        }
    })
    return [reports,isLoading, refetch]
};

export default useReports;