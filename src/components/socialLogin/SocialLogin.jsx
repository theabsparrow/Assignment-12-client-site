import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";


const SocialLogin = () => {
    const { loginWithGoogle, loading, setLoading } = useAuth()
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate()


    const handleGoogleLogin = async () => {
        try {
            const result = await loginWithGoogle();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Successfully login with google",
                showConfirmButton: false,
                timer: 1500
            });

            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
                role: "Guest",
                timestamp: Date.now(),
                photo: result.user?.photoURL,
                status: "Active"
            }
            const { data } = await axiosPublic.post('/user', userInfo);
            console.log(data);
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

    return (
        <div>
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
        </div>
    );
};

export default SocialLogin;