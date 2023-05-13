import React from "react";

const LineBoyList = () => {
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
                <div class="text-left font-medium">$2,767.04</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">??</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center"><button style={{color:"green",fontSize:"14px"}}>Update</button> <button style={{color:"red",fontSize:"14px",marginLeft:"20px"}}>Delete</button></div>
            </td>

            
        </>
    )
}

export default LineBoyList;