import { Outlet } from "react-router-dom";
import Navber from "../Pages/Home/Navber";
import Footer from "../Pages/Home/Footer";

const Root = () => {
    return (
        <div>
            <Navber />
            <div className='min-h-[calc(100vh-180px)] p-5 md:px-28'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;