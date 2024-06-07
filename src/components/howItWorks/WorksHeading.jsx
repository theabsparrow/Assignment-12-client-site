import PropTypes from 'prop-types';

const WorksHeading = ({title, describtion}) => {
    return (
        <div className="font-poppins">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="w-[15vw]">{describtion}</p>
        </div>
    );
};

WorksHeading.propTypes = {
    title:PropTypes.string,
    describtion:PropTypes.string,
}
export default WorksHeading;