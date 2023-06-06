import React from "react";


const ExcessAmountList = ({loan}) => {
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.loanNo}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.address}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.billAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.excess}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.date}</div>
            </td>
        </tr>
    )
}

export default ExcessAmountList;