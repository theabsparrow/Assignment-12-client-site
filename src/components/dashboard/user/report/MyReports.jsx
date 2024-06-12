import PropTypes from 'prop-types';

const MyReports = ({ report, index }) => {
    const { surveyName, surveyCategory, surveyId, userName, time } = report;

    const date = new Date(time);

    const formattedDate = date.toLocaleDateString();
    const formattedTime = date.toLocaleTimeString();

    return <>
        <tr>
            <td className="py-4 text-sm font-medium whitespace-nowrap">
                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                    {index+1}
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{userName}</h4>
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyId}</h4>
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyName}</h4>
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyCategory}</h4>
                </div>
            </td>

            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{formattedTime}</h4>
                </div>
            </td>
            <td className="px-4 py-4 text-sm whitespace-nowrap">
                <div>
                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{formattedDate}</h4>
                </div>
            </td>
        </tr>
    </>;
};

MyReports.propTypes = {
    report: PropTypes.object,
    index: PropTypes.number,
}
export default MyReports;