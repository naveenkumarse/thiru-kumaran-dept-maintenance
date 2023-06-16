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
                <div class="text-left">{billentry.billAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{billentry.excess ? billentry.excess : 0 }</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{total}</div>
            </td>
         
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{billentry.time.substring(0,5)}</div>
            </td>
         
        </tr>
    )
}

export default BillEntryList;