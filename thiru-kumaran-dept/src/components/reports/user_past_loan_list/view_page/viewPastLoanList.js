import React, { useState } from "react";


const ViewPastLoanList = ({loan}) => {   
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800"></div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">philip.h@gmail.com</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">$2,767.04</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">$2,344</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">$2,344</div>
            </td>
        </tr>
    )
}

export default ViewPastLoanList;