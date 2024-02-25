import { useLoaderData } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";
import { Link, Element, Events, animateScroll as scroll } from 'react-scroll';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";
import useAxios from "../../components/useAxios/useAxios";
const JobUpdate = () => {
    const axiosInstance = useAxios()
    const { user } = useContext(AuthContext)
    const postInfo = useLoaderData()
    const { _id,email, job_title, deadline, short_description, category, minimumPrice, maximumPrice } = postInfo
    const [categoryItem, setCategory] = useState("Web Development")
    const handleUpdateJob = e => {
        e.preventDefault()
        const form = e.target;
        const email = user?.email;
        const job_title = form.jobTitle.value;
        const deadline = form.deadline.value;
        const short_description = form.description.value;
        const category = categoryItem;
        const minimumPrice = +form.minimumPrice.value;
        const maximumPrice = +form.maximumPrice.value;
        const jobInfo = { email, job_title, deadline, short_description, category, minimumPrice, maximumPrice }
        axiosInstance.put(`/api/v1/post-update/${_id}`, jobInfo)
            .then(() => {
                toast("Job Updated")
            })
    }
    const handleCategory = event => {
        const category = event.target.value;
        setCategory(category)
    }
    return (
        <div>
            <Helmet>
                <title>HirePark || Job Update</title>
            </Helmet>
            <div className="h-[50vh] bg-[#000066]">
                <div className="flex flex-col justify-center h-[50vh] items-center">
                    <p className="text-white text-3xl font-bold text-center mb-3">Update {job_title}</p>
                    <Link to="updatejobForm" smooth={true} duration={500} className="btn btn-sm bg-white hover:bg-white normal-case text-[#000066]">Upadate job</Link>
                </div>
            </div>
            <div className="lg:w-1/2 mx-auto mt-10 mb-10 border-2 shadow-lg p-5">
                <form onSubmit={handleUpdateJob} name="updatejobForm" >
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
                        <input type="text" defaultValue={job_title} placeholder="Job title" name="jobTitle" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Deadline</span>
                        </label>
                        <input type="date" defaultValue={deadline} placeholder="deadline" name="deadline" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" defaultValue={short_description} placeholder="description" name="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select defaultValue={category} className="input input-bordered" onChange={handleCategory}>
                            <option value="Web Development">Web Development</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="Graphics Design">Graphics Design</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Minimum Price</span>
                        </label>
                        <input type="number" defaultValue={minimumPrice} placeholder="Minimum price" name="minimumPrice" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Maximum Price</span>
                        </label>
                        <input type="number" defaultValue={maximumPrice} placeholder="Maximum price" name="maximumPrice" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#000066e8] text-white hover:bg-[#000066]">Update Job</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default JobUpdate;