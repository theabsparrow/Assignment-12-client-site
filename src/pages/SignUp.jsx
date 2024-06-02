import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const SignUp = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="font-poppins">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[35vw] mx-auto shadow-xl mt-5 border rounded-xl">
                <div className="text-center">
                    <p className="text-lg font-medium">welcome to <span className="text-[#35DC75]">SurveyAtlass</span></p>
                    <h1 className="text-3xl font-semibold text-[#35DC75] mt-2">Sign Up Now</h1>

                </div>

                <div className="form-control">
                    <label>
                        <span> Name *</span>
                    </label>
                    <input type="text" name="name" {...register("name")} placeholder="Enter your name" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="form-control">
                    <label>
                        <span>Email*</span>
                    </label>
                    <input type="email" name="email" {...register("email")} placeholder="email" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex items-center gap-3 mt-2">
                    <label>
                        <span>Upload Image:</span>
                    </label>
                    <input type="file" name="image" {...register("image")} id="image" />
                </div>

                <div className="form-control">
                    <label>
                        <span>Password *</span>
                    </label>
                    <input type="password" placeholder="password" name="password" {...register("password")} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="form-control">
                    <label>
                        <span>Confirm Password *</span>
                    </label>
                    <input type="password" placeholder="confirm password" name="confirm-pass" {...register("confirm-pass")} className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex items-center justify-center gap-2">
                    <input type="checkbox" name="checked" {...register("checked")} id="checked" />
                    <p>Accept our terms and services.</p>
                </div>

                <div className="form-control">
                    <button className="btn bg-[#859770] hover:bg-[#35DC75] text-lg">Sign Up</button>
                </div>

                <div className="border">
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