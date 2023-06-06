import React, { useState } from "react";


const NipPartyList = ({loan}) => {
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{loan.loanNo}</div>
                </div>
            </td>
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
                <div class="text-left font-medium">{loan.loanDate}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.closeDate}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.loanAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.balance}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.paydayss}</div>
            </td>
        </tr>
    )
}

export default NipPartyList;