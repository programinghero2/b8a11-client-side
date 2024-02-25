import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast("logOut successfully")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    // navlink
    const navLinks = <>
        <NavLink to="/"><li className=""><a className="hover:bg-[#0D4329] hover:text-white">Home</a></li></NavLink>
        <NavLink to="/addjobs"><li><a className="hover:bg-[#0D4329] hover:text-white">Add Job</a></li></NavLink>
        <NavLink to="/postedjobs"><li><a className="hover:bg-[#0D4329] hover:text-white">My posted jobs</a></li></NavLink>
        <NavLink to="/bids"><li><a className="hover:bg-[#0D4329] hover:text-white">My Bids</a></li></NavLink>
        <NavLink to="/bidrequest"><li><a className="hover:bg-[#0D4329] hover:text-white">Bid Request</a></li></NavLink>
        <NavLink to="/register"><li><a className="hover:bg-[#0D4329] hover:text-white">Register</a></li></NavLink>
    </>
    return (
        <div>

            <div className="navbar bg-[#0D4329] text-white">
                <div className="navbar-start">
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-base bg-[#0D4329] menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="text-white text-4xl font-bold">HirePark<span className="text-[#1DBF73]">.</span></Link>
                </div>
                <div className="navbar-center hidden  lg:flex">
                    <ul className="menu text-base menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 bg-green-600 shadow menu menu-sm dropdown-content  rounded-box w-52">
                                <li><a>{user?.displayName}</a></li>
                                <li><Link onClick={handleLogOut}>Logout</Link></li>
                            </ul>
                        </div> :
                            <Link to="/login" className="btn absolute btn-sm btn-primary">Login</Link>

                    }
                </div>
            </div>


        </div>
    );
};

export default Navbar;






{/* drawer end */ }


