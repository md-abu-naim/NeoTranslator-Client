import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Navber = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm md:px-8">
            <Sidebar />
            <div className="navbar-center">
                <Link to='/' className="btn btn-ghost md:text-3xl mr-4 lg:mr-44 text-2xl font-extrabold">NeoTranslator</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end rounded-full border-2 border-gray-400">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navber;