import React, { useEffect, useState } from "react";
import TotalLedgerList from "./totalLedgerList";
import { getTotalLedgerAll, getTotalLedgerBelow120 } from "../../../api";

const TotalLedgerTable = ({ value, settotalCount }) => {
    const [list, setList] = useState({});
    const [query, setQuery] = useState("");

    useEffect(() => {
        const body = {
            "lineId": localStorage.getItem('lineId'),
            "dateRange": value
        }
        try {   
            getTotalLedgerBelow120(body, setList)
            console.log(list);
            settotalCount(list.loanCount);
        } catch (error) {
            console.log("error in fetching ledger report data")
        }
    }, [list.loanCount])

    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full pt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">

                        <div className="flex inline lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-bold text-gray-800">Total Ledger</h2>
                                {/* <h2 class="font-lighter  text-gray-800">Total Loans: {list.loanCount}</h2> */}
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
                                        placeholder="Search" onChange={event => setQuery(event.target.value)} />
                                </div>
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
                                            {/* <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Order No.</div>
                                            </th> */}
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Address</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">L.Date</div>
                                            </th>
                                            <th class="p-2  whitespace-nowrap">
                                                <div class="font-bold text-left ">C.Date</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left ">Loan</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left ">Balance</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left ">Paid Amount</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left ">Total</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {list["loanData"] && list["loanData"].filter(post => {
                                            if (query === '') {
                                                return post;
                                            } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                                                return post;
                                            }
                                        }).map((loan, i) => <TotalLedgerList loan={loan} key={i} />)}
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

export default TotalLedgerTable;