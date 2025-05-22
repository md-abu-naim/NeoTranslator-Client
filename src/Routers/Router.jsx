import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import History from "../Pages/History/History";
import Terms from "../Pages/Terms/Terms";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";





export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/history',
                element: <History />
            },
            {
                path: '/terms',
                element: <Terms />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'signIn',
                element: <SignIn />
            }
        ]
    },
]);