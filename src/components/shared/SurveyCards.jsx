
import { BiSolidCategory } from 'react-icons/bi'
import Agriculture from '../../../public/images/Agriculture.png'
import Education from '../../../public/images/Education.png'
import Nature from '../../../public/images/Nature.png'
import Science from '../../../public/images/Science.png'
import Travelling from '../../../public/images/Travelling.png'
import PropTypes from 'prop-types';
import { MdHowToVote } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { IoIosTime } from 'react-icons/io'

const SurveyCards = ({ category, title, totalVotes, description, creationTime, id }) => {

    return (
        <div className='shadow-xl rounded-xl font-poppins border-[1px] border-gray-400 relative px-5'>
            <div className='flex justify-center'>
                {category === "Science" && <img className='w-[20vw] rounded-xl' src={Science} alt="" />}
                {category === "Education" && <img className='w-[20vw] rounded-xl' src={Education} alt="" />}
                {category === "Agriculture" && <img className='w-[20vw] rounded-xl' src={Agriculture} alt="" />}
                {category === "Nature" && <img className='w-[20vw] rounded-xl' src={Nature} alt="" />}
                {category === "Traveling" && <img className='w-[20vw] rounded-xl' src={Travelling} alt="" />}
            </div>
            <div className='absolute z-10 top-6 left-2 px-3'>
                <div className='flex justify-between items-center'>
                    <h1 className='bg-[#DED66B] px-2 py-1 rounded-xl flex items-center gap-1'><BiSolidCategory className='text-2xl' /> Category : <span className='bg-[#C1CA35] px-1 rounded-2xl'>{category}</span></h1>
                    {creationTime ? <h1
                        className='bg-[#284E73] text-white px-2 py-1 rounded-xl flex items-center gap-1'>
                        <IoIosTime className='text-2xl' />
                        <span className='bg-[#0F2B4869] px-1 rounded-2xl'>{creationTime}</span>
                    </h1> : <h1
                        className='bg-[#284E73] px-2 py-1 rounded-xl flex items-center gap-1 text-white'>
                        <MdHowToVote className='text-2xl' />
                        Total  Vote: <span className='bg-[#0F2B48] px-1 rounded-2xl'>{totalVotes}</span></h1>}
                </div>
                <div className='flex flex-col'>
                    <div className='text-center mt-5 space-y-4'>
                        <h1 className='text-4xl font-bold bg-[#CFD7DFCC] rounded-xl px-3 py-1 '>{title}</h1>
                        <h1 className='text-lg font-medium bg-[#CFD7DFCC] rounded-xl px-3 py-1'>{description}</h1>
                    </div>
                    <div className='flex justify-between mt-4'>
                        <Link to={`/survey/${id}`} className='bg-[#859770] text-black px-3 py-1 text-lg font-medium rounded-xl hover:bg-black hover:text-white duration-500'> Explore More</Link>

                    </div>
                </div>

            </div>
        </div>
    );
};

SurveyCards.propTypes = {
    category: PropTypes.string,
    title: PropTypes.string,
    totalVotes: PropTypes.number,
    description: PropTypes.string,
    creationTime: PropTypes.string,
    id: PropTypes.string,
}
export default SurveyCards;