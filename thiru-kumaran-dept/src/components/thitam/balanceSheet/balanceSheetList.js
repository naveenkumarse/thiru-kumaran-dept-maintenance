import React from "react";


const BalanceSheetList = ({res}) => {
    return (
        <>
        <tr>

      
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{res.id}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{res.name}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.credit}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{res.debit}</div>
            </td>
            </tr>
        </>
    )
}

export default BalanceSheetList;