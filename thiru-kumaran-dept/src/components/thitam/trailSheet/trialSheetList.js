import React, { useState } from "react";


const TrialSheetList = ({res,index}) => {
    const [amount, setAmount] = useState(0);
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

export default TrialSheetList;