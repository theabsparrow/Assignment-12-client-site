import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useTotalSurvey = () => {
    const axiosSecure = useAxiosSecure();
    const { data: surveyCards = [], isLoading, refetch } = useQuery({
        queryKey: ['totalSurveys'],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/totalSurveys")
            return data
        },
    })
    return [surveyCards, isLoading, refetch]
};

export default useTotalSurvey;