import React, { useState } from "react";


const DetailsList = ({ res,i }) => {

    return (
        <>
            <tr>


                <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="font-medium text-gray-800">{res.thittamList[i].name}</div>
                    </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="font-medium text-gray-800">{res.thittamList[i].description}</div>
                    </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{res.thittamList[i].debit}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium">{res.thittamList[i].credit}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium">{res.thittamList[i].balance}</div>
                </td>
            </tr>
        </>
    )
}

export default DetailsList;