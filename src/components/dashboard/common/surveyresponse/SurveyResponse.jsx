import useAllVotes from "../../../../hooks/useAllVotes";
import SurveyRes from "./SurveyRes";


const SurveyResponse = () => {
    const [allVotes, isLoading] = useAllVotes();

    if (isLoading) {
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }

    return (
        <div className="w-[calc(100vw-275px)] font-poppins">
            {
                allVotes.length ? <section className="container mx-auto w-full">
                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">

                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    
                                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <h1>Survey ID</h1>
                                    </th>
                                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <h1>Voter name</h1>
                                    </th>
                                    <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <h1>Voter email</h1>
                                    </th>

                                    <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <h1>Survey Title</h1>
                                    </th>

                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <h1>Category</h1>
                                    </th>

                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <h1>No 1 vote</h1>
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <h1>No 2 vote</h1>
                                    </th>
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <h1>No 3 vote</h1>
                                    </th>
                                    
                                </tr>
                            </thead>

                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                {
                                    allVotes.map((allVote) => <SurveyRes key={allVote._id} allVote={allVote}></SurveyRes>)
                                }

                            </tbody>

                        </table>
                    </div>
                </section> : <div className="mt-10 flex justify-center">
                    <h1 className="text-4xl font-bold">Nobody voted till now</h1>
                </div>
            }
        </div>
    );
};

export default SurveyResponse;