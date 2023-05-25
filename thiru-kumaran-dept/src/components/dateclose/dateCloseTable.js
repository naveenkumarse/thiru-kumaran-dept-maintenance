import React, { useEffect, useState } from "react";
import { getLastEntriesFE } from "../../api";

const DateCloseTable = () => {

    const [lastEntries, setLastEntries] = useState();
    const line_name = localStorage.getItem("line_name");
   // const line_name = "line A";
    
    const body = {line_name};
    useEffect(() => {
        getLastEntriesFE(body, setLastEntries)
    }, [])
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
                                                <div class="font-bold text-center"> A/C Number</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center">A/C Close Date</div>
                                            </th>

                                        </tr>
                                    </thead>
                                    {lastEntries?.map((lastEntry, i) => {
                                        <tbody class="text-sm text-gray-600 divide-y divide-gray-100">
                                            <tr>
                                                <td class="p-2 whitespace-nowrap ">
                                                    <div class="font-medium text-lg text-center text-gray-400">{i}</div>
                                                </td>
                                                <td class="p-2 whitespace-nowrap ">
                                                    <div class="font-medium text-lg text-center text-gray-400">{lastEntry.date}</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DateCloseTable;