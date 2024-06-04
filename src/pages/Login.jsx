import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";

const Login = () => {
    const { userLogin, setUser, setLoading, loading, user, loginWithGoogle } = useAuth()
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [displayPass, setDisplayPass] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])

    const onSubmit = async (data) => {
        const userEmail = data.email;
        const userPass = data.password;
        try {
            const result = await userLogin(userEmail, userPass)
            setUser(result.user)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login successfully!",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')

        }
        catch (error) {
            setLoading(false)
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "invalid email or password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle()
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully login with google",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')
        }
        catch (error) {
            setLoading(false)
            console.log(error)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "invalid email or password",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }
    if (user) {
        return
    }
    return (
        <div className="font-poppins card-body w-[35vw] mx-auto shadow-xl mt-5 border rounded-xl">

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-center">
                    <p className="text-lg font-medium">welcome to <span className="text-[#35DC75]">SurveyAtlass</span></p>
                    <h1 className="text-3xl font-semibold text-[#35DC75] mt-2">Login Now</h1>

                </div>

                <div className="form-control flex flex-col">
                    <label>
                        <span>Email*</span>
                    </label>
                    <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    {errors.email?.type === 'required' && <span className="text-lg text-red-500">Email is required *</span>}
                </div>

                <div className="form-control relative">
                    <label>
                        <span>Password *</span>
                    </label>
                    <input
                        type={displayPass ? "text" : "password"}
                        placeholder="password"
                        name="password"
                        {...register("password", {
                            required: true,
                        })}
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    {errors.password?.type === 'required' && <span className="text-lg text-red-500">Password required *</span>}

                    <span className="absolute top-9 right-2" onClick={() => setDisplayPass(!displayPass)}>{displayPass ? <IoEyeOff className="text-xl"></IoEyeOff> : <IoEye className="text-xl"></IoEye>}</span>
                </div>


                <div className="flex items-center gap-2">
                    <input type="checkbox" name="check" id="check" />
                    <h1>remember password</h1>
                </div>
                <div>
                    <label className="label">
                        <Link>Forget password?</Link>
                    </label>
                </div>

                <div className="form-control">
                    <button
                        disabled={loading}
                        className="btn bg-[#859770] hover:bg-[#35DC75] text-lg"
                        type="submit">
                        {loading ? <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner> : "Sign Up"}
                    </button>
                </div>
            </form>

            <div>
                <div>
                    <div className="divider">Social Login</div>
                </div>

                <div className="space-x-4 mx-auto shadow-xl rounded-xl px-8 py-1 border-[1px] border-[#35DC75] flex justify-center items-center ">
                    <button 
                    disabled={loading}
                    onClick={handleGoogleLogin}
                    ><FcGoogle
                        className="disabled:cursor-not-allowed cursor-pointer text-3xl shadow-xl rounded-full hover:scale-110 duration-300">
                     </FcGoogle>
                    </button>
                    <button><FaGithub className="text-3xl shadow-xl rounded-full hover:scale-110 duration-300"></FaGithub></button>
                </div>

                <div className="text-center">
                    <p>New to this site? Please <Link to='/signup' className="text-[#289521] text-xl font-medium ">Sign up</Link></p>
                    <p>Or</p>
                </div>
                <div className="text-center">
                    <h1>Go to <Link className="bg-[#859770] px-2 py-1 rounded-xl text-white hover:bg-[#289521] duration-200" to='/'>Home</Link></h1>
                </div>
            </div>

        </div>
    );
};

export default Login;