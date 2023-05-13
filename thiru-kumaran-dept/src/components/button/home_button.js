import React from "react";
import { useNavigate } from "react-router-dom";


const Button = () => {
    const navigate = useNavigate();
    const onNavi = () =>{
        navigate('/line');
    }
    return (
        <>
                <button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={onNavi}>
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Login</span>
                </button>
        </>
    )
}

export default Button;