import React from "react";


const OutstandingBalanceList = ({res}) => {
    return (
        <>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{res.id}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{res.date}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.lineName}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.firstCount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{res.firstBalance}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{res.secondCount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.secondBalance}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.thirdCount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{res.thirdBalance}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{res.fourthCount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{res.fourthBalance}</div>
            </td>
        </>
    )
}

export default OutstandingBalanceList;