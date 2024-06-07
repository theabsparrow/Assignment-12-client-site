
import { Helmet } from 'react-helmet';
import Banner from '../components/banner/Banner'
import PopularSurvey from '../components/popularSurvey/PopularSurvey';
import RecentSurvey from '../components/recendSurvey/RecentSurvey';
import HowItWorks from '../components/howItWorks/HowItWorks';
import FaqSection from '../components/faqSection/FaqSection';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || surveyAtlas</title>
            </Helmet>
            <Banner></Banner>
            <PopularSurvey></PopularSurvey>
            <RecentSurvey></RecentSurvey>
            <HowItWorks></HowItWorks>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;