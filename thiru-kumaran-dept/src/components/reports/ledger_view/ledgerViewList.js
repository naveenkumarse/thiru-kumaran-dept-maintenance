import React from "react";
import LedgerViewAmountList from "./ledgerViewAmoutList";

const LedgerViewList = ({loan}) => {
    return (
            <tr>
                <td class="p-2 whitespace-nowrap ">
                    <div class="text-left">{loan.loanNo}</div>
                </td>
                <td class="p-2 whitespace-nowrap ">
                    <div class="text-left">{loan.name}</div>
                </td><td class="p-2 whitespace-nowrap ">
                    <div class="text-left">{loan.address}</div>
                </td><td class="p-2 whitespace-nowrap ">
                    <div class="text-left">{loan.preBalance}</div>
                </td>
                <td class="p-2 whitespace-nowrap ">
                    <div class="text-left">{loan.total}</div>
                </td>
                <td class="p-2 whitespace-nowrap  ">
                    <div class="text-left">{loan.balance}</div>
                </td>
                {loan["dateValue"]&&loan["dateValue"].map((arr, i)=> <LedgerViewAmountList key={i} amount={arr["amount"]}/>)}
               
            </tr>
    )
}

export default LedgerViewList;