import React, { useState } from "react";

const LedgerEntryList = () => {
    const [amount,setAmount] = useState(0);
    return (
        <>
            <td class="p-2 whitespace">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">1</div>
                </div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-left">philip.h@gmail.com</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-left font-medium">$2,767.04</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">2000</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">90000</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">1300</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">200</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">200</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">200</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">200</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">200</div>
            </td>
          
            <td class="p-2 whitespace">
                <div class="text-lg text-center">200</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">200</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">200</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">200</div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center"><input type="number" className="border border-slate-300 rounded-md px-4" min={0} value={amount} onChange={(e) => setAmount(e.target.value)} w-2 /></div>
            </td>
            <td class="p-2 whitespace">
                <div class="text-lg text-center">     <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                    </svg>
                    Enter
                </button></div>
            </td>
        </>
    )
}

export default LedgerEntryList;