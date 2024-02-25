import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxios from "../useAxios/useAxios";
const useTanstack = () => {
    const axiosInstance = useAxios()
    const { isPending, error, data,refetch } = useQuery({
        queryKey: ["bids"],
        queryFn: async () => {
            const res = await axiosInstance.get(`/api/v1/bidJob`)
            return res.data
        }
    })
    return {data,isPending,error,refetch}
};

export default useTanstack;