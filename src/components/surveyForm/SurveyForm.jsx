import PropTypes from 'prop-types';
import { useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const SurveyForm = ({ questions, survey }) => {
    const [firstSelect, setFirstSelect] = useState("");
    const [secondSelect, setSecondSelect] = useState("");
    const [thirdSelect, setThirdSelect] = useState("");
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure()

    const firstHandleChange = e => {
        setFirstSelect(e.target.value);
    }

    const secondHandleChange = e => {
        setSecondSelect(e.target.value)
    }

    const thirdHandleChange = e => {
        setThirdSelect(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const resultOne = firstSelect;
        const resultTwo = secondSelect;
        const resultThree = thirdSelect;
        if (!resultOne) {
            return toast.error("You didn't answer the first question")
        }
        if (!resultTwo) {
            return toast.error("You didn't answer the second question")
        }
        if (!resultThree) {
            return toast.error("You didn't answer the third question")
        }

        const voteData = [
            { questionId: 1, vote: resultOne },
            { questionId: 2, vote: resultTwo },
            { questionId: 3, vote: resultThree },
        ]
        const creationTime = new Date();

        try {
            const voteInformation = {
                surveyId: survey._id,
                surveyTitle: survey.title,
                surveyCategory: survey.category,
                voterName: user?.displayName,
                voterEmail: user?.email,
                time: creationTime,
                voteInfo: voteData
            }
            const { data } = await axiosSecure.post('/vote', voteInformation)
        
            if (data.VoteResult.modifiedCount && data.result.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You have voted successfully successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }
        catch (error) {
            console.log(error)
            console.log(error.response.data);
            toast.error("you have already voted in this survey. So you can't vote again")
        }
    }

    return (
        <div className='font-poppins'>
            <form onSubmit={handleSubmit}>

                <div className='space-y-4'>
                    <div>
                        <h1 className='text-xl font-semibold'>Title: {questions[0].title}</h1>
                        <p className='text-lg font-medium'>{questions[0].description}</p>
                        <input onChange={firstHandleChange} type="radio" name="agreement-one" id="first-yes" value="yes" />
                        <label>Yes</label><br />
                        <input onChange={firstHandleChange} type="radio" name="agreement-one" id="first-no" value="no" />
                        <label>No</label><br />
                    </div>

                    <div>
                        <h1 className='text-xl font-semibold'>Title: {questions[1].title}</h1>
                        <p className='text-lg font-medium'>{questions[1].description}</p>
                        <input onChange={secondHandleChange} type="radio" name="agreement-two" id="second-yes" value="yes" />
                        <label>Yes</label><br />
                        <input onChange={secondHandleChange} type="radio" name="agreement-two" id="second-no" value="no" />
                        <label>No</label><br />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Title: {questions[2].title}</h1>
                        <p className='text-lg font-medium'>{questions[2].description}</p>
                        <input onChange={thirdHandleChange} type="radio" name="agreement-three" id="third-yes" value="yes" />
                        <label>Yes</label><br />
                        <input onChange={thirdHandleChange} type="radio" name="agreement-three" id="third-no" value="no" />
                        <label>No</label><br />
                    </div>

                    <div className='mt-4'>
                        <button className='bg-[#859770] px-3 py-1 rounded-xl text-white hover:bg-black duration-500'>submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

SurveyForm.propTypes = {
    questions: PropTypes.array,
    survey: PropTypes.object,
}
export default SurveyForm;