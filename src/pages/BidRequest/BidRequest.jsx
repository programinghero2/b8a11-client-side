// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useTanstack from "../../components/CustomHook/useTanstack";
import { Helmet } from "react-helmet-async";
import useAxios from "../../components/useAxios/useAxios";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import "./ProgressBar.css"
const BidRequest = () => {
    const { isPending, error, data: bidRequests, refetch } = useTanstack()
    const axiosInstance = useAxios()
    const handleAccept = _id => {
        axiosInstance.patch(`/api/v1/bidJob/update/${_id}`, { status: "in progress" })
            .then(res => {
                refetch()
                console.log(res.data)
            })
    }
    const handleReject = _id => {
        axiosInstance.patch(`/api/v1/bidJob/update/${_id}`, { status: "canceled" })
            .then(res => {
                refetch()
                console.log(res.data)
            })
    }
    return (
        <div>
            <Helmet>
                <title>HirePark || Bid Request</title>
            </Helmet>
            {
                bidRequests?.length > 0 ?
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-black text-white">
                                <tr>
                                    <th>Job</th>
                                    <th>Deadline</th>
                                    <th>Email</th>
                                    <th>Price</th>
                                    <th>status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    bidRequests?.map(bidRequest => <tr key={bidRequest?._id}>
                                        <td className="font-bold">{bidRequest?.job_title}</td>
                                        <td>{bidRequest?.deadline} days left</td>
                                        <td>{bidRequest?.email}</td>
                                        <td>${bidRequest?.price}</td>
                                        <th>                                          
                                            {
                                                bidRequest?.status === "in progress" || bidRequest?.status === "canceled" || bidRequest?.status === "completed" ? <div>
                                                    <ProgressBar percent={bidRequest?.status === "in progress" && 75 || bidRequest?.status === "completed" && 100 || bidRequest?.status === "canceled" && 0 || bidRequest?.status === "pending" && 0  }>
                                                        <Step>
                                                            {({ accomplished, index }) => (
                                                                <div
                                                                    className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                                                >
                                                                    {index + 1}
                                                                </div>
                                                            )}
                                                        </Step>
                                                        <Step>
                                                            {({ accomplished, index }) => (
                                                                <div
                                                                    className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                                                >
                                                                    {index + 1}
                                                                </div>
                                                            )}
                                                        </Step>
                                                        <Step>
                                                            {({ accomplished, index }) => (
                                                                <div
                                                                    className={`indexedStep ${accomplished ? "accomplished" : null}`}
                                                                >
                                                                    {index + 1}
                                                                </div>
                                                            )}
                                                        </Step>
                                                    </ProgressBar>
                                                </div>
                                                    : <div>
                                                        <button onClick={() => handleAccept(bidRequest?._id)} className="btn btn-sm normal-case bg-[#0c4228d8] hover:bg-[#0C4228] text-white">Accept</button>
                                                        <button onClick={() => handleReject(bidRequest?._id)} className="btn btn-sm normal-case bg-red-500 hover:bg-red-600 text-white">Reject</button>
                                                    </div>
                                            }
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

export default BidRequest;