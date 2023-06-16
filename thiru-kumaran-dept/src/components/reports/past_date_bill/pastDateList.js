import React from "react";


const PastDateBillList = ({pastDateBill}) =>{
    return(
        <tr>
          <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{pastDateBill.loanNo}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{pastDateBill.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{pastDateBill.address}</div>
            </td>   
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{pastDateBill.billAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{pastDateBill.excess ? pastDateBill.excess : 0 }</div>
            </td>         
        </tr>
    )
}

export default PastDateBillList;