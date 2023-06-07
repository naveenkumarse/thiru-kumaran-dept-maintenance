import React from "react";


const VerifyList = ({res}) => {
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
      
            </tr>
        </>
    )
}

export default VerifyList;