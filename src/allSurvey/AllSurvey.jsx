import PropTypes from 'prop-types';
import Survey from './Survey';


const AllSurvey = ({survey}) => {
    const {category, creationTime, deadline, description, status, title, totalNoVotes, totalYesVotes, totalVotes, _id} = survey;
    return (
        <div>
            <Survey category={category} creationTime={creationTime} deadline={deadline} description={description} status={status} title={title} totalNoVotes={totalNoVotes} totalYesVotes={totalYesVotes} totalVotes={totalVotes} id={_id}></Survey>
        </div>
    );
};

AllSurvey.propTypes = {
    survey:PropTypes.object
}
export default AllSurvey;