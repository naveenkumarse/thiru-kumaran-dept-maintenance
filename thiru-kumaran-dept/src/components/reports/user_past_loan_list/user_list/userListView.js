import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const UserListView = () => {
    const navigate = useNavigate();
    const navigatetopastview = ()=>{
        navigate("/pastloanview/")
    }
    return (
        <>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">Philip Harbach</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">philip.h@gmail.com</div>
            </td>


            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium"><button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={navigatetopastview}>
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black text-sm group-hover:text-white">Action</span>
                </button></div>
            </td>


        </>
    )
}

export default UserListView;