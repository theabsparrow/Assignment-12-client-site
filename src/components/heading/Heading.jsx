import PropTypes from 'prop-types';

const Heading = ({ heading, subHeading }) => {
    return (
        <div className='flex justify-center'>
            <div className='text-center mb-6 font-poppins space-y-4 border-y-[2px] border-dashed border-slate-500 py-5 px-5'>
                <h1 className='text-4xl font-bold'>{heading}</h1>
                <p className='w-[95vw] lg:w-[60vw] mx-auto text-lg font-medium'>{subHeading}</p>
            </div>
        </div>
    );
};

Heading.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,
}
export default Heading;