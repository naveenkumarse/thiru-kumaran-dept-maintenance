import React from "react";
import { deleteAdmin } from "../../../api";
import { useNavigate } from "react-router-dom";

const AdminList = ({Admin,index}) => {
    console.log(Admin)
    const handleAdminDelete = (e) =>{
        e.preventDefault();
        deleteAdmin({"adminId":Admin.adminId});
        window.location.reload();
    }
    const navigate = useNavigate();
    const navigateToUpdate = (e) =>{
        navigate('/updateadmin', {state: {Admin} })
    }
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{index+1}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{Admin.userName}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{Admin.phoneNo}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">
                <button style={{color:"green",fontSize:"14px"}} onClick={(e) => navigateToUpdate(e)}>Update</button> 
                <button style={{color:"red",fontSize:"14px",marginLeft:"20px"}} onClick={(e)=> handleAdminDelete(e)}>Delete</button></div>
            </td>     
        </tr>
    )
}

export default AdminList;