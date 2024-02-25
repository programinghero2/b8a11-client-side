import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { ToastContainer } from 'react-toastify';
import Footer from "../../pages/Home/Footer/Footer";
const Main = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
             <ToastContainer />
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <div className="mt-5">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;