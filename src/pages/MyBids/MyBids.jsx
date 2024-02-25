import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/Provider/AuthProvider";
import useAxios from "../../components/useAxios/useAxios";
import { Helmet } from "react-helmet-async";


const MyBids = () => {
    const { user } = useContext(AuthContext)
    const axiosInstance = useAxios()
    const [showId, setShowId] = useState(null)
    const { isPending, error, data: bidJobs, refetch } = useQuery({
        queryKey: ["mybids"],
        queryFn: async () => {
            const res = await axiosInstance.get(`/api/v1/bidJob?email=${user?.email}`)
            return res.data
        }
    })
    const handleComplete = _id => {
        setShowId(_id)
        axiosInstance.patch(`/api/v1/bidJob/update/${_id}`, { status: "completed" })
            .then(() => refetch())
    }
    const handleStatus = e => {
        const status = e.target.value;
        console.log(status)
    }
    return (
        <div>
            {/* sort */}
            <div className="flex justify-end items-center">
                <label htmlFor="">
                    sort by:
                </label>
                <select onChange={handleStatus} className="border-2 my-3">
                    <option>completed</option>
                    <option>in progress</option>
                    <option>canceled</option>
                    <option>pending</option>
                </select>
            </div>
            <Helmet>
                <title>HirePark || My Bids</title>
            </Helmet>
            {
                bidJobs?.length > 0 ?
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-black text-white">
                                <tr>
                                    <th>Job</th>
                                    <th>Deadline</th>
                                    <th>Email</th>
                                    <th>status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    bidJobs?.map(bidJob => <tr key={bidJob?._id}>
                                        <td className="font-bold">{bidJob?.job_title}</td>
                                        <td>{bidJob?.deadline} days left</td>
                                        <td>{bidJob?.email}</td>
                                        <th>
                                            <div>
                                                <button className="btn btn-sm normal-case bg-[#0c4228d8] hover:bg-[#0C4228] text-white">{bidJob?.status}</button>
                                                {
                                                    bidJob?.status === "in progress" ? setShowId == bidJob?._id ? "" : <button onClick={() => handleComplete(bidJob?._id)} className="btn btn-sm  normal-case bg-red-500 hover:bg-red-600 text-white">complete</button> : ""
                                                }
                                            </div>
                                        </th>
                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div> :
                    <div className="min-h-screen flex justify-center items-center text-3xl font-bold">No Job Found</div>
            }
        </div>
    );
};

export default MyBids;