import React from "react";

const ListCreateItems = () => {
    return (
        <>
            <td class="p-2 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">1</div>
                </div>
            </td>

            <td class="pl-24 float-left whitespace-nowrap">
                <div class="text-lg text-center">Line A</div>
            </td>
            <td class="pl-8 whitespace-nowrap">
                <div class="text-lg text-center"><button style={{ color: "green", fontSize: "14px" }}>Update</button> <button style={{ color: "red", fontSize: "14px", marginLeft: "20px" }}>Delete</button></div>
            </td>
        </>
    )
}

export default ListCreateItems;