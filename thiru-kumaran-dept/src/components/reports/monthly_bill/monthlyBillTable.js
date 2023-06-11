import React from "react";

const MonthlyBillTable = ({monthlyBills}) => {
    return (
        <>              
            <div class="antialiased bg-gray-100 text-gray-600 my-20">
                <div class="flex flex-col justify-center h-full ">

                    <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-gray-800"></h2>
                        </header>
                        
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-bold uppercase text-black-400 bg-gray-50">
                                        <tr>
                                            
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center"> Date</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center">Bill Amount</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm text-gray-600 divide-y divide-gray-100">
                                    {monthlyBills && monthlyBills.length > 0 && monthlyBills.map((monthlyBill)=>{
                                    return(<tr>
                                            <td class="p-2 whitespace-nowrap ">
                                                
                                                    <div class="font-medium text-lg text-center text-gray-400">{monthlyBill.date}</div>
                                              
                                            </td>
                                            <td class="p-2 whitespace-nowrap ">
                                              
                                                    <div class="font-medium text-lg text-center text-gray-400">{monthlyBill.billAmount}</div>
                                              
                                            </td>
                                        </tr>) 
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MonthlyBillTable;