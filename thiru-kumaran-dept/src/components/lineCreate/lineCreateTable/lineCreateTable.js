import React, { useState } from "react";
import ListCreateItems from "./listCreateItems";

const LineCreateTable = () => {
    const [lines, setLines] = useState([
        {
            "id": 1,
            "lineId": "Ln03",
            "lineName": "Line 3 update",
            "createdOn": "2023-05-30",
            "updatedOn": "2023-05-30"
        },
        {
            "id": 101,
            "lineId": "Ln01",
            "lineName": "Line 1",
            "createdOn": "2023-01-10",
            "updatedOn": "2023-05-10"
        }
    ])
    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-52">
                <div class="flex flex-col justify-center h-full">

                    <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-gray-800">Line Details</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-semibold text-left">Id</div>
                                            </th>
                                            <th class=" pl-24 whitespace-nowrap">
                                                <div class="font-semibold text-left">Name</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                           {lines.map((line) => (<ListCreateItems key={line.id} line={line}/>))}
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
export default LineCreateTable;