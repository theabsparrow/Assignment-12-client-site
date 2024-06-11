import { useNavigate, useParams } from "react-router-dom";
import useAxiosPublic from "../hooks/useAxiosPublic";
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
import SurveyForm from "../components/surveyForm/SurveyForm";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import useRole from "../hooks/useRole";
import Navbar from "../shared/Navbar";
import { axiosSecure } from "../hooks/useAxiosSecure";
import { useMutation, useQuery } from "@tanstack/react-query";
import useComment from "../hooks/useComment";
import Comment from "../components/comment/Comment";
import { useEffect, useState } from "react";


const SurveyDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [role , ] = useRole();
    const [comments, refetch] = useComment(id);

    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        const latestComment = comments.sort((a,b) => new Date(b.creationTime) - new Date(a.creationTime));
        setCommentData(latestComment)
    },[comments])

    const { mutateAsync } = useMutation({
        mutationFn: async (commentInfo) => {
            const { data } = await axiosSecure.post(`/comment/`, commentInfo)
            console.log(data)
        },
        onSuccess: () => {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Comment posted successfully",
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
        }
    })
    const { data: survey = {}, isLoading } = useQuery({
        queryKey: ['survey', id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`/surveys/${id}`);
            return data
        }
    })
    const handleLoginAlert = () => {
        Swal.fire({
            title: "Opps",
            text: "You need to login first to participate in surveys!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login"
        }).then((result) => {
            if (result.isConfirmed) {
                navigate('/login')
            }
        });
    }


    const hamdleComment = async (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const commentId = id;
        const userName = user.displayName;
        const userEmail = user.email;
        const creationTime = new Date();
        const commentInfo = {
            comment, commentId, userName, userEmail, creationTime
        }
        try {
            await mutateAsync(commentInfo)
        }
        catch (error) {
            console.log(error.message)
        }
    }

    


  

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
        <div>
            <Navbar></Navbar>
            <div className="font-poppins px-2 lg:px-[60px] mt-10 mb-24 relative">
                <div className="border rounded-xl w-full lg:w-[50vw] mx-auto shadow-xl py-6 px-6">
                    <div className='flex justify-center'>
                        {category === "Science" && <img className='lg:w-[20vw] rounded-xl shadow-xl' src={Science} alt="" />}
                        {category === "Education" && <img className='lg:w-[20vw] rounded-xl shadow-xl' src={Education} alt="" />}
                        {category === "Agriculture" && <img className='lg:w-[20vw] rounded-xl shadow-xl' src={Agriculture} alt="" />}
                        {category === "Nature" && <img className='lg:w-[20vw] rounded-xl shadow-xl' src={Nature} alt="" />}
                        {category === "Traveling" && <img className='lg:w-[20vw] rounded-xl shadow-xl' src={Travelling} alt="" />}
                    </div>
                    <div className="mt-6 flex flex-col items-center space-y-2 border-b-[2px] border-y-slate-400 border-dashed pb-4">
                        <h1 className="text-4xl font-bold text-center">{title}</h1>
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

                    {
                        (role === 'Admin' || role === 'Surveyor') && <div className="mt-5  text-center">
                            <span className="text-xl font-medium text-red-600">Only User and Pro-User can participate in surveys</span>
                        </div>
                    }


                    {
                        user ? <div className='mt-4 flex justify-center'>
                            <button
                                disabled={role === 'Admin' || role === 'Surveyor'}
                                onClick={() => document.getElementById('surveyModal').showModal()}
                                className='bg-[#19512B] hover:bg-black duration-500 px-3 py-2 rounded-xl text-white text-lg font-medium'>
                                Participate in Surveys</button>
                        </div> : <div className='mt-4 flex justify-center'>
                            <button onClick={handleLoginAlert} className='bg-[#19512B] hover:bg-black duration-500 px-3 py-2 rounded-xl text-white text-lg font-medium'>Participate in Surveys</button>
                        </div>
                    }

                    <div className="space-y-6">
                       {
                        commentData.map(resentComment => <Comment key={resentComment._id} resentComment={resentComment}></Comment>)
                       }
                    </div>

                    <div>
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <dialog id="surveyModal" className="modal">
                            <div className="modal-box">
                                <div className="space-y-6">
                                    <div>
                                        <SurveyForm questions={questions}></SurveyForm>

                                    </div>
                                    <form method="dialog">
                                        <button className="bg-black px-3 py-2 rounded-xl text-white hover:bg-red-600 duration-500">Close</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>

                </div>

                {
                    role === "Pro-User" && <div className="mt-3 ">
                        <form onSubmit={hamdleComment} className="fixed bottom-1 left-[40%] w-[30vw]">
                            <div className="flex justify-between w-full">
                                <div className="flex-grow">
                                    <textarea className="block w-full rounded-lg border border-[#859770] px-4 dark:text-white dark:bg-gray-900 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  dark:focus:border-blue-300" name="comment" id="comment" cols="20" rows="3" placeholder="drop your valuable comment here"></textarea>
                                </div>
                                <div>
                                    <button className="bg-[#859770] text-white font-medium px-3 py-2 rounded-xl" type="submit">Comment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                }
            </div>
        </div>
    );
};

export default SurveyDetails;