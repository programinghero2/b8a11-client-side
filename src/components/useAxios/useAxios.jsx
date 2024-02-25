import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const instance = axios.create({
    baseURL: 'https://hirpark-server.vercel.app',
    withCredentials: true
});

const useAxios = () => {
    const {logOut} = useContext(AuthContext)
    instance.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if(error.response.status === 401 || error.response.status === 403 ){
            logOut() 
        }
    });
    return instance;
};

export default useAxios;