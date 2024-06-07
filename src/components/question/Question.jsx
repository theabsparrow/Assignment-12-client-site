import PropTypes from 'prop-types';
import { HiMiniArchiveBoxXMark } from 'react-icons/hi2';
import { LuVote } from 'react-icons/lu';

const Question = ({ question, index }) => {
    const { title, description, positiveVote, negativeVote } = question;

    return (
        <div className='font-poppins shadow-xl py-4  rounded-tr-full rounded-br-full rounded-bl-full bg-[#929699CC]'>

            <div className='flex mb-5 justify-center gap-2 mr-12'>
                <p className='bg-[#C1CA35CC] px-2 py-1 rounded-xl'>Question no: <span>{index + 1}</span></p>
                <h1 className='bg-[#859770CC] px-2 py-1 rounded-xl flex items-center gap-1'><LuVote className='text-2xl' /> Positive Vote: <span className='bg-[#35DC75CC] px-1 rounded-2xl'>{positiveVote}</span></h1>
                <h1 className='bg-[#EE8888CC] px-2 py-1 rounded-xl flex items-center gap-1'><HiMiniArchiveBoxXMark className='text-2xl' /> Negative Vote: <span className='bg-[#D54949] px-1 rounded-2xl'>{negativeVote}</span></h1>
            </div>

            <div className='space-y-3 ml-10'>
                <h1 className='text-xl font-semibold'>{title}</h1>
                <p className='text-lg font-medium'>Question: <span>{description}</span></p>
            </div>
        </div>
    );
};

Question.propTypes = {
    question: PropTypes.object,
    index: PropTypes.number,
}
export default Question;