

const AllUsers = () => {
    return (
        <div className="flex justify-center w-[calc(100vw-270px)]">

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

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Role</th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">Status</th>
                            </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                            <tr>
                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                    <div>
                                        <h2 className="font-medium text-gray-800 dark:text-white ">No. 1</h2>
                                    </div>
                                </td>

                                <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                    <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                        Bashar
                                    </div>
                                </td>

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div>
                                        <h4 className="text-gray-700 dark:text-gray-200">bashar@gmnail.com</h4>
                                    </div>
                                </td>

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center">
                                        <h1 className="text-white">photo</h1>
                                    </div>
                                </td>

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className=" overflow-hidden rounded-full">
                                        <h1 className="text-white">guest</h1>
                                    </div>
                                </td>

                                <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <h1 className="text-white">Active</h1>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </section>

        </div>
    );
};

export default AllUsers;