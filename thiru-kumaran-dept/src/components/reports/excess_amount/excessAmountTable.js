import React, { useEffect, useState } from "react";
import ExcessAmountList from "./excessAmountList";
import { getExcess } from "../../../api";

const ExcessAmountTable = () => {
    const [list, setList] = useState([]);
    useEffect(()=>{
            const body = {
                "lineId": localStorage.getItem('lineId')
            }
            try {
               getExcess(body, setList)
            } catch (error) {
                console.log("error in fetching ledger report data")
            }
        }, [])
    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full pt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">

                        <div className="flex inline lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-bold text-gray-800">Excess Bill </h2>
                            </header>
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
                                                <div class="font-bold text-left">Address</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Bill Amount</div>
                                            </th>
                                            <th class="p-2  whitespace-nowrap">
                                                <div class="font-bold text-left ">Excess Amount</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left "> Date</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {list && list.length && list.map((loan, i)=> <ExcessAmountList key={i} loan={loan} />)}
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

export default ExcessAmountTable;