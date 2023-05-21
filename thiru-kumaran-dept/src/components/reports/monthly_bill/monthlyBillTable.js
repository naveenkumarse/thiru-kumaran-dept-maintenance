import React from "react";

const MonthlyBillTable = () => {
    return (
        <>
         <div className="flex inline lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-lighter text-2xl text-gray-800">Entry Details: </h2>
                                <h1 class="font-lighter text-3xl text-gray-800">Total: </h1> 
                            </header>
                            
        <div class='max-w-md mr-5'>
                                <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-black-600">
                                    <div class="grid place-items-center h-full w-12 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input
                                        class="peer h-full w-full outline-none text-sm text-gray-700 pr-10"
                                        type="text"
                                        id="search"
                                        placeholder="Search"  />
                                </div>
                            </div>
                            </div>
                        
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
                                                <div class="font-bold text-center"> DL No</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center">Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center"> Address</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center">Paid Amount</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center"> Excess</div>
                                            </th>
                                        


                                        </tr>
                                    </thead>
                                    <tbody class="text-sm text-gray-600 divide-y divide-gray-100">
                                        <tr>
                                            <td class="p-2 whitespace-nowrap ">
                                                
                                                    <div class="font-medium text-lg text-center text-gray-400">1</div>
                                              
                                            </td>
                                            <td class="p-2 whitespace-nowrap ">
                                              
                                                    <div class="font-medium text-lg text-center text-gray-400">Naveenkumar</div>
                                              
                                            </td>
                                        </tr>
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