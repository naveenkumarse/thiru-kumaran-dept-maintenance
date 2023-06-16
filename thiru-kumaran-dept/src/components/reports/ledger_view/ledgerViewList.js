import React from "react";
import LedgerViewAmountList from "./ledgerViewAmoutList";

const LedgerViewList = ({loan}) => {
    return (
            <tr>
                <td class="p-2 whitespace-nowrap ">
                    <div class="font-medium text-lg text-center text-gray-400">{loan.loanNo}</div>
                </td>
                <td class="p-2 whitespace-nowrap ">
                    <div class="font-medium text-lg text-center text-gray-400">{loan.name}</div>
                </td><td class="p-2 whitespace-nowrap ">
                    <div class="font-medium text-lg text-center text-gray-400">{loan.address}</div>
                </td><td class="p-2 whitespace-nowrap ">
                    <div class="font-medium text-lg text-center text-gray-400">{loan.preBalance}</div>
                </td>
                <td class="p-2 whitespace-nowrap ">
                    <div class="font-medium text-lg text-center text-gray-400">{loan.total}</div>
                </td>
                <td class="p-2 whitespace-nowrap  ">
                    <div class="font-medium text-lg text-center text-gray-400">{loan.balance}</div>
                </td>
                {loan["dateValue"]&&loan["dateValue"].map((arr, i)=> <LedgerViewAmountList key={i} amount={arr["amount"]}/>)}
               
            </tr>
    )
}

export default LedgerViewList;