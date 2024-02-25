import axios from "axios";
import { useEffect, useState } from "react";
import JobCategoryCard from "./jobCategoryCard";
import useAxios from "../../../components/useAxios/useAxios";
const JobCategories = () => {
    const axiosInstance = useAxios()
    const [jobs, setJobs] = useState([])
    const [initialJob, setInitialJob] = useState([])
    const [isExist, setIsExist] = useState(true)
    const categories = ["Web Development", "Digital Marketing", "Graphics Design",]
    useEffect(() => {
        axiosInstance.get(`/api/v1/jobs?category=Web Development`)
            .then(res => setInitialJob(res.data))
    }, [])
    const handleCategory = category => {
        axiosInstance.get(`/api/v1/jobs?category=${category}`)
            .then(res => setJobs(res.data))
    }
    return (
        <div className="flex flex-col md:flex-row gap-5 mt-10 mb-10">
            <div className="md:w-[220px] bg-[#0C4228] p-2 space-y-3 md:h-[220px] rounded-lg border-2 shadow-2xl">
                {
                    categories?.map((category, index) => <button onClick={() => {
                        handleCategory(category)
                        setIsExist(false)
                    }} key={index} className="btn bg-[#0C4228] text-white hover:bg-[#0C4228] hover:border-red-500 w-full">{category}</button>)
                }
            </div>
            <div className=" md:w-4/5 bg-base-100 grid grid-cols-1 lg:grid-cols-2 gap-3">
                {
                    isExist ? initialJob?.map(job => <JobCategoryCard key={job?._id} job={job}></JobCategoryCard>) :
                        jobs?.map(job => <JobCategoryCard key={job?._id} job={job}></JobCategoryCard>)

                }
            </div>
        </div>
    );
};

export default JobCategories;
