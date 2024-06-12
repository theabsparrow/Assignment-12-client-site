import { Helmet } from "react-helmet";
import useAuth from "../hooks/useAuth";
import cover from '../../public/images/Cover.png';
import useRole from "../hooks/useRole";


const Profile = () => {
    const { user } = useAuth();
    const [role] = useRole();

   
   

    // if (loading || isLoading) {
    //     return <div>
    //         <span className="loading loading-bars loading-xs"></span>
    //         <span className="loading loading-bars loading-sm"></span>
    //         <span className="loading loading-bars loading-md"></span>
    //         <span className="loading loading-bars loading-lg"></span>
    //     </div>
    // }
    return (
        <div className="lg:w-[calc(100vw-275px)] font-poppins mt-10">
            <Helmet>
                <title>Profile || surveyAtlas</title>
            </Helmet>
            <div className='flex justify-center items-center'>
                <Helmet>
                    <title>Profile</title>
                </Helmet>
                <div className='bg-white shadow-lg rounded-2xl lg:w-[70vw] lg:h-[80vh]'>
                    <img
                        alt='profile'
                        src={cover}
                        className='w-full mb-4 rounded-t-lg h-36'
                    />
                    <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                        <a href='#' className='relative block'>
                            <img
                                alt='profile'
                                src={user?.photoURL}
                                className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                            />
                        </a>

                        <p className='p-2 px-4 text-xs text-white bg-[#859770] rounded-full'>
                            {role}
                        </p>
                        <p className='mt-2 text-xl font-medium text-gray-800 '>
                            User Id: {user.uid}
                        </p>
                        <div className='w-full p-2 mt-4 rounded-lg'>
                            <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                                <p className='flex flex-col'>
                                    Name
                                    <span className='font-bold text-black '>
                                        {user.displayName}
                                    </span>
                                </p>
                                <p className='flex flex-col'>
                                    Email
                                    <span className='font-bold text-black '>{user.email}</span>
                                </p>

                                <div>
                                    <button className='bg-[#859770] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                        Update Profile
                                    </button>
                                    <button className='bg-[#859770] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                        Change Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;