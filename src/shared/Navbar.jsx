import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/images/logo.png'
import Navmenu from '../components/shared/Navmenu';
import { useEffect, useState } from 'react';
import { MdDarkMode, MdOutlineMenu } from 'react-icons/md';

import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { CgProfile } from 'react-icons/cg';
import { RxCross2 } from 'react-icons/rx';
import useRole from '../hooks/useRole';
import { FaCrown } from 'react-icons/fa';

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [display, setDisplay] = useState(false);
    const [role] = useRole();


    useEffect(() => {
        localStorage.setItem("userTheme", theme)
        const uiTheme = localStorage.getItem("userTheme")
        document.querySelector('html').setAttribute('data-theme', uiTheme)
    }, [theme])

    const handleTheme = e => {
        if (e.target.value === "dark") {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
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
        <div className="font-poppins lg:mx-[60px] px-8 rounded-full bg-[#859770] flex items-center justify-between sticky top-0 z-20">
            <div>
                <Link className='flex items-center'>
                    <img className='w-[15vw] lg:w-[4vw]' src={logo} alt="logo" />
                    <h1 className='text-4xl lg:text-3xl font-bold text-[#35DC75CC]'>SurveyAtlas</h1>
                </Link>
            </div>

            {/* large device only */}
            <div className='hidden lg:flex items-center'>

                <div className='flex items-center gap-3'>
                    <Navmenu address={"/"} label={"Home"}></Navmenu>
                    <Navmenu address={"/allsurveys"} label={"All Surveys"}></Navmenu>
                    <Navmenu address={"/dashboard"} label={"Dashboard"}></Navmenu>
                </div>

                <div>
                    <details className="dropdown">
                        <summary className="btn bg-transparent border-none hover:bg-transparent">
                            {
                                user ? <img className='lg:w-[3vw] lg:h-[3vw] rounded-full' src={user?.photoURL} alt="user-photo" /> : <CgProfile className='text-4xl'></CgProfile>
                            }
                        </summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#859770] rounded-box w-[10vw]">
                            {user ? <div className='flex flex-col space-y-4 justify-start'>
                                {
                                    user && <div>
                                        <h1 className='text-[#35DC75CC] px-3 py-2 text-lg font-medium'>{user?.displayName}</h1>
                                    </div>
                                }
                                <div>
                                    <Navmenu address={"/profile"} label={"Profile"}></Navmenu>
                                </div>
                                <div>
                                    <button onClick={handleLogOut} className='text-white px-3 py-2 font-medium text-lg hover:bg-[white] hover:text-[#859770] rounded-xl'>Log out</button>
                                </div>
                            </div> : <> <li><Navmenu address={"/login"} label={"Login"}></Navmenu></li>
                                <li><Navmenu address={"/signup"} label={"Sign Up"}></Navmenu></li>
                            </>}

                        </ul>
                    </details>
                </div>

                <div>
                    {
                        (user && role === 'Guest') && <>
                            <div className='flex items-center'>
                                <Navmenu address={"/payment"} label={"Be a Pro user"} icon={FaCrown}></Navmenu>
                                {/* <FaCrown className='text-yellow-500 text-3xl' /> */}
                            </div>
                        </>
                    }
                </div>
            </div>

            {/* small device */}
            <div className={`${display ? "right-2 " : "hidden"} duration-1000 lg:hidden z-10 absolute top-[70px] space-y-3 flex flex-col items-start shadow-xl rounded-xl p-3 bg-slate-400 `}>
                <div className='space-y-5'>
                    <Navmenu address={"/"} label={"Home"}></Navmenu>
                    <Navmenu address={"/allsurveys"} label={"All Surveys"}></Navmenu>
                    <Navmenu address={"/dashboard"} label={"Dashboard"}></Navmenu>
                </div>
                {user ? <div className='flex flex-col justify-start'>
                    <div className='flex'>
                        <Navmenu address={"/profile"} label={"Profile"}></Navmenu>

                    </div>

                    <div>
                        <h1 className='text-[#35DC75CC] px-3 py-2 text-lg font-medium'>{user?.displayName}</h1>
                    </div>

                    <div>
                        <button onClick={handleLogOut} className='text-white px-3 py-2 font-medium text-lg hover:bg-[white] hover:text-[#859770] rounded-xl'>Log out</button>
                    </div>

                </div> : <> <li><Navmenu address={"/login"} label={"Login"}></Navmenu></li>
                    <li><Navmenu address={"/signup"} label={"Sign Up"}></Navmenu></li>
                </>}
            </div>

            <div className='flex items-center gap-2'>
                {
                    role === "Pro-User" && <div>
                        <FaCrown className='text-yellow-500 text-3xl'></FaCrown>
                    </div>
                }
                <div className="dropdown">
                    <button tabIndex={0} role="button"><MdDarkMode className='text-5xl lg:text-3xl text-black'></MdDarkMode> </button>
                    <ul onChange={handleTheme} tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box">
                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default" /></li>
                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark" /></li>
                    </ul>
                </div>
            </div>

            {/* hamburger icon*/}
            <div onClick={() => setDisplay(!display)} className='lg:hidden'>
                {
                    display === true ? <RxCross2 className='text-5xl text-white'></RxCross2> : <MdOutlineMenu className='text-5xl text-white'></MdOutlineMenu>
                }
            </div>

        </div>
    );
};

export default Navbar;