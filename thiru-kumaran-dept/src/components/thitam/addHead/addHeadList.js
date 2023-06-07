import React from "react";

const AddHeadList = () => {
    const onEdit = ()=>{
        // call edit api

    }
    return (
        <>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">1</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">Philip Harbach</div>
                </div>
            </td>
            <td class=" whitespace-nowrap pt-2">
            <button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={onEdit}>
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Edit</span>
                </button>
            </td>
        </>
    )
}

export default AddHeadList;