import React from "react";

const TotalLedgerList = ({loan, total}) => {

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
            {/* <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{loan.orderNo}</div>
            </td> */}
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.address}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.loanDate}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.closeDate}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.loanAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.balance}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.paidAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.paydayss}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{total}</div>
            </td>
        </tr>
    )
}

export default TotalLedgerList;