import React, { useState } from "react";
import BillNotPaid from "./billNotPaid";


const BillNotPaidList = (loan) => {
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
                <div class="text-left font-medium">{loan.address}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.loanAmount*loan.interest/100}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.paidAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.loanDate}</div>
            </td>


        </tr>
    )
}

export default BillNotPaidList;