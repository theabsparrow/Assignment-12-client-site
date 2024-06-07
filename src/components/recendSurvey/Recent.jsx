import PropTypes from 'prop-types';
import SurveyCards from '../shared/SurveyCards';

const Recent = ({ lastSixCard }) => {
    const { category, title, totalVotes, description, creationTime, _id} = lastSixCard;
    return (
        <div>
            <SurveyCards category={category} title={title} totalVotes={totalVotes} description={description} creationTime={creationTime
            } id={_id}></SurveyCards>
        </div>
    );
};

Recent.propTypes = {
    lastSixCard: PropTypes.object,
}
export default Recent;