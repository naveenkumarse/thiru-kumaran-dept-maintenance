import React from "react";
import { useNavigate } from "react-router-dom";


const Button = ({path, lineId, date, lineName}) => {
    const navigate = useNavigate();
    const onNavi = ({path}) =>{
        localStorage.setItem('line_name', lineName)
        localStorage.setItem('lineId', lineId )
        localStorage.setItem('date', date )
        navigate(`/lineboypages`);
    }
    return (
        <>
                <button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={()=>onNavi(path)}>
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Login</span>
                </button>
        </>
    )
}

export default Button;