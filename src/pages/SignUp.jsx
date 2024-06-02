import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { useState } from "react";


const SignUp = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const [errorPass, setErrorPass] = useState('');

    const onSubmit = (data) => {
        setErrorPass("")
        if (data.password !== data.confirmPass) {
            setErrorPass('password and confirm Password doesn`t match')
            return
        }

    }


    return (
        <div className="font-poppins">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[35vw] mx-auto shadow-xl mt-5 border rounded-xl">
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
                <div className="form-control flex flex-col">
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
                <div className="form-control">
                    <label>
                        <span>Password *</span>
                    </label>
                    <input
                        type="password"
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
                </div>

                {/* confirm password */}
                <div className="form-control">
                    <label>
                        <span>Confirm Password *</span>
                    </label>
                    <input
                        type="password"
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
                </div>

                {/* terms and service */}
                <div className="flex flex-col justify-center gap-2">
                    <div className="flex items-center">
                        <input type="checkbox" name="checked" {...register("checked", {
                            required: true,
                        })} id="checked" />
                        <p>Accept our terms and services.</p>
                    </div>
                    {errors.checked?.type === 'required' && <span className="text-lg text-red-500">You need to accept our terms and services *</span>}
                </div>

                <div className="form-control">
                    <button className="btn bg-[#859770] hover:bg-[#35DC75] text-lg">Sign Up</button>
                </div>

                <div>
                    <div className="divider divider-success text-[#35DC75]">Social Login</div>
                </div>

                <div className="space-x-4 mx-auto shadow-xl rounded-xl px-8 py-1 border-[1px] border-[#35DC75] flex justify-center items-center ">
                    <button><FcGoogle className="text-3xl shadow-xl rounded-full hover:scale-110 duration-300"></FcGoogle></button>
                    <button><FaGithub className="text-3xl shadow-xl rounded-full hover:scale-110 duration-300"></FaGithub></button>
                </div>

                <div className="text-center">
                    <p>Already have an account? Please <Link to='/login' className="text-[#289521] text-xl font-medium ">Login</Link></p>
                    <p>Or</p>
                </div>
                <div className="text-center">
                    <h1>Go to <Link className="bg-[#859770] px-2 py-1 rounded-xl text-white hover:bg-[#289521] duration-200" to='/'>Home</Link></h1>
                </div>
            </form>

        </div>

    );
};

export default SignUp;