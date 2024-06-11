import useRole from "../../../../hooks/useRole";
import useTotalSurvey from "../../../../hooks/useTotalSurvey";
import TableRow from "./TableRow";


const TotalSurveys = () => {
    const [surveyCards, isLoading, refetch] = useTotalSurvey();
    const [role] = useRole();

    return (
        <div className="flex justify-center w-[calc(100vw-275px)] font-poppins">

            <section className="container mx-auto w-full">
                <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">

                        <thead className="bg-gray-50 dark:bg-gray-800">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <h1>Serial</h1>
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <h1>Title</h1>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <h1>Category</h1>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Yes Votes</th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">No Votes</th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Total Votes</th>

                                {
                                    role === 'Admin' && <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Report Status</th>
                                }

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">{role === 'Admin' ? "Status" : "Update"}</th>

                                {
                                  role === 'Admin' && <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Update Status</th>
                                }
                                
                            </tr>
                        </thead>

                        <TableRow surveyCards={surveyCards} isLoading={isLoading} refetch={refetch} role={role}></TableRow>

                    </table>
                </div>
            </section>
        </div>
    );
};

export default TotalSurveys;