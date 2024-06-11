import PropTypes from 'prop-types';

const Comment = ({ resentComment }) => {
    const { comment, userName, creationTime } = resentComment;
    const date = new Date(creationTime);

    const formattedDate = date.toLocaleDateString(); 
    const formattedTime = date.toLocaleTimeString(); 

    return (
        <div className='font-poppins'>
            <div>
                <h1 className='text-xl font-semibold'>{userName}</h1>
            </div>
            <div className='flex'>
                <p className='bg-gray-600 px-5 py-4 text-white rounded-tr-full rounded-br-full rounded-bl-full'>{comment}</p>
            </div>
            <div className=' flex justify-center mt-1 text-white'>
                <span className='bg-gray-600 px-2 rounded-l-xl'>{formattedTime}</span>
                <span className='bg-gray-600 px-2 rounded-r-xl'>{formattedDate}</span>
            </div>
        </div>
    );
};

Comment.propTypes = {
    resentComment: PropTypes.object
}
export default Comment;