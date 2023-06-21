import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../modal/modal';
// import jwtDecode from 'jwt-decode';
import jwt_decode from "jwt-decode";
import { adminLogin } from '../../api';
import AppContext from '../../context/AppContext';
// import jwt from 'jsonwebtoken';

const LoginPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [token, setToken] = useState("")

    const { setPhoneNumber } = useContext(AppContext)


    // just uncomment when u r using this
    const validateJWT = (token) => {


        try {

            const decodedToken = jwt_decode(token);

            if (decodedToken.sub == email) {

                localStorage.setItem("phoneNo", decodedToken.sub);
                setPhoneNumber(decodedToken.sub);
                navigate('/home');
            
            }
            console.log('Token is valid:', decodedToken);
            return true;
        } catch (error) {
            setModalOpen(true);
            console.error('Token is invalid:', error);
            return false;
        }
    };
    useEffect(() => {
        if (token != '') {
            validateJWT(token)
        }
    }, [token])
    const onSubmit = (e) => {
        // console.log("error")
        e.preventDefault();
        // put the post call
        const body = {
            "phoneNo": email,
            "password": password
        }
        try {
            adminLogin(body, setToken)

            // validateJWT(token)
        } catch (error) {
            console.log(error)
        }

        // e.preventDefault();

    }

    return (
        <>
            <div class="bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}>
                <div class="h-screen flex justify-center items-center">
                    <div class="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                        <h1 class="text-3xl font-bold mb-8 text-center">Login</h1>
                        <form onSubmit={onSubmit}>
                            <div class="mb-4">
                                <label class="block font-semibold text-gray-700 mb-2" for="email">
                                    Phone Number
                                </label>
                                <input
                                    class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email" type="text" placeholder="Enter your username" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div class="mb-4">
                                <label class="block font-semibold text-gray-700 mb-2" for="password">
                                    Password
                                </label>
                                <input
                                    class="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password" type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <Link to='/lineboylogin' style={{ color: "red" }}> Line boy login </Link>
                            </div>
                            <div class="mb-6">
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit" >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                    {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>
            </div>

        </>
    )
}

export default LoginPage;