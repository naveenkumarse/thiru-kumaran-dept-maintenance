import React from "react";
import { deleteHead } from "../../../api";

const AddHeadList = ({ id, headName, setEditHead, setHeadId ,index}) => {
    const onEdit = () => {
        // call edit api
        setEditHead(headName);
        setHeadId(id);
    }
    const handleDelete = (e) =>{
        e.preventDefault();
        const body = {
            "id":id
        }
        try {
            deleteHead(body)
            } catch (error) {
                console.log("error in fetching head data", error)
            }  
        window.location.reload();
    }
    return (
        <>
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{index+1}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{headName}</div>
                </div>
            </td>
            <td class=" whitespace-nowrap pt-2">
                <button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={onEdit}>
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Edit</span>
                </button>
                <button class="ml-6 group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={handleDelete}>
                    <div class="absolute inset-0 w-3 bg-red-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Delete</span>
                </button>
            </td>
          
            </tr>
        </>
    )
}

export default AddHeadList;