import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useSurveyCards = () => {
    const axiosPublic = useAxiosPublic();
    // const [selectedOption, setSelectedOption] = useState('');

    const { data: cards = [], isLoading, refetch } = useQuery({
        queryKey: ['surveys'],
        queryFn: async () => {
            const { data } = await axiosPublic.get("surveys")
            return data
        },
    })
    return [cards, isLoading, refetch]
};

export default useSurveyCards;