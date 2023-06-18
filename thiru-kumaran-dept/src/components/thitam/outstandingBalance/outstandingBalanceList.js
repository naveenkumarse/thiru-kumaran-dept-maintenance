import React from "react";


const OutstandingBalanceList = ({res,index}) => {
    return (
        <>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{index+1}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{res.date}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.lineName}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.firstCount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.firstBalance}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.secondCount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.secondBalance}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.thirdCount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.thirdBalance}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.fourthCount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.fourthBalance}</div>
            </td>
        </>
    )
}

export default OutstandingBalanceList;