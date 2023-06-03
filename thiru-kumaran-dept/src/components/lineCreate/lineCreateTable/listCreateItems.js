import React from "react";
import { deleteLineFE } from "../../../api";
const ListCreateItems = ({line, handleUpdate}) => {
    const handleDelete = (e) => {
        const body ={
            "lineId":line.lineId
        }
        deleteLineFE(body);
        window.location.reload();
    }
    return (
        <tr>
            <td class="p-2 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{line.lineId}</div>
                </div>
            </td>

            <td class="pl-24 float-left whitespace-nowrap">
                <div class="text-lg text-center">{line.lineName}</div>
            </td>
            
            <td class="pl-24 float-left whitespace-nowrap">
                <button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={()=>handleUpdate(line)}>
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Update</span>
                </button>

                <button class="ml-5 group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={(e)=>handleDelete(e)}>
                    <div class="absolute inset-0 w-3 bg-red-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Delete</span>
                </button>
            </td>
        </tr>
    )
}

export default ListCreateItems;