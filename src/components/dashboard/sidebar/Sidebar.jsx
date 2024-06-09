import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import { Link } from 'react-router-dom'
import { MdDoneAll, MdOutlineCreateNewFolder, MdPayment, MdReportProblem } from 'react-icons/md'
import logo from '../../../../public/images/logo.png'
import Swal from 'sweetalert2'
import { CgProfile } from 'react-icons/cg'
import { IoCreateSharp } from 'react-icons/io5'
import { CiFaceFrown } from 'react-icons/ci'
import { FaCommentDots } from 'react-icons/fa'
import useRole from '../../../hooks/useRole'
import MenuItem from './menuItem/MenuItem'
import AdminMenu from './menuItem/AdminMenu'
import SurveyorMenu from './menuItem/SurveyorMenu'
import UserMenu from './menuItem/UserMenu'
import ProUserMenu from './menuItem/ProUserMenu'
import SharedMenu from './menuItem/SharedMenu'

const Sidebar = () => {
    const { logout, user } = useAuth()
    const [isActive, setActive] = useState(false)
    const navigate = useNavigate();
    const [role] = useRole();


    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = async () => {

        try {
            await logout()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Log out successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/login")
        }
        catch (error) {
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "logout failed",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-[#859770] text-[#35DC75CC] flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link className='flex items-center gap-2' to='/'>
                            <img
                                className='w-[10vw]'
                                src={logo}
                                alt='logo'
                                width='100'
                                height='100'
                            />
                            <h1 className='text-2xl font-bold text-[#35DC75CC]'>SurveyAtlas</h1>
                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#859770] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-1 shadow-lg rounded-lg justify-center items-center bg-[#859770] mx-auto'>
                            <Link to='/' className='flex items-center'>
                                <img className='md:w-[5vw] lg:w-[3vw]' src={logo} alt="logo" />
                                <h1 className='text-2xl font-bold text-[#35DC75CC]'>SurveyAtlas</h1>
                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* Conditional toggle button here.. */}

                        {/*  Menu Items */}
                        <nav>
                            <MenuItem label={"Statistic"} address={'/dashboard'} icon={BsGraphUp}></MenuItem>

                            {role === 'Admin' && <AdminMenu></AdminMenu>}
                            {role === 'Surveyor' && <SurveyorMenu></SurveyorMenu>}
                            {role === 'Guest' && <UserMenu></UserMenu>}
                            {role === 'Pro User' && <ProUserMenu></ProUserMenu>}
                            {(role === 'Surveyor' || role === 'Admin') && <SharedMenu></SharedMenu>}

                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    {/* profile menu */}
                    <MenuItem label={"Profile"} address={'/profile'} icon={CgProfile} image={user?.photoURL}></MenuItem>

                    <button
                        onClick={handleLogOut}
                        className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar