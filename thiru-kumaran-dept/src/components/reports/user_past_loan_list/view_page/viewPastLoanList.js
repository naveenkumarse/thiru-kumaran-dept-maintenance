import React, { useState } from "react";


const ViewPastLoanList = () => {
    const [amount, setAmount] = useState(0);
   
    return (
        <>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">Philip Harbach</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">philip.h@gmail.com</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">$2,767.04</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">$2,344</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">$2,344</div>
            </td>


            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium"><button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" >
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black text-sm group-hover:text-white">View</span>
                </button></div>
            </td>


        </>
    )
}

export default ViewPastLoanList;