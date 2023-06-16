import React from "react";

const BillNotPaidList = ({loan}) => {
    return (
        <tr>
                        <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{loan.loanNo}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.address}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.payAmount}</div>
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

export default BillNotPaidList;