import { FaHistory, FaHome, FaInfoCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="drawer z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <label htmlFor="my-drawer" tabIndex={0} role="button" className="btn btn-ghost btn-circle text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <div className="flex items-center justify-between">
                        <Link to='/' className="btn btn-ghost text-2xl font-extrabold">NeoTranslator</Link>
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay font-extrabold text-2xl border-2 rounded-full btn"><IoCloseSharp /></label>
                    </div>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-black ${isActive ? 'bg-gray-400  text-black' : 'text-black'
                            }`
                        }
                    >
                        <FaHome className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Home</span>
                    </NavLink>
                    <NavLink
                        to='/about'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 my-3  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-black ${isActive ? 'bg-gray-400  text-black' : 'text-black'
                            }`
                        }
                    >
                        <FaInfoCircle className='w-5 h-5' />

                        <span className='mx-4 font-medium'>About Us</span>
                    </NavLink>
                    <NavLink
                        to='/contact'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-black ${isActive ? 'bg-gray-400  text-black' : 'text-black'
                            }`
                        }
                    >
                        <MdAddCall className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Contact Us</span>
                    </NavLink>
                    <NavLink
                        to='/history'
                        className={({ isActive }) =>
                            `flex items-center px-4 py-2 transition-colors duration-300 transform  hover:bg-gray-300   hover:text-black ${isActive ? 'bg-gray-400  text-black' : 'text-black'
                            }`
                        }
                    >
                        <FaHistory className='w-5 h-5' />

                        <span className='mx-4 font-medium'>History</span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;