import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import LoginPage from "../login/login";

const ProtectedRoutes = (children) => {
    const [login, setLogin] = useState(false);
    // const [val,setVal] = useState(localStorage.getItem("phoneNo"))
    // here set the value from cookie 
    useEffect(() => {
        const storageListener = () => {
            setLogin(Boolean(window.localStorage.getItem("phoneNo")));
        };
    window.addEventListener("storage", storageListener);
    return () => {
        window.removeEventListener("storage", storageListener)
    }
}, [])
    // if we dont want navbar remove it 
    return login? <Outlet/> : <div><Navbar/><LoginPage/></div>;
};

export default ProtectedRoutes;
