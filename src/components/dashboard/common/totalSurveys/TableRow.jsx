import PropTypes from 'prop-types';
import { useState } from 'react';
import UpdateModal from '../../../modal/UpdateModal';
import { useMutation } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const TableRow = ({ surveyCard, isLoading, refetch, role, index }) => {
    const [isOpen, setIsOpen] = useState(false);
const axiosSecure = useAxiosSecure()

    const {mutateAsync} = useMutation({
        mutationFn: async(statusInfo) => {
            const {data} = await axiosSecure.patch(`/totalsurvey/update/${surveyCard?._id}`, statusInfo);
            return data
        },
        onSuccess: (data) => {
            console.log(data);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "status updated successfully",
                showConfirmButton: false,
                timer: 1500
            });
            refetch()
            setIsOpen(false)
        }
    })


    const modalHandler = async (selected) => {
        console.log(selected)
        const statusInfo = {
            status: selected,
        }
        try {
            await mutateAsync(statusInfo)
        }
        catch(error) {
            console.log(error)
        }
    }

    return (
        <>
            <tr>
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
                    role === "Admin" ? <td className={`px-4 py-4 text-sm whitespace-nowrap `}>
                        <div className=" overflow-hidden">
                            <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyCard.report}</h4>
                        </div>
                    </td> : <td className={`px-4 py-4 text-sm whitespace-nowrap `}>
                        <div className=" overflow-hidden">
                            <Link to='update' className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">update</Link>
                        </div>
                    </td>
                }

                {
                    role === 'Admin' && <td className={`px-4 py-4 text-sm whitespace-nowrap `}>
                        <div className=" overflow-hidden">
                            <h4 className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">{surveyCard.status}</h4>
                        </div>
                    </td>
                }

                {
                    role === 'Admin' && <td className={`px-4 py-4 text-sm whitespace-nowrap `}>
                        <div className=" overflow-hidden">
                            <button
                                onClick={()=> setIsOpen(true)}
                                className="text-gray-700 dark:text-gray-200 bg-[#4E31B069] inline px-3 py-1 font-normal rounded-full">
                                Update
                            </button>
                        </div>
                        <UpdateModal isOpen={isOpen} setIsOpen={setIsOpen} modalHandler={modalHandler} surveyCard={surveyCard}></UpdateModal>
                    </td>
                }

            </tr>
        </>
    );
};

TableRow.propTypes = {
    surveyCard: PropTypes.object,
    isLoading: PropTypes.bool,
    refetch: PropTypes.func,
    role: PropTypes.string,
    index: PropTypes.number,
}
export default TableRow;