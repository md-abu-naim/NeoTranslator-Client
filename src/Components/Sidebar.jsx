import { FaHome } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiSolidBookOpen } from "react-icons/bi";
import { RiHistoryFill } from "react-icons/ri";
import { MdPolicy } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="drawer z-10">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" tabIndex={0} role="button" className="btn btn-ghost btn-circle text-2xl">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-gray-100 text-gray-900 min-h-full w-80 p-4 space-y-2">
                    <div className="flex items-center justify-between mb-4">
                        <Link to='/' className="text-2xl font-extrabold text-blue-600">NeoTranslator</Link>
                        <label htmlFor="my-drawer" className="btn btn-circle border border-gray-400 text-gray-700 hover:bg-gray-300">
                            <IoCloseSharp size={24} />
                        </label>
                    </div>

                    {/* Home */}
                    <NavLink to='/' onClick={() => document.getElementById('my-drawer').checked = false}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }>
                        <FaHome className='w-6 h-6' />
                        <span className='ml-3 font-semibold'>Home</span>
                    </NavLink>

                    {/* About Us */}
                    <NavLink to='/about' onClick={() => document.getElementById('my-drawer').checked = false}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }>
                        <BiSolidBookOpen className='w-6 h-6' />
                        <span className='ml-3 font-semibold'>Learn More</span>
                    </NavLink>

                    {/* Contact Us */}
                    <NavLink to='/contact' onClick={() => document.getElementById('my-drawer').checked = false}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }>
                        <HiOutlineMailOpen className='w-6 h-6' />
                        <span className='ml-3 font-semibold'>Get in Touch</span>
                    </NavLink>

                    {/* History */}
                    <NavLink to='/history' onClick={() => document.getElementById('my-drawer').checked = false}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white ${
                                isActive ? 'bg-blue-600 text-white' : 'text-gray-700'
                            }`
                        }>
                        <RiHistoryFill className='w-6 h-6' />
                        <span className='ml-3 font-semibold'>Translation Logs</span>
                    </NavLink>

                    {/* Divider */}
                    <div className="border-t border-gray-300 my-3"></div>

                    {/* Terms & Conditions */}
                    <NavLink to='/terms' onClick={() => document.getElementById('my-drawer').checked = false}
                        className={({ isActive }) =>
                            `flex items-center px-4 py-3 rounded-lg transition duration-300 hover:bg-gray-300 ${
                                isActive ? 'bg-gray-400' : 'text-gray-700'
                            }`
                        }>
                        <MdPolicy className='w-6 h-6' />
                        <span className='ml-3 font-semibold'>Privacy & Terms</span>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
