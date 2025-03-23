import { Outlet } from "react-router-dom";
import Navber from "../Pages/Home/Navber";
import Footer from "../Pages/Home/Footer";

const Root = () => {
    return (
        <div>
            <Navber />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;