import React from "react";

const BulkPaidList = ({loan}) => {
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.loanNo}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.address}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.loanAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.billAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.date}</div>
            </td>
        </tr>
    )
}

export default BulkPaidList;