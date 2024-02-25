import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="flex bg-[#1A2238] min-h-screen justify-center items-center mb-10">
            <div className="relative">
                <p className="text-white text-8xl font-bold">404</p>
                <p className=" w-[140px] h-[25px] px-2 bg-orange-500 top-12 left-5 absolute">Page Not Found</p>
                <div className="text-center mt-5">
                    <Link to="/"><button className="btn btn-outline text-white border-orange-500 hover:bg-[#1A2238] hover:border-red-500 left-4">Go to home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;