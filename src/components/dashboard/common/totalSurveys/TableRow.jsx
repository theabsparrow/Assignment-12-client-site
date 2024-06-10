import PropTypes from 'prop-types';

const TableRow = ({ surveyCards, isLoading, refetch, role }) => {
    return (
        <>
            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                {
                    surveyCards.map((surveyCard, index) => (
                        <tr key={surveyCard._id}>
                            <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                <div>
                                    <h2 className="font-medium text-gray-800 dark:text-white "><span>No.</span> {index + 1}</h2>
                                </div>
                            </td>

                            <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                    {surveyCard.title}
                                </div>
                            </td>

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div>
                                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyCard.category}</h4>
                                </div>
                            </td>

                            <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center">
                                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyCard.totalYesVotes}</h4>
                                </div>
                            </td>

                            <td className={`px-4 py-4 text-sm whitespace-nowrap `}>
                                <div className=" overflow-hidden">
                                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyCard.totalNoVotes}</h4>
                                </div>
                            </td>

                            <td className={`px-4 py-4 text-sm whitespace-nowrap `}>
                                <div className=" overflow-hidden">
                                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyCard.totalVotes}</h4>
                                </div>
                            </td>

                            {
                                role === "Admin"? <td className={`px-4 py-4 text-sm whitespace-nowrap `}>
                                <div className=" overflow-hidden">
                                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyCard.status}</h4>
                                </div>
                            </td> : <td className={`px-4 py-4 text-sm whitespace-nowrap `}>
                                <div className=" overflow-hidden">
                                    <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">update</h4>
                                </div>
                            </td>
                            }

                            

                           
                        </tr>
                    ))
                }

            </tbody>
        </>
    );
};

TableRow.propTypes = {
    surveyCards: PropTypes.array,
    isLoading: PropTypes.bool,
    refetch: PropTypes.func,
    role: PropTypes.string,
}
export default TableRow;