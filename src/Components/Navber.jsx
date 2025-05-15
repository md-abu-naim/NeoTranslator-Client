import { Link, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navber = () => {

    const user = false
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-8">
            <Sidebar />
            <div className="navbar-center">
                <Link to='/' className="btn btn-ghost md:text-3xl mr-4 lg:mr-44 text-2xl font-extrabold">NeoTranslator</Link>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img title={user?.displayName} alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">


                            <NavLink to='/'
                                className={({ isActive }) =>
                                    `flex items-center px-4 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                                    }`
                                }>
                                <span className='ml-3 font-semibold'>Settings</span>
                            </NavLink>
                            <li
                                className='px-2 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white'>
                                <a className='ml-3 font-extrabold'>Log Out</a>
                            </li>
                        </ul>
                    </div> :
                        <div className='flex gap-3'>
                            <button type="submit" className="w-full font-bold bg-blue-500 text-white p-3 rounded-lg">SignIn</button>
                            <button type="submit" className="w-full font-bold bg-blue-500 text-white p-3 rounded-lg">SignUp</button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navber;