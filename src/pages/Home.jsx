
import { Helmet } from 'react-helmet';
import Banner from '../components/banner/Banner'


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home || surveyAtlas</title>
            </Helmet>
            <Banner></Banner>
        </div>
    );
};

export default Home;