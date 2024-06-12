import PropTypes from 'prop-types';

const SurveyRes = ({allVote}) => {
    const {surveyId, surveyTitle, surveyCategory, voterName, voterEmail, time, voteInfo,} = allVote;
    return (
        <>
         <tr>
                <td className="py-4 text-sm font-medium whitespace-nowrap">
                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                        {surveyId}
                    </div>
                </td>

                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div>
                        <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{voterName}</h4>
                    </div>
                </td>

                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div>
                        <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{voterEmail}</h4>
                    </div>
                </td>

                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div>
                        <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyTitle}</h4>
                    </div>
                </td>

                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div>
                        <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyCategory}</h4>
                    </div>
                </td>

                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div>
                        <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{voteInfo[0].vote}</h4>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div>
                        <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{voteInfo[1].vote}</h4>
                    </div>
                </td>
                <td className="px-4 py-4 text-sm whitespace-nowrap">
                    <div>
                        <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{voteInfo[2].vote}</h4>
                    </div>
                </td>
            </tr>
        </>
    );
};

SurveyRes.propTypes = {
    allVote: PropTypes.object
}
export default SurveyRes;