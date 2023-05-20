import React from "react";

const BillEntryList = () =>{
    return(
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
                <div class="text-lg text-center">??</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">??</div>
            </td>
         
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">3000</div>
            </td>
         
        </>
    )
}

export default BillEntryList;