import { useEffect, useState } from "react";
import useSurveyCards from "../../hooks/useSurveyCards";
import Heading from "../heading/Heading";
import Recent from "./Recent";


const RecentSurvey = () => {
    const [cards] = useSurveyCards();
    const [lastSixCards, setLAstSixCArds] = useState([]);

    useEffect(() => {
        const sortingDate = cards.sort((a, b) => new Date(b.creationTime) - new Date(a.creationTime) );
        const sliceCards = sortingDate.slice(0, 6);

        setLAstSixCArds(sliceCards)
    }, [cards])

    const subHeading = "In this section we are trying to show the most recent surveys with their categories. We select the recent surveys on the base of creation time of a survey. check the survey and explore to participate";
    return (
        <div className="font-poppins px-2 lg:px-[60px] mt-16">
            <Heading heading={"Most Recent Surveys"} subHeading={subHeading}></Heading>
            <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto justify-center gap-4 mt-5">
                {
                    lastSixCards.map(lastSixCard => <Recent key={lastSixCard._id} lastSixCard={lastSixCard}></Recent>)
                }
            </div>
        </div>
    );
};

export default RecentSurvey;