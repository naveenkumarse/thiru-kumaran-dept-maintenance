import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import LoginPage from "../login/login";


const ProtectedRoutes = (children) => {

    const [login, setLogin] = useState(false);
    const val = localStorage.getItem("uid");
    // here set the value from cookie 
    useEffect(() => {
        if (val !== '') {
            setLogin(true);
        }
    }, [])
    // if we dont want navbar remove it 
    return login? <Outlet/> : <div><Navbar/><LoginPage/></div>;
};

export default ProtectedRoutes;
