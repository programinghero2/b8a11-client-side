import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    const handleContact = e =>{
        e.preventDefault()
        toast("message send successfully")
    }
    return (
        <div>
            <form onSubmit={handleContact} className="w-4/5 md:w-4/5 lg:w-1/2 my-10 mx-auto">
                <h1 className="text-3xl font-bold">Contact Us</h1>
                <div className="form-control mt-5 relative">
                    <AiOutlineMail className='absolute top-[18px] ml-5'></AiOutlineMail>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered px-10" required />
                </div>
                <div className="form-control mt-5 relative">
                    <RiLockPasswordLine className='absolute top-[18px] ml-5'></RiLockPasswordLine>
                    <input type="password" name='password' placeholder="password" className="input input-bordered px-10" required />
                </div>
                <div className="form-control mt-5 relative">
                    <textarea rows={5} placeholder="Write Your text..." className="border p-2 rounded border-gray-400">

                    </textarea>
                </div>
                <div className="form-control mt-6">
                    <button  className="btn bg-[#00B7D7] hover:bg-[#00B7D7] text-white">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;