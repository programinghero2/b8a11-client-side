import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobCategoryCard = ({ job }) => {
    const { _id, job_title, short_description, minimumPrice, deadline, maximumPrice } = job
    const [disabled, setDisabled] = useState(false)
    const addDate = new Date(deadline).getTime()
    const todayDate = new Date().getTime()
    // compare time
    useEffect(() => {
        if (addDate < todayDate) {
            setDisabled(true)
        }
    }, [])
    return (
        <div>
            <div id="jobCard" className="flex flex-col md:flex-row hover:border-[#0C4228] rounded gap-5 items-start  border-[1px] border-[#0C4228] md:h-[180px] p-3 md:p-5">
                <div className="md:w-4/5">
                    <div className="flex gap-2 items-center">
                        <p className="text-lg font-bold text-[#0C4228]">{job_title}</p>
                        <p>{deadline} days left</p>
                    </div>
                    <p className="text-gray-600 ">{short_description}</p>
                </div>
                <div className="md:w-1/5">
                    <p className="font-bold">${minimumPrice}-${maximumPrice}</p>
                    {
                        disabled ? <button className="btn mt-2  btn-sm btn-outline text-[#0c4228] hover:bg-[#0C4228] normal-case" disabled>Bid now</button> :
                            <Link to={`/jobdetails/${_id}`}><button className="btn mt-2  btn-sm btn-outline text-[#0c4228] hover:bg-[#0C4228] normal-case">Bid now</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default JobCategoryCard;