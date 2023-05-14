import React from "react";

import ListRow from "./listRow";

const TodayListTable = () => {
    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">
                        <div className="flex inline justify-around lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-semibold text-gray-800">Today List</h2>
                            </header>
                            <div class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-semibold text-gray-800">Total amount : 7000</h2>
                            </div>
                        </div>

                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-black-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Loan No.</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Bill Amount</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Amount paid</div>
                                            </th>
                                            <th class="p-2  whitespace-nowrap">
                                                <div class="font-bold text-left ml-7">Update</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left ml-7">Delete</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        <tr>
                                            <ListRow />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TodayListTable;