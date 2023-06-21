import { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/navbar";
import LoginPage from "../login/login";
import AppContext from "../../context/AppContext";

const ProtectedRoutes = (children) => {
    //     const [login, setLogin] = useState(false);
    //     // const [val,setVal] = useState(localStorage.getItem("phoneNo"))
    //     // here set the value from cookie 
    //     useEffect(() => {
    //         const storageListener = () => {
    //             console.log(localStorage.getItem("phoneNo"));
    //             setLogin(Boolean(localStorage.getItem("phoneNo")));
    //         };
    //     window.addEventListener("storage", storageListener);
    //     return () => {
    //         window.removeEventListener("storage", storageListener)
    //     }
    // }, [])

    const { phoneNumber } = useContext(AppContext)
    // if we dont want navbar remove it 
    return phoneNumber ? <Outlet /> : <div><Navbar /><LoginPage /></div>;
};

export default ProtectedRoutes;
