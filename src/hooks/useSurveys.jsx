import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSurveys = () => {
    const axiosPublic = useAxiosPublic();
    // const [selectedOption, setSelectedOption] = useState('');

    const { data: surveys = [], isLoading, refetch } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const { data } = await axiosPublic.get('surveys')
            return data
        },
    })
    return [surveys, isLoading, refetch]
};

export default useSurveys;