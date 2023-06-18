import React, { useState } from "react";


const DetailsList = ({ res, balance }) => {

    return (
        <>
            <tr>


                <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="text-left">{res.name}</div>
                    </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="text-left">{res.description}</div>
                    </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{res.debit}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{res.credit}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{balance}</div>
                </td>
            </tr>
        </>
    )
}

export default DetailsList;