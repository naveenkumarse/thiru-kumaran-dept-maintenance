import React from "react";
import OutstandingBalanceList from "./outstandingBalanceList";

const OutstandingBalanceTable = () => {
    const outstandingBalanceResponse = [
        {
            "id": 3,
            "date": "2023-06-05",
            "lineName": "Line 1",
            "firstCount": 2,
            "firstBalance": 10000,
            "secondCount": 2,
            "secondBalance": 10000,
            "thirdCount": 2,
            "thirdBalance": 10000,
            "fourthCount": 4,
            "fourthBalance": 20000
        }
    ]
    return (
        <>

            <div class="flex flex-col justify-center h-full">
                <div class="w-full pt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">
                    <div className="flex inline lg:justify-between">
                        <header class="px-5 py-4 border-b border-gray-100 ">
                            <h2 class="font-bold text-gray-800">Outstanding Balance</h2>
                        </header>
                    </div>

                    <div class="p-3">
                        <div class="overflow-x-auto">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-black-400 bg-gray-50">
                                    <tr>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">DL No.</div>
                                        </th>

                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">Date</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">LineName</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">1st Count</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">1st Balance</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">2nd Count</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">2nd Balance</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">3rd Count</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">3rd Balance</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">4th Count</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">4th Balance</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">

                                    {outstandingBalanceResponse.map((res) => {
                                        return <OutstandingBalanceList key={res.id} res={res} />
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OutstandingBalanceTable;