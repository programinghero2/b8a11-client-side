import { useContext } from "react";
import {  useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/Provider/AuthProvider";
import { IoMdCheckmarkCircle } from 'react-icons/io';
import bannerLogo from "../../assets/detailsBanner.webp"
import { Helmet } from "react-helmet-async";
import useAxios from "../../components/useAxios/useAxios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const JobDetails = () => {
    const job = useLoaderData()
    const { user } = useContext(AuthContext)
    const axiosInstance = useAxios()
    const { _id, job_title, short_description, minimumPrice, deadline, email, maximumPrice } = job
    const navigate = useNavigate()
    const handleBidJobs = e => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const deadline = form.deadline.value;
        const email = user?.email;
        const status = "pending";
        const bidInfo = { price, deadline, email, job_title,status }
        axiosInstance.post("/api/v1/bidJob", bidInfo)
            .then(() => {
                toast("bid successfully")
                navigate("/bids")
            })

    }
    return (
        <div>
            <Helmet>
                <title>HirePark || Job Details</title>
            </Helmet>
            <div className="relative">
                <img src={bannerLogo} alt="" />
                <div className=" p-5 md:w-4/5 lg:w-3/4 mx-auto border-2 relative left-0 top-[-40px] lg:top-[-118px] lg:left-[-118px] md:left-[-36px] md:top-[-48px]  rounded bg-base-100 ">
                    <div>
                        <div className="flex justify-between items-center">
                            <p className="text-xl md:text-3xl font-bold">{job_title}</p>
                            <p className="text-base md:text-2xl font-bold">${minimumPrice}-{maximumPrice} USD</p>
                        </div>
                        <p className="font-bold">Ends in {deadline} days</p>
                        <div>
                            <p className="text-gray-500 w-3/4">{short_description}</p>
                        </div>
                    </div>
                    <div className="md:flex gap-5 " >
                        <div className=" md:w-3/5">
                            <h1 className="text-2xl font-bold mb-5 mt-5">Place your bid</h1>
                            <form onSubmit={handleBidJobs}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Bid amount</span>
                                    </label>
                                    <input type="number" name="price" placeholder="50" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Deadline</span>
                                    </label>
                                    <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder={user?.email} className="input input-bordered" readOnly />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder={email} className="input input-bordered" readOnly />
                                </div>
                                <div className="form-control mt-6">
                                    {
                                        email === user?.email ? <button className="btn btn-outline normal-case" disabled >Bid on the project</button> :
                                            <button type="submit" className="btn btn-outline normal-case w-full" >Bid on the project</button>
                                    }
                                </div>
                            </form>
                        </div>
                        <div className="md:w-2/5 bg-blue-500 hidden md:block rounded text-white space-y-3 md:mt-24 shadow-lg border p-2">
                            <h1 className="text-xl font-bold">Benefits of bidding on HirePark</h1>
                            <p><IoMdCheckmarkCircle className="inline-block mr-1"></IoMdCheckmarkCircle><span>Set your budget and timeframe</span></p>
                            <p><IoMdCheckmarkCircle className="inline-block mr-1"></IoMdCheckmarkCircle><span>Get paid for your work</span></p>
                            <p><IoMdCheckmarkCircle className="inline-block mr-1"></IoMdCheckmarkCircle><span>Outline your proposal</span></p>
                            <p><IoMdCheckmarkCircle className="inline-block mr-1"></IoMdCheckmarkCircle><span>It's free to sign up and bid on jobs</span></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;