import PropTypes from 'prop-types';
import { useState } from 'react';

const SurveyForm = ({ questions }) => {
    const [firstSelect, setFirstSelect] = useState("");
    const [secondSelect, setSecondSelect] = useState("");
    const [thirdSelect, setThirdSelect] = useState("");

    const firstHandleChange = e => {
        setFirstSelect(e.target.value);
    }

    const secondHandleChange = e => {
        setSecondSelect(e.target.value)
    }

    const thirdHandleChange = e => {
        setThirdSelect(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        const resultOne = firstSelect;
        const resultTwo = secondSelect;
        const resultThree = thirdSelect;
        console.log(resultOne, resultTwo, resultThree)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <div>
                    <h1>Title: {questions[0].title}</h1>
                    <p>{questions[0].description}</p>
                    <input onChange={firstHandleChange} type="radio" name="agreement-one" id="first-yes" value="yes" />
                    <label>Yes</label><br />
                    <input onChange={firstHandleChange} type="radio" name="agreement-one" id="first-no" value="no" />
                    <label>No</label><br />
                </div>

                <div>
                    <h1>Title: {questions[1].title}</h1>
                    <p>{questions[1].description}</p>
                    <input onChange={secondHandleChange} type="radio" name="agreement-two" id="second-yes" value="yes" />
                    <label>Yes</label><br />
                    <input onChange={secondHandleChange} type="radio" name="agreement-two" id="second-no" value="no" />
                    <label>No</label><br />
                </div>
                <div>
                    <h1>Title: {questions[2].title}</h1>
                    <p>{questions[2].description}</p>
                    <input onChange={thirdHandleChange} type="radio" name="agreement-three" id="third-yes" value="yes" />
                    <label>Yes</label><br />
                    <input onChange={thirdHandleChange} type="radio" name="agreement-three" id="third-no" value="no" />
                    <label>No</label><br />
                </div>

                <div className='mt-4'>
                    <button>submit</button>
                </div>
            </form>
        </div>
    );
};

SurveyForm.propTypes = {
    questions: PropTypes.array,
}
export default SurveyForm;