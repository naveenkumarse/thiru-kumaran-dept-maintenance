import React, { useState } from "react";
import { updateDailyCollection } from "../../../api";
import { useNavigate } from 'react-router-dom';

const ListRow = ({todayEntry, total}) => {
    const navigate = useNavigate();
    const pageId = 3;
    const [amount, setAmount] = useState(0);
    const handleEnter = (e) =>{
        e.preventDefault();
        const body = {

            "loanNo":todayEntry.loanNo,
            "date":localStorage.getItem('date'),
            "lineId":localStorage.getItem('lineId'),
            "newAmountPaid":amount,
            "oldAmount":todayEntry.billAmount
        }
        updateDailyCollection(body)
        window.location.reload();
    }
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{todayEntry.loanNo}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{todayEntry.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{todayEntry.billAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{todayEntry.excess}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="font-medium text-center">{total}</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center"><input type="number" className="border border-slate-300 rounded-md px-4" min={0} value={amount} onChange={(e) => setAmount(e.target.value)} w-2 /></div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-left">     <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={(e)=> handleEnter(e)} >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                    Enter
                </button></div>
            </td>
        </tr>
    )
}

export default ListRow;