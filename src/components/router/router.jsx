import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../../pages/Home/Home';
import AddJob from '../../pages/AddJob/AddJob';
import MyPostedJobs from '../../pages/MyPostedJobs/MyPostedJobs';
import MyBids from '../../pages/MyBids/MyBids';
import BidRequest from '../../pages/BidRequest/BidRequest';
import Register from '../../pages/Register/Register';
import Login from '../../pages/Login/Login';
import JobDetails from '../../pages/JobDetails/JobDetails';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import JobUpdate from '../../pages/JobUpdate/JobUpdate';
import ErrorPage from '../../pages/ErrorPage/ErrorPage';
import About from '../../pages/Home/Footer/About/About';
import Contact from '../../pages/Home/Footer/Contact/Contact';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addjobs",
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
            },
            {
                path: "/postedjobs",
                element: <PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>
            },
            {
                path: "/bids",
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>
            },
            {
                path: "/bidrequest",
                element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/jobdetails/:id",
                element: <PrivateRoute> <JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://hirpark-server.vercel.app/api/v1/jobs/${params.id}`)
            },
            {
                path:"/jobupdate/:id",
                element:<JobUpdate></JobUpdate>,
                loader:({params}) => fetch(`https://hirpark-server.vercel.app/api/v1/postedJob/${params.id}`)
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/contact",
                element:<Contact></Contact>
            }
        ]
    }
])

export default router;