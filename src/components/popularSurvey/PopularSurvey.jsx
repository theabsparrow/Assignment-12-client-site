import { useEffect, useState } from "react";
import useSurveyCards from "../../hooks/useSurveyCards";
import Popular from "./Popular";
import Heading from "../heading/Heading";

const PopularSurvey = () => {
    const [cards] = useSurveyCards();
    const [sixCards, setSixCards] = useState([]);

    useEffect(() => {
        const sortingCards = cards.sort((a, b) => b.totalVotes - a.totalVotes)
        const popularSixSurvey = sortingCards.slice(0, 6);
        setSixCards(popularSixSurvey)
    }, [cards])

const subHeading = "In this section we are trying to show the most popular surveys with their categories. We select the popular surveys on the base of total votes of a survey. check the survey and explore to participate";

    return (
        <div className="font-poppins px-[60px] mt-16">
            <Heading heading={"Most Popular Surveys"} subHeading={subHeading}></Heading>
            <div className="grid grid-cols-3 mx-auto border justify-center gap-4 mt-5">
                {
                    sixCards.map(sixCard => <Popular key={sixCard._id} sixCard={sixCard}></Popular>)
                }
            </div>

        </div>
    );
};

export default PopularSurvey;