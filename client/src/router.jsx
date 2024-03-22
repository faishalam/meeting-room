import {
    createBrowserRouter,
    redirect,
    RouterProvider,
} from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import BookingPage from "./pages/bookingPage";
import ClientPage from "./pages/ClientPage";
import CmsRoomPage from "./pages/cmsRoomPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/register",
        element: <RegisterPage/>,
        loader : () => localStorage.getItem("access_token") && redirect ('/')
    },
    {
        path: "/login",
        element: <LoginPage/>,
        loader : () => localStorage.getItem("access_token") && redirect('/')
    },
    {
        path: "/add-client",
        element: <ClientPage/>,
        loader : () => !localStorage.getItem("access_token") && redirect('/login')
    },
    {
        path: "/add-client/:id",
        element: <ClientPage/>,
        loader : () => !localStorage.getItem("access_token") && redirect('/login')
    },

    {
        path: "/booking",
        element: <BookingPage/>,
        loader : () => !localStorage.getItem("access_token") && redirect('/login')
    },
    {
        path: "/cms-room",
        element: <CmsRoomPage/>,
    },
]);


export default router