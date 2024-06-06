import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/images/logo.png'
import Navmenu from '../components/shared/Navmenu';
import { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';

import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import { CgProfile } from 'react-icons/cg';

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const { user, logout } = useAuth()
    const navigate = useNavigate()

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
                text: "invalid email or password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }
    return (
        <div className="font-poppins mx-[60px] px-8 rounded-full bg-[#859770] flex items-center justify-between sticky top-0 z-20">
            <div>
                <Link className='flex items-center'>
                    <img className='lg:w-[4vw]' src={logo} alt="logo" />
                    <h1 className='text-3xl font-bold text-[#35DC75CC]'>SurveyAtlas</h1>
                </Link>
            </div>

            <div className='flex items-center gap-3'>
                <Navmenu address={"/"} label={"Home"}></Navmenu>
                <Navmenu address={"/allsurveys"} label={"All Surveys"}></Navmenu>
            </div>

            <div>
                <details className="dropdown">
                    <summary className="btn bg-transparent border-none hover:bg-transparent">
                        {
                            user ? <img className='lg:w-[3vw] lg:h-[3vw] rounded-full' src={user?.photoURL} alt="user-photo" /> : <CgProfile className='text-4xl'></CgProfile>
                        }
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-[#859770] rounded-box w-[10vw]">
                        {user ? <div className='flex flex-col justify-start'>
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
                <div className="dropdown">
                    <button tabIndex={0} role="button"><MdDarkMode className='text-3xl text-black'></MdDarkMode> </button>
                    <ul onChange={handleTheme} tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box">
                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="default" /></li>
                        <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark" /></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;