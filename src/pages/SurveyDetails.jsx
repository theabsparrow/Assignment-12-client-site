import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Agriculture from '../../public/images/Agriculture.png';
import Education from '../../public/images/Education.png';
import Nature from '../../public/images/Nature.png';
import Science from '../../public/images/Science.png';
import Travelling from '../../public/images/Travelling.png';
import { LuVote } from "react-icons/lu";
import { HiMiniArchiveBoxXMark } from "react-icons/hi2";
import { MdHowToVote } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import Question from "../components/question/Question";


const SurveyDetails = () => {
    const { id } = useParams()
    const axiosPublic = useAxiosPublic()

    const { data: survey = {}, isLoading } = useQuery({
        queryKey: ['survey', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/surveys/${id}`);
            return data
        }
    })
    if (isLoading) {
        return <div className="flex flex-col m-8 rounded shadow-md animate-pulse">
            <div className="h-48 rounded-t dark:bg-gray-300"></div>
            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 dark:bg-gray-50">
                <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                <div className="w-full h-6 rounded dark:bg-gray-300"></div>
                <div className="w-3/4 h-6 rounded dark:bg-gray-300"></div>
            </div>
        </div>
    }
    const { title, description, category, creationTime, deadline, status, totalVotes, totalYesVotes, totalNoVotes, questions } = survey;
    return (
        <div className="font-poppins px-[60px] mt-10">
            <div className="border rounded-xl w-[40vw] mx-auto shadow-xl py-6 px-6">
                <div className='flex justify-center'>
                    {category === "Science" && <img className='w-[20vw] rounded-xl shadow-xl' src={Science} alt="" />}
                    {category === "Education" && <img className='w-[20vw] rounded-xl shadow-xl' src={Education} alt="" />}
                    {category === "Agriculture" && <img className='w-[20vw] rounded-xl shadow-xl' src={Agriculture} alt="" />}
                    {category === "Nature" && <img className='w-[20vw] rounded-xl shadow-xl' src={Nature} alt="" />}
                    {category === "Traveling" && <img className='w-[20vw] rounded-xl shadow-xl' src={Travelling} alt="" />}
                </div>
                <div className="mt-6 flex flex-col items-center space-y-2 border-b-[2px] border-y-slate-400 border-dashed pb-4">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="text-lg font-medium">{description}</p>
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
                    <h1 className='bg-[#DED66B69] px-2 py-1 rounded-xl flex items-center gap-1'><BiSolidCategory className='text-2xl' /> Category : <span className='bg-[#C1CA3569] px-1 rounded-2xl'>{category}</span></h1>
                    <h1 className='bg-[#859770] px-2 py-1 rounded-xl flex items-center gap-1'> Total Question : <span className='bg-[#C1CA3569] px-1 rounded-2xl'>{questions.length}</span></h1>
                </div>
                <div className="space-y-4 mt-5">
                    {
                        questions.map((question, i) => <Question key={i} question={question} index={i}></Question>)
                    }
                </div>
                <div className='mt-4 flex justify-center'>
                    <button className='bg-[#19512B] hover:bg-black duration-500 px-3 py-2 rounded-xl text-white text-lg font-medium'>Participate in Surveys</button>
                </div>
            </div>
        </div>
    );
};

export default SurveyDetails;