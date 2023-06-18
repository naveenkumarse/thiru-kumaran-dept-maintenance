import React from "react";


const VerifyList = ({res}) => {
    return (
        <>
        <tr>

      
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{res.debit}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{res.credit}</div>
                </div>
            </td>
      
            </tr>
        </>
    )
}

export default VerifyList;