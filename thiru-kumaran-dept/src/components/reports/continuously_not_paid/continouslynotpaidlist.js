import React, { useState } from "react";


const ContinouslyNotPaidList = ({loan}) => {
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.loanId}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.address}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.loanDate}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.closeDate}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium"> what is loan date</div>
            </td>
        </tr>
    )
}

export default ContinouslyNotPaidList;