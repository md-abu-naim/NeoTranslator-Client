import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const Root = () => {
    return (
        <div className="text-black">
            <Navber />
            <div className='min-h-[calc(100vh-180px)] p-5 md:px-28 text-black'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;