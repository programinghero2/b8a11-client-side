import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../components/Provider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import UseSwipter from '../../components/UseSwiper/UseSwipter';
const Login = () => {
    const { loginUser, googleSingIn } = useContext(AuthContext)
    const { state } = useLocation()
    const navigate = useNavigate()
    console.log(state)
    const singUp = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then((result) => {
                toast("login successfully")
                navigate(state)
            })
            .catch(error => {
                toast(error.message)
            })
    }
    const handleGoogleLogin = () => {
        googleSingIn()
            .then(() => {
                toast("login successfully")
                navigate(state)

            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className="flex shadow-2xl md:border mt-5 h-[82vh] md:w-4/5 lg:w-3/4 mx-auto">
            <Helmet>
                <title>HirePark || Login</title>
            </Helmet>
            <div className="md:w-1/2 bg-[#4F86C4] hidden md:block ">
                <p className='text-2xl lg:text-3xl font-bold text-center text-white mt-3 mb-8'>Grow with HirePark</p>
                <div className='flex justify-center items-center '>
                    <UseSwipter></UseSwipter>
                </div>
            </div>
            <div className="w-4/5 mx-auto rounded bg-[#FFFFFF] md:w-1/2  p-5">
                <h1 className="text-2xl font-bold text-center">Login to HirePark</h1>
                <form onSubmit={singUp}>
                    <div className="form-control mt-5 relative">
                        <AiOutlineMail className='absolute top-[18px] ml-5'></AiOutlineMail>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered px-10" required />
                    </div>
                    <div className="form-control mt-5 relative">
                        <RiLockPasswordLine className='absolute top-[18px] ml-5'></RiLockPasswordLine>
                        <input type="password" name='password' placeholder="password" className="input input-bordered px-10" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#14A800] hover:bg-[#14a800e1] text-white rounded-full normal-case text-base">Continue with Email</button>
                    </div>
                    {/* social login */}
                    <div className='relative'>
                        <div className='flex items-center gap-3 my-5'>
                            <div className='w-full h-[1px] bg-gray-400'></div>
                            <p className='text-center'>Or</p>
                            <div className='w-full h-[1px] bg-gray-400'></div>
                        </div>
                        <FcGoogle className='absolute top-[52px] ml-1 bg-white text-3xl  rounded-full'></FcGoogle>
                        <button onClick={handleGoogleLogin} className="btn bg-[#4285F4] hover:bg-[#4285F4] text-white rounded-full normal-case text-base w-full">Continue with Google</button>
                    </div>
                </form>
                <p className='mt-3'>  Don't have an Upwork account? ?<Link to="/register" className='text-[#4285F4]'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;