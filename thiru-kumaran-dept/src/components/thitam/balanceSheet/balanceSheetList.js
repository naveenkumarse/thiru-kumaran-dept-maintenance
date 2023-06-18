import React from "react";


const BalanceSheetList = ({res,index}) => {
    return (
        <>
        <tr>

      
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{index+1}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{res.name}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.credit}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{res.debit}</div>
            </td>
            </tr>
        </>
    )
}

export default BalanceSheetList;