import PropTypes from 'prop-types';
import SurveyCards from '../shared/SurveyCards';

const Recent = ({ lastSixCard }) => {
    const { category, title, totalVotes, description, creationTime
    } = lastSixCard;
    return (
        <div>
            <SurveyCards category={category} title={title} totalVotes={totalVotes} description={description} creationTime={creationTime
            }></SurveyCards>
        </div>
    );
};

Recent.propTypes = {
    lastSixCard: PropTypes.object,
}
export default Recent;