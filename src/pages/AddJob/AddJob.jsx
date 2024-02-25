import { useContext, useState } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import useAxios from "../../components/useAxios/useAxios";
import { useNavigate } from "react-router-dom";
const AddJob = () => {
    const navigate = useNavigate()
    const axiosInstance = useAxios()
    const { user } = useContext(AuthContext)
    const [categoryItem, setCategory] = useState("Web Development")
    const handleAddJob = e => {
        e.preventDefault()
        const form = e.target;
        const email = user?.email;
        const job_title = form.jobTitle.value;
        const deadline = form.deadline.value;
        const short_description = form.description.value;
        const category = categoryItem;
        const minimumPrice = +form.minimumPrice.value;
        const maximumPrice = +form.maximumPrice.value;
        const jobInfo = { email,job_title,deadline, short_description, category, minimumPrice, maximumPrice }
        console.log(jobInfo)
        axiosInstance.post("/api/v1/addjob", jobInfo)
            .then(() => {
                toast("job added")
                navigate("/postedjobs")
            })
    }
    const handleCategory = event => {
        const category = event.target.value;
        setCategory(category)
    }
    return (
        <div>
            <Helmet>
                <title>HirePark || Add Job</title>
            </Helmet>
            <div className="h-[50vh] bg-[#000066]">
                <div className="flex flex-col justify-center h-[50vh] items-center">
                    <p className="text-white text-3xl font-bold text-center mb-3">Add Job <br /> and find talent</p>
                    <Link to="addjobForm" smooth={true} duration={500}className="btn btn-sm bg-white hover:bg-white normal-case text-[#000066]">Add job</Link>
                </div>
            </div>
            <div className="w-4/5 md:w-4/5 lg:w-1/2 mx-auto mt-10 mb-10 border-2 shadow-lg p-5">
                <form onSubmit={handleAddJob} name="addjobForm" >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder={user?.email} className="input input-bordered" readOnly />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Job title</span>
                        </label>
                        <input type="text" placeholder="Job title" name="jobTitle" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" placeholder="deadline" name="deadline" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" placeholder="description" name="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="input input-bordered" onChange={handleCategory}>
                            <option value="Web Development">Web Development</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Graphics Design">Graphics Design</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Price</span>
                        </label>
                        <input type="number" placeholder="Minimum price" name="minimumPrice" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Maximum Price</span>
                        </label>
                        <input type="number" placeholder="Maximum price" name="maximumPrice" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button  className="btn bg-[#000066e8] text-white hover:bg-[#000066]">Add Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJob;