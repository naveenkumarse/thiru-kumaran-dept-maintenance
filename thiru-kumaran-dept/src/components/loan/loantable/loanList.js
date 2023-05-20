import React from "react";

const ListLoan = () => {
    return (
        <>
            <td class="p-2 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="font-medium text-lg text-gray-400">1</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="font-medium text-lg text-gray-400">Naveenkumar</div>
                </div>
            </td>
            <td class="pl-8 p-2 float whitespace-nowrap">
                <div class="text-lg text-center text-gray-400">20000</div>
            </td>
            <td class="pl-8 p-2 float-left whitespace-nowrap">
                <div class="text-lg text-center text-gray-400">20000</div>
            </td>
            <td class="pl-8 whitespace-nowrap">
                <div class="text-lg text-center"><button style={{ color: "green", fontSize: "14px" }}>Update</button> <button style={{ color: "red", fontSize: "14px", marginLeft: "20px" }}>Delete</button></div>
            </td>
        </>
    )
}

export default ListLoan;