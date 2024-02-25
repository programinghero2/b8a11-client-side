import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import JobCategories from "./JobCategories/JobCategories";
import WorkWay from "./workway/WorkWay";
import BusinessSolution from "./businessSolution/BusinessSolution";
import Footer from "./Footer/Footer";
import ReactTabs from "../../components/ReactTabs/ReactTabs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title> HirePark || Home</title>
            </Helmet>
            {/* banner */}
            <div className="text-4xl">
                <Banner></Banner>
            </div>
            <div className="p-5 mt-5">
                <ReactTabs></ReactTabs>
            </div>
            <div className=" mb-10 p-5">
                <WorkWay></WorkWay>
            </div>
            <div className="mt-10 mb-10">
                <BusinessSolution></BusinessSolution>
            </div>
        </div>
    );
};

export default Home;