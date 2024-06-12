import { useState } from "react";
import DatePicker from "react-datepicker";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UpdateSurvey = () => {
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
        const totalVotes = 0;
        const totalYesVotes = 0;
        const totalNoVotes = 0;
        
    }

    return (
        <div className="w-[calc(100vw-275px)] flex justify-center items-center font-poppins">
            <div className="flex justify-center border w-[50vw]">
                <div className="lg:w-full p-6 border-[1px] shadow-2xl rounded-lg">

                    <div className='flex flex-col items-center'>
                        <h1 className=" text-2xl font-semibold  capitalize sm:text-3xl ">Update survey</h1>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col  justify-between mt-6">
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

                        <div className=" mt-3">
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

export default UpdateSurvey;