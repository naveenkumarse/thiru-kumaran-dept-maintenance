import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import jwt from 'jsonwebtoken';

const LineBoyLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // just uncomment when u r using this
    const validateJWT = (token) => {
        // try {
        //     const decoded = jwt.verify(token, 'your-secret-key');
        //     // the format of decoded is similar to {
        //     //   sub: "1234567890",
        //     //   username: "John Doe",
        //     //   iat: 1622055264
        //     // } so use the below condition according to u

        //     if (decoded.username == 'adminusername') {
        //         navigate('/home');
        //         localStorage.setItem("username",decoded.username);
        //     }
        //     console.log('Token is valid:', decoded);
        //     return true;
        // } catch (error) {

        //     console.error('Token is invalid:', error);
        //     return false;
        // }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        // put the post call 
        const token = '';
        validateJWT(token);
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
                                    Username
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
                                <Link to='/' style={{color:"red"}}> admin login </Link>
                            </div>
                            <div class="mb-6">
                                <button
                                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="button" >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LineBoyLogin;