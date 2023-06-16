import React, { useState } from "react";
import { createDailyCollectionFE } from "../../../api";
const LedgerEntryList = ({ledgerEntry}) => {
    const [amount,setAmount] = useState(0);
    const handleEnter = (e) =>{
        e.preventDefault();
        const body = {
            "loanNo":ledgerEntry.loanNo,
            "amountPaid":amount,
            "date":localStorage.getItem('date'),
            "lineId":localStorage.getItem('lineId')
        }
        createDailyCollectionFE(body)
        window.location.reload();
    }
    return (
        <tr>
            <td class="p-2 whitespace">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{ledgerEntry.loanNo}</div>
                </div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-left">{ledgerEntry.name}</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-left">{ledgerEntry.address}</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-left">{ledgerEntry.balance}</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-left">{ledgerEntry.payAmount}</div>
            </td>
            {ledgerEntry.hasOwnProperty('dateValue') ? ledgerEntry.dateValue.length > 0 && ledgerEntry.dateValue.map((arr)=> {
             return (<th class="py-6 px-1 whitespace">
             <div class="text-left">{arr['amount']}</div>
            </th>)
            }) : null}
            <td class="p-2 whitespace">
                <div class="text-left"><input type="number" className="border border-slate-300 rounded-md px-4" min={0} value={amount} onChange={(e) => setAmount(e.target.value)} w-2 /></div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-left">     <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={(e)=> handleEnter(e)} >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                    Enter
                </button></div>
            </td>
        </tr>
    )
}
export default LedgerEntryList;