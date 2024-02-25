import { AiOutlineUserAdd } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { BsLink45Deg } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../components/Provider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet-async';
import UseSwipter from '../../components/UseSwiper/UseSwipter';
const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext)
    const singUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photoUrl.value;
        if(password.length < 6){
            return toast("password must be 6 character")
        }
        if(!/^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/.test(password)){
            return toast("password must be contain upper letter,number,special character")
        }
        createUser(email, password)
            .then(() => {
                toast("Register Successfully")
                profileUpdate(name, photoUrl)
                    .then()
                    .catch()
            })
            .catch(error => {
                toast(error.message)
            })
    }
    return (
        <div className="flex shadow-2xl md:border mt-5 h-[82vh] md:w-4/5 lg:w-3/4 mx-auto">
            <Helmet>
                <title>HirePark || Register</title>
            </Helmet>
            <div className="md:w-1/2  bg-[#4F86C4] hidden md:block ">
                <p className='text-2xl lg:text-3xl font-bold text-center text-white mt-3 mb-8'>Grow with HirePark</p>
                <div className='flex justify-center items-center '>
                    <UseSwipter></UseSwipter>
                </div>
            </div>
            <div className="w-4/5 mx-auto rounded bg-[#FFFFFF] md:w-1/2  p-5 ">
                <h1 className="text-2xl font-bold text-center">Register to HirePark</h1>
                <form onSubmit={singUp}>
                    <div className="form-control mt-5 relative">
                        <AiOutlineUserAdd className='absolute top-4 ml-5'></AiOutlineUserAdd>
                        <input type="text" placeholder="UserName" name='name' className="input input-bordered px-10" required />
                    </div>
                    <div className="form-control mt-5 relative">
                        <AiOutlineMail className='absolute top-[18px] ml-5'></AiOutlineMail>
                        <input type="email" name='email' placeholder="Email" className="input input-bordered px-10" required />
                    </div>
                    <div className="form-control mt-5 relative">
                        <RiLockPasswordLine className='absolute top-[18px] ml-5'></RiLockPasswordLine>
                        <input type="password" name='password' placeholder="password" className="input input-bordered px-10" required />
                    </div>
                    <div className="form-control mt-5 relative">
                        <BsLink45Deg className='absolute top-[18px] text-[20px] ml-4'></BsLink45Deg>
                        <input type="text" name='photoUrl' placeholder="PhotoURL" className="input input-bordered px-10" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#14A800] hover:bg-[#14a800e1] text-white rounded-full normal-case text-base">Continue with Email</button>
                    </div>
                </form>
                <p className='mt-3'> Already account?<Link to="/login" className='text-[#4285F4]'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;