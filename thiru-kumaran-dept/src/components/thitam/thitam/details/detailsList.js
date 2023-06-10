import React, { useState } from "react";


const DetailsList = ({ res,i }) => {

    return (
        <>
            <tr>


                <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="font-medium text-gray-800">{res.name}</div>
                    </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="font-medium text-gray-800">{res.description}</div>
                    </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{res.debit}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium">{res.credit}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium">{res.balance}</div>
                </td>
            </tr>
        </>
    )
}

export default DetailsList;