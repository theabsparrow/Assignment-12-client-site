import { Link } from 'react-router-dom';
import logo from '../../public/images/logo.png'
import Navmenu from '../components/shared/Navmenu';
import { useEffect, useState } from 'react';
import { MdDarkMode } from 'react-icons/md';

const Navbar = () => {
    const [theme, setTheme] = useState("light");

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
    return (
        <div className="font-poppins mx-[60px] border px-8 rounded-full bg-[#859770] flex items-center justify-between">
            <div>
                <Link className='flex items-center'>
                    <img className='lg:w-[4vw]' src={logo} alt="logo" />
                    <h1 className='text-3xl font-bold text-[#35DC75CC]'>SurveyAtlas</h1>
                </Link>
            </div>
            <div className='flex items-center gap-3'>
                <Navmenu address={"/"} label={"Home"}></Navmenu>
                <Navmenu address={"/login"} label={"Login"}></Navmenu>
                <Navmenu address={"/Signup"} label={"Sign Up"}></Navmenu>
            </div>
            <div>
                <div className="dropdown">
                    <button tabIndex={0} role="button"><MdDarkMode className='text-3xl text-white'></MdDarkMode> </button>
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