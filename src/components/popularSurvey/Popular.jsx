import PropTypes from 'prop-types';
import SurveyCards from '../shared/SurveyCards';

const Popular = ({ sixCard }) => {
    const { category, title, totalVotes, description, _id} = sixCard;

    return (
        <div>
            <SurveyCards category={category} title={title} totalVotes={totalVotes} description={description} id={_id}></SurveyCards>
        </div>
    );
};

Popular.propTypes = {
    sixCard: PropTypes.object,
}
export default Popular;