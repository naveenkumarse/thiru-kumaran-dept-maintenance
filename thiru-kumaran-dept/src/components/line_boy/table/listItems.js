import React from "react";
import { deleteLineMember } from "../../../api";
import { useNavigate } from "react-router-dom";

const LineBoyList = ({lineboy,index}) => {
    const handleLineBoyDelete = (e) =>{
        e.preventDefault();
        deleteLineMember({"lineMemId":lineboy.linMemId});
        window.location.reload();
    }
    const navigate = useNavigate();
    const navigateToUpdate = (e) =>{
        
        navigate('/lineboyupdate', {state: {lineboy} })
    }
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{index+1}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{lineboy.memberName}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{lineboy.address}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{lineboy.phoneNo}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">
                <button style={{color:"green",fontSize:"14px"}} onClick={(e) => navigateToUpdate(e)}>Update</button> 
                <button style={{color:"red",fontSize:"14px",marginLeft:"20px"}} onClick={(e)=> handleLineBoyDelete(e)}>Delete</button></div>
            </td>     
        </tr>
    )
}

export default LineBoyList;