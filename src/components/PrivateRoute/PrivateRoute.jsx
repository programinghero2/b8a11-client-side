import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {pathname} = useLocation()
    const {user,loading} = useContext(AuthContext)
    if(loading){
        return <p>Loading....</p>
    }
    if(!user){
       return <Navigate state={pathname} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoute;