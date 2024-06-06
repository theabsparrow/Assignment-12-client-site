
import { Helmet } from 'react-helmet';
import Banner from '../components/banner/Banner'
import PopularSurvey from '../components/popularSurvey/PopularSurvey';
import RecentSurvey from '../components/recendSurvey/RecentSurvey';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || surveyAtlas</title>
            </Helmet>
            <Banner></Banner>
            <PopularSurvey></PopularSurvey>
            <RecentSurvey></RecentSurvey>
        </div>
    );
};

export default Home;