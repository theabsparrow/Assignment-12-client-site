import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const SignUp = () => {

    const {register,handleSubmit,watch,formState: { errors },} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <div className="font-poppins">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-[35vw] mx-auto shadow-xl mt-5 border rounded-xl">
                <div>
                    <h1 className="text-3xl text-center">Sign Up Now</h1>
                </div>
                <div className="form-control">
                    <label>
                        <span className="label-text"> Name *</span>
                    </label>
                    <input type="text" placeholder="Enter your name" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="form-control">
                    <label>
                        <span className="label-text">Email*</span>
                    </label>
                    <input type="email" placeholder="email" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex items-center gap-3">
                    <label className="label">
                        <span className="label-text">Upload Image:</span>
                    </label>
                    <input type="file" name="image" id="image" />
                </div>

                <div className="form-control">
                    <label>
                        <span className="label-text">Password *</span>
                    </label>
                    <input type="password" placeholder="password" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="form-control">
                    <label>
                        <span className="label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="confirm password" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                </div>

                <div className="flex items-center justify-center gap-2">
                    <input type="checkbox" name="checked" id="checked" />
                    <p>Accept our terms and services.</p>
                </div>

                <div className="form-control">
                    <button className="btn btn-primary">Login</button>
                </div>

                <div>
                    <div className="divider">Social Login</div>
                </div>

                <div className="space-x-4 mx-auto shadow-xl rounded-xl px-8 py-1 border flex justify-center items-center">
                    <button><FcGoogle className="text-2xl shadow-xl rounded-full"></FcGoogle></button>
                    <button><FaGithub className="text-2xl shadow-xl rounded-full"></FaGithub></button>
                </div>

                <div>
                    <p>Already have an account? Please <Link to='/login'>Login</Link></p>
                    <p>Or</p>
                </div>
                <div>
                    <h1>go to <Link to='/'>Home</Link></h1>
                </div>

            </form>

        </div>

    );
};

export default SignUp;