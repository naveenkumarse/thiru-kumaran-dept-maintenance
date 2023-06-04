import React from "react";

const BillEntryList = ({billentry, total}) =>{
    return(
        <tr>
          <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{billentry.loanNo}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{billentry.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{billentry.billAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{billentry.excess ? billentry.excess : 0 }</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{total}</div>
            </td>
         
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{billentry.time.substring(0,5)}</div>
            </td>
         
        </tr>
    )
}

export default BillEntryList;