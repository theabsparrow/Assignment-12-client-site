import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const CreatSurvey = () => {
    const [startDate, setStartDate] = useState(new Date());
    const axiosSecure = useAxiosSecure();

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = e.target.survey_title.value;
        const description = e.target.describtion.value;
        const category = e.target.category.value;
        const deadline = formatDate(startDate);
        const questionOneTitle = e.target.question_one_title.value;
        const questionOne = e.target.question_one.value;
        const questionTwoTitle = e.target.question_two_title.value;
        const questionTwo = e.target.question_two.value;
        const questionThreeTitle = e.target.question_three_title.value;
        const questionThree = e.target.question_three.value;
        const totalVotes = 0;
        const totalYesVotes = 0;
        const totalNoVotes = 0;
        const questions = [
            {
                id: 1,
                title: questionOneTitle,
                description: questionOne,
                positive: "yes",
                negative: "no",
                positiveVote: 0,
                negativeVote: 0
            },
            {
                id: 1,
                title: questionTwoTitle,
                description: questionTwo,
                positive: "yes",
                negative: "no",
                positiveVote: 0,
                negativeVote: 0
            },
            {
                id: 1,
                title: questionThreeTitle,
                description: questionThree,
                positive: "yes",
                negative: "no",
                positiveVote: 0,
                negativeVote: 0
            },
        ]
        const surveyInfo = {
            title,
            description,
            category,
            deadline,
            totalVotes,
            totalYesVotes,
            totalNoVotes,
            questions
        }

        try {
            const { data } = await axiosSecure.post('/survey', surveyInfo);
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Survey created successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            e.target.reset();

        }
        catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div className="w-[calc(100vw-275px)] font-poppins">
            <div className="flex justify-center border w-full">
                <div className="lg:w-full p-6 border-[1px] shadow-2xl rounded-lg">

                    <div className='flex flex-col items-center'>
                        <h1 className=" text-2xl font-semibold  capitalize sm:text-3xl ">Create a Survey</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-6">
                            <div className="flex flex-col lg:w-[49%]">
                                <label className="text-lg font-medium"> Survey title :</label>
                                <input type="text" name="survey_title" className="block  py-2 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="survey title" required />
                            </div>

                            <div className="flex flex-col lg:w-[49%]">
                                <label className="text-lg font-medium">Choose category :</label>
                                <select className="lg:w-full border-gray-600 border-[1px] bg-[#859770] text-white rounded-lg py-2 px-2 lg:px-5 outline-none" name="category" id="category" required>
                                    <option value="Education">Education</option>
                                    <option value="Traveling">Travelling</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Science">Science</option>
                                    <option value="Nature">Nature</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-end gap-5 mt-3">
                            <div className="flex flex-col mt-3 w-[49%]">
                                <label className="text-lg font-medium">Survey Describtion :</label>
                                <input type="text" name='describtion' className="block  py-2 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Describtion" required />
                            </div>
                            <div className="flex flex-col justify-center">
                                <label className="text-lg font-medium">Survey Deadline :</label>
                                <DatePicker
                                    className="py-2 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <div className="flex flex-col mt-3 w-[49%]">
                                <label className="text-lg font-medium">Question no 1 title :</label>
                                <input type="text" name='question_one_title' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="question no 1 title" required />
                            </div>
                            <div className="flex flex-col mt-3 w-[49%]">
                                <label className="text-lg font-medium" htmlFor="describtion">Question no 1:</label>
                                <input type="text" name='question_one' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="question 1 ?" required />
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <div className="flex flex-col mt-3 w-[49%]">
                                <label className="text-lg font-medium">Question no 2 title :</label>
                                <input type="text" name='question_two_title' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="question no 2 title" required />
                            </div>
                            <div className="flex flex-col mt-3 w-[49%]">
                                <label className="text-lg font-medium">Question no 2:</label>
                                <input type="text" name='question_two' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="question no 2?" required />
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                            <div className="flex flex-col mt-3 w-[49%]">
                                <label className="text-lg font-medium">Question no 3 title :</label>
                                <input type="text" name='question_three_title' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="question no 3 title" required />
                            </div>
                            <div className="flex flex-col mt-3 w-[49%]">
                                <label className="text-lg font-medium">Question no 3:</label>
                                <input type="text" name='question_three' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="question no 3?" required />
                            </div>
                        </div>




                        <div className='mt-4'>
                            <button className="w-full px-6 py-3 text-lg font-medium text-white bg-[#bb1c1b] rounded-lg hover:bg-black ">
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default CreatSurvey;