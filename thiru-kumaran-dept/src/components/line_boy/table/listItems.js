import React from "react";

const LineBoyList = ({lineboy}) => {
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{lineboy.id}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{lineboy.memberName}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{lineboy.address}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{lineboy.phoneNo}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center"><button style={{color:"green",fontSize:"14px"}}>Update</button> <button style={{color:"red",fontSize:"14px",marginLeft:"20px"}}>Delete</button></div>
            </td>     
        </tr>
    )
}

export default LineBoyList;