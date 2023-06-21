/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Modal from '../modal/modal';
import { lineboyLogin } from '../../api';
import jwt_decode from 'jwt-decode';
import AppContext from '../../context/AppContext';
const LineBoyLogin = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState('')
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const { setPhoneNumber } = useContext(AppContext)
    const validateJWT = (token) => {
        try {
            const decodedToken = jwt_decode(token);
            // console.log("decoded", decodedToken)
            if (decodedToken.sub === email) {
                console.log(decodedToken.sub+"true")
                
                localStorage.setItem("phoneNo", decodedToken.sub);
                setPhoneNumber(decodedToken.sub);
                navigate('/lineboyhome');
                // window.location.reload();
            }
            console.log('Token is valid:', decodedToken);
            return true;
        } catch (error) {
            console.error('Token is invalid:', error);
            setModalOpen(true);
            return false;
        }
    };
    useEffect(() => {
        if (token != '') {
            validateJWT(token)
        }
    }, [token])

    const onSubmit = async (e) => {
        e.preventDefault();
        // put the post call
        const body = {
            "phoneNo": email,
            "password": password
        }
        try {
            await lineboyLogin(body, setToken);
            // validateJWT(token);
        } catch (error) {
            console.log(error)

        }
    }

    return (
        <>
            <div class="bg-cover bg-center bg-fixed" style={{ backgroundImage: "url('https://picsum.photos/1920/1080')" }}>
                <div class="h-screen flex justify-center items-center">
                    <div class="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
                        <h1 class="text-3xl font-bold mb-8 text-center">Login</h1>
                        <form onSubmit={(e) => onSubmit(e)}>
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
                                <Link to='/' style={{ color: "red" }}> admin login </Link>
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

export default LineBoyLogin;