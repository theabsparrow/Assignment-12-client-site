import useAllPayments from "../../../../hooks/useAllPayments";


const AllPayments = () => {
    const [paymentInfo] = useAllPayments();
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
                                    <h1>Name</h1>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <h1>Email</h1>
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Photo</th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">TransactionID</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            {
                                paymentInfo.map((singlepaymentInfo, index) => (
                                    <tr key={singlepaymentInfo._id}>
                                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                            <div>
                                                <h2 className="font-medium text-gray-800 dark:text-white "><span>No.</span> {index + 1}</h2>
                                            </div>
                                        </td>

                                        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                {singlepaymentInfo.name}
                                            </div>
                                        </td>

                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div>
                                                <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{singlepaymentInfo.email}</h4>
                                            </div>
                                        </td>

                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="flex items-center">
                                                <img className="w-[4vw] rounded-full" src={singlepaymentInfo.photo} alt="" />
                                            </div>
                                        </td>

                                        <td className={`px-4 py-4 text-sm whitespace-nowrap `}>
                                            <div>
                                                <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{singlepaymentInfo.transactionId}</h4>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </section>
        </div>
    );
};

export default AllPayments;