import React from "react";

const MonthlyLoanList = ({monthlyLoan}) =>{
    return(
        <tr>
          <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{monthlyLoan.loanNo}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{monthlyLoan.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{monthlyLoan.loanAmount}</div>
            </td>   
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{monthlyLoan.interest}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-lg text-center">{monthlyLoan.date}</div>
            </td>         
        </tr>
    )
}

export default MonthlyLoanList;