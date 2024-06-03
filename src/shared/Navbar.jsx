import { Link, useNavigate } from 'react-router-dom';
import logo from '../../public/images/logo.png'
import Navmenu from '../components/shared/Navmenu';
import { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';

import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';

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
        <div className="font-poppins mx-[60px] px-8 rounded-full bg-[#859770] flex items-center justify-between sticky top-0">
            <div>
                <Link className='flex items-center'>
                    <img className='lg:w-[4vw]' src={logo} alt="logo" />
                    <h1 className='text-3xl font-bold text-[#35DC75CC]'>SurveyAtlas</h1>
                </Link>
            </div>
            <div className='flex items-center gap-3'>
                <Navmenu address={"/"} label={"Home"}></Navmenu>
                {
                    user ? <button onClick={handleLogOut} className='text-white px-3 py-2 font-medium text-lg hover:text-[#859770] hover:bg-[white] hover:rounded-xl'>Log out</button> : <div className='flex items-center gap-3'>
                        <Navmenu address={"/login"} label={"Login"}></Navmenu>
                        <Navmenu address={"/signup"} label={"Sign Up"}></Navmenu>
                    </div>
                }
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
            <div>
                {
                    user && <h1>{user?.displayName}</h1>
                }
            </div>
        </div>
    );
};

export default Navbar;