import Nature from '../../public/images/Nature.png'
import Agriculture from '../../public/images/Agriculture.png'
import Edication from '../../public/images/Education.png'
import Science from '../../public/images/Science.png'
import Travelling from '../../public/images/Travelling.png'
import PropTypes from 'prop-types';
import { LuVote } from 'react-icons/lu'
import { HiMiniArchiveBoxXMark } from 'react-icons/hi2'
import { MdHowToVote } from 'react-icons/md'
import { IoIosTime } from 'react-icons/io'
import { BiSolidCategory } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Survey = ({ category, description, title, creationTime, deadline, totalNoVotes, totalYesVotes, totalVotes, status }) => {
   
    return (
        <div className='flex items-center justify-center border rounded-xl p-5 font-poppins shadow-xl gap-5'>
            <div>
                {category === "Science" && <img className='w-[20vw]' src={Science} alt="" />}
                {category === "Education" && <img className='w-[20vw]' src={Edication} alt="" />}
                {category === "Agriculture" && <img className='w-[20vw]' src={Agriculture} alt="" />}
                {category === "Nature" && <img className='w-[20vw]' src={Nature} alt="" />}
                {category === "Traveling" && <img className='w-[20vw]' src={Travelling} alt="" />}
            </div>

            <div className='px-4'>

                <div className='space-y-2 border-b-[2px] border-y-slate-400 border-dashed px-6 pb-4'>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <p className='text-xl font-semibold'>{description}</p>
                </div>

                <div className='flex justify-between mt-5 border-b-[2px] border-y-slate-400 border-dashed px-6 pb-4'>
                    <h1 className='bg-[#85977069] px-2 py-1 rounded-xl flex items-center gap-1'><LuVote className='text-2xl' /> Total Yes Vote: <span className='bg-[#35DC7569] px-1 rounded-2xl'>{totalYesVotes}</span></h1>
                    <h1 className='bg-[#EE888869] px-2 py-1 rounded-xl flex items-center gap-1'><HiMiniArchiveBoxXMark className='text-2xl' /> Total No Vote: <span className='bg-[#D5494969] px-1 rounded-2xl'>{totalNoVotes}</span></h1>
                </div>

                <div className='flex justify-between mt-5 border-b-[2px] border-y-slate-400 border-dashed px-6 pb-4'>
                    <h1 className='bg-[#284E7369] px-2 py-1 rounded-xl flex items-center gap-1'><MdHowToVote className='text-2xl' /> Total  Vote: <span className='bg-[#0F2B4869] px-1 rounded-2xl'>{totalVotes}</span></h1>
                    <h1 className='bg-[#72D1DC69] px-2 py-1 rounded-xl flex items-center gap-1'>Status: <span className='bg-[#35DC7569] px-3 py-1 rounded-2xl'>{status}</span></h1>
                </div>

                <div className='flex justify-between mt-5 border-b-[2px] border-y-slate-400 border-dashed px-6 pb-4'>
                    <h1 className='bg-[#284E7369] px-2 py-1 rounded-xl flex items-center gap-1'><IoIosTime className='text-2xl' /> Create : <span className='bg-[#0F2B4869] px-1 rounded-2xl'>{creationTime}</span></h1>
                    <h1 className='bg-[#284E7369] px-2 py-1 rounded-xl flex items-center gap-1'><IoIosTime className='text-2xl' /> Deadline: <span className='bg-[#0F2B4869] px-1 rounded-2xl'>{deadline}</span></h1>
                </div>

                <div className='flex justify-between mt-5 border-b-[2px] border-y-slate-400 border-dashed px-6 pb-4'>
                    <h1 className='bg-[#DED66B69] px-2 py-1 rounded-xl flex items-center gap-1'><BiSolidCategory className='text-2xl'/> Category : <span className='bg-[#C1CA3569] px-1 rounded-2xl'>{category}</span></h1>
                    <Link className='bg-[#859770] px-3 py-1 rounded-xl text-lg font-medium text-white hover:bg-black hover:text-white duration-500'>View Details</Link>
                </div>

            </div>

        </div>
    );
};

Survey.propTypes = {
    category: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    creationTime: PropTypes.string,
    deadline: PropTypes.string,
    totalNoVotes: PropTypes.number,
    totalYesVotes: PropTypes.number,
    totalVotes: PropTypes.number,
    status: PropTypes.string,
}

export default Survey;