
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from "axios";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { TbFidgetSpinner } from "react-icons/tb";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from "react-helmet";
import SocialLogin from "../components/socialLogin/SocialLogin";
import useAxiosPublic from "../hooks/useAxiosPublic";






const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [errorPass, setErrorPass] = useState('');
    const [displayPass, setDisplayPass] = useState(false);
    const [displayConfirmPass, setDisplayConfirmPass] = useState(false);
    const { createUser, setUser, updateUserProfile, setLoading, loading, user, } = useAuth()
    const navigate = useNavigate()
    const [Captcha, setCaptcha] = useState('')
    const [errorCaptcha, setErrorCaptcha] = useState('')
    const [disable, setDisable] = useState(true)
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])


    const handleCaptcha = (e) => {
        setCaptcha("")
        setErrorCaptcha("")
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setCaptcha("captcha matched successfully")
            setDisable(false)
        }

        else {
            return (setErrorCaptcha("captcha didn't matched, try again"),
                setDisable(true)
            )
        }
    }

    const onSubmit = async (data) => {
        const userName = data.name;
        const userEmail = data.email;
        const userImage = data.image[0];
        const userPass = data.password;
        setErrorPass("")
        if (data.password !== data.confirmPass) {
            setErrorPass('password and confirm Password doesn`t match')
            return
        }

        const formData = new FormData();
        formData.append('image', userImage)

        try {
            setLoading(true)

            // image upload section
            const { data } = await axios.post(
                `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY
                }`,
                formData
            )
            const image = data.data.display_url

            // user register
            const result = await createUser(userEmail, userPass)
            setUser(result.user)
            await updateUserProfile(userName, image)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully signed up",
                showConfirmButton: false,
                timer: 1500
            });
            navigate('/')

            const userInfo = {
                email: result.user.email,
                name: result.user.displayName,
                role: "guest",
                timestamp: Date.now()
            }
            const { data:userData } = await axiosPublic.post('/user', userInfo);
            console.log(userData);
            
        }

        catch (error) {
            console.log(error)
            setLoading(false)
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: { error },
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }

    useEffect(() => {
        if (user ) {
            navigate('/')
        }
    }, [navigate, user])


    if (user) {
        return
    }

    return (
        <div className="card-body w-[35vw] mx-auto shadow-xl mt-5 border rounded-xl font-poppins">
            <Helmet>
                <title>Sign Up || surveyAtlas</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className="text-center">
                    <p className="text-lg font-medium">welcome to <span className="text-[#35DC75]">SurveyAtlass</span></p>
                    <h1 className="text-3xl font-semibold text-[#35DC75] mt-2">Sign Up Now</h1>

                </div>

                {/* name */}
                <div className="form-control">
                    <label>
                        <span> Name *</span>
                    </label>
                    <input type="text" name="name" {...register("name", { required: true, maxLength: 15 })} placeholder="Enter your name" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    {errors.name?.type === 'required' && <span className="text-lg text-red-500">Name is required *</span>}
                    {errors.name?.type === 'maxLength' && <span className="text-lg text-red-500">Name should not be more than 15 characters </span>}
                </div>

                {/* email */}
                <div className="form-control flex flex-col mt-2">
                    <label>
                        <span>Email*</span>
                    </label>
                    <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    {errors.email?.type === 'required' && <span className="text-lg text-red-500">Email is required *</span>}
                </div>

                {/* image */}
                <div className="mt-2">
                    <label>
                        <span>Upload Image : </span>
                    </label>
                    <input type="file" name="image" {...register("image", { required: true })} id="image" />
                    {errors.image?.type === 'required' && <span className="text-lg text-red-500">Photo file required *</span>}
                </div>

                {/* password */}
                <div className="form-control relative mt-2">
                    <label>
                        <span>Password *</span>
                    </label>
                    <input
                        type={displayPass ? "text" : "password"}
                        placeholder="password"
                        name="password"
                        {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })}
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    {errors.password?.type === 'required' && <span className="text-lg text-red-500">Password required *</span>}
                    {errors.password?.type === 'minLength' && <span className="text-lg text-red-500">Password should be at least 6 character</span>}
                    {errors.password?.type === 'maxLength' && <span className="text-lg text-red-500">Password should not be more than 20 character </span>}
                    {errors.password?.type === 'pattern' && <span className="text-lg text-red-500">Password must have one uppercase, one lowercase, one number and one special character</span>}
                    <span className="absolute top-9 right-2" onClick={() => setDisplayPass(!displayPass)}>{displayPass ? <IoEyeOff className="text-xl"></IoEyeOff> : <IoEye className="text-xl"></IoEye>}</span>
                </div>

                {/* confirm password */}
                <div className="form-control relative mt-2">
                    <label>
                        <span>Confirm Password *</span>
                    </label>
                    <input
                        type={displayConfirmPass ? "text" : "password"}
                        placeholder="confirm password"
                        name="confirmPass"
                        {...register("confirmPass", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })}
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    {errors.confirmPass?.type === 'required' && <span className="text-lg text-red-500">Confirm Password required *</span>}
                    {errors.confirmPass?.type === 'minLength' && <span className="text-lg text-red-500">Confirm Password should be at least 6 character</span>}
                    {errors.confirmPass?.type === 'maxLength' && <span className="text-lg text-red-500">Confirm Password should not be more than 20 character </span>}
                    {errors.confirmPass?.type === 'pattern' && <span className="text-lg text-red-500">Confirm Password must have one uppercase, one lowercase, one number and one special character</span>}
                    {errorPass && <span className="text-lg text-red-500">{errorPass}</span>}
                    <span className="absolute top-9 right-2" onClick={() => setDisplayConfirmPass(!displayConfirmPass)}>{displayConfirmPass ? <IoEyeOff className="text-xl"></IoEyeOff> : <IoEye className="text-xl"></IoEye>}</span>
                </div>

                {/* terms and service */}
                <div className="flex flex-col justify-center gap-2 mt-2">
                    <div className="flex items-center">
                        <input type="checkbox" name="checked" {...register("checked", {
                            required: true,
                        })} id="checked" />
                        <p>Accept our terms and services.</p>
                    </div>
                    {errors.checked?.type === 'required' && <span className="text-lg text-red-500">You need to accept our terms and services *</span>}
                </div>

                {/* recaptcha */}
                <div className="form-control flex flex-col mt-2">
                    <label className="label">
                        <LoadCanvasTemplate />
                    </label>
                    <input
                        name="captcha"
                        {...register("captcha", {
                            required: true,
                        })}
                        onBlur={handleCaptcha}
                        type="text"
                        placeholder="type the captcha above"
                        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                    {errors.captcha?.type === 'required' && <span className="text-lg text-red-500">You need to type correct recaptcha *</span>}
                    {Captcha && <span className="text-green-500">{Captcha}</span>}
                    {errorCaptcha && <span className="text-red-600">{errorCaptcha}</span>}
                </div>

                <div className="form-control mt-2">
                    <button
                        disabled={loading || disable}
                        type="submit"
                        className="btn bg-[#859770] hover:bg-[#35DC75] text-lg">
                        {loading ? <TbFidgetSpinner className="animate-spin m-auto"></TbFidgetSpinner> : "Sign up"}
                    </button>
                </div>
            </form>
            <div>
                <div>
                    <div className="divider divider-success text-[#35DC75]">Social Login</div>
                </div>
                <div>
                    <SocialLogin></SocialLogin>
                </div>

                <div className="text-center mt-2">
                    <p>Already have an account? Please <Link to='/login' className="text-[#289521] text-xl font-medium ">Login</Link></p>
                    <p>Or</p>
                </div>
                <div className="text-center mt-2">
                    <h1>Go to <Link className="bg-[#859770] px-2 py-1 rounded-xl text-white hover:bg-[#289521] duration-200" to='/'>Home</Link></h1>
                </div>
            </div>

        </div>

    );
};

export default SignUp;