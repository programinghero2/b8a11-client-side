import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MdModeEditOutline } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";
import useAxios from "../../components/useAxios/useAxios";
import { Helmet } from "react-helmet-async";
const MyPostedJobs = () => {
    const axiosInstance = useAxios()
    const {user} = useContext(AuthContext)
    const { isPending, error, data: postedJobs, refetch } = useQuery({
        queryKey: ["postedJob"],
        queryFn: async () => {
            const res = await axiosInstance.get(`/api/v1/postedJob?email=${user?.email}`)
            return res.data

        }
    })
    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosInstance.delete(`/api/v1/cancel-postedjob/${_id}`)
                    .then(() => {
                        toast("Deleted Successfully!")
                        refetch()
                    })
            }
        })
    }
    return (
        <div className="mt-8">
            <Helmet>
                <title>HirePark || Posted Jobs</title>
            </Helmet>
            <div className="p-2 md:w-4/5 lg:w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
                {
                    postedJobs?.map(postedJob => <div key={postedJob?._id}>
                        <div id="jobCard" className="flex flex-col md:flex-row gap-5 items-start border-[#0C4228] rounded  border-[1px] md:h-[180px] p-3 md:p-5">
                            <div className="md:w-4/5">
                                <div className="flex gap-2 items-center">
                                    <p className="text-lg font-bold text-[#0C4228]">{postedJob?.job_title}</p>
                                    <p>{postedJob?.deadline} days left</p>
                                </div>
                                <p className="text-gray-600 ">{postedJob?.short_description}</p>
                            </div>
                            <div className="md:w-1/5">
                                <p className="font-bold">${postedJob?.minimumPrice}-${postedJob?.maximumPrice}</p>

                                <div className="flex gap-3 mt-2">
                                    <Link to={`/jobupdate/${postedJob?._id}`} className="w-[40px] h-[40px] text-white cursor-pointer text-xl rounded bg-red-500 flex justify-center items-center"><MdModeEditOutline></MdModeEditOutline></Link>
                                    <div onClick={() => handleDelete(postedJob?._id)} className="w-[40px] cursor-pointer h-[40px] text-white text-xl rounded bg-[#2c2c2c] flex justify-center items-center"><AiFillDelete></AiFillDelete></div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyPostedJobs;

