import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSurveys = (filter) => {
    const axiosPublic = useAxiosPublic();
    // const [selectedOption, setSelectedOption] = useState('');

    const { data: surveys = [], isLoading, refetch } = useQuery({
        queryKey: ['surveys', filter],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`surveys?filter=${filter}`)
            return data
        },
    })
    return [surveys, isLoading, refetch]
};

export default useSurveys;