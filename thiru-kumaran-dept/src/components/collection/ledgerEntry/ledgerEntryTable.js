import React, { useEffect, useState } from "react";
import LedgerEntryList from "./ledgerEntryList";
import { getActiveLoansLedgerView } from "../../../api";
const LedgerEntryTable = () => {
    const [dates, setDates] = useState([])
    const [ledgerEntries, setLedgerEntries] = useState([
        {
            "loanNo": "Lon01",
            "name": "Dharani",
            "address": "123,thangavel nagar",
            "balance": "4000",
            "payAmount": "50",
            "dateValue": [
                {date:"2023-05-24", amount:"50"},
                {date:"2023-05-25", amount:"50"},
                {date:"2023-05-26", amount:"50"},
                {date:"2023-05-27", amount:"50"},
                {date:"2023-05-21", amount:"50"},
                {date:"2023-05-22", amount:"50"},
                {date:"2023-05-23", amount:"50"},
                {date:"2023-05-28", amount:"50"},
                {date:"2023-05-29", amount:"50"}
            ]
        },
        {
            "loanNo": "Lon01",
            "name": "Dharani",
            "address": "123,thangavel nagar",
            "balance": "4000",
            "payAmount": "50",
            "dateValue": [
                {date:"2023-05-24", amount:"50"},
                {date:"2023-05-25", amount:"50"},
                {date:"2023-05-26", amount:"50"},
                {date:"2023-05-27", amount:"50"},
                {date:"2023-05-21", amount:"50"},
                {date:"2023-05-22", amount:"50"},
                {date:"2023-05-23", amount:"50"},
                {date:"2023-05-28", amount:"50"},
                {date:"2023-05-29", amount:"50"}
            ]
        },
    ]);
    // useEffect(()=>{
    //     const fetchData = async () => {
    //         try {
    //             const body = {
    //                 "lineId":localStorage.getItem('lineId')
    //             };
    //           await getActiveLoansLedgerView(body, setLedgerEntries); // Assuming getLineFE is an asynchronous function 
    //         } catch (error) {
    //           console.error("Error fetching Bill Entry data:", error);
    //         }
    //       };
    //       fetchData();
    // },[])
    useEffect(()=>{
        console.log(ledgerEntries)
        if (ledgerEntries && ledgerEntries.length !==0){
            const dateList = ledgerEntries[0]["dateValue"].map((arr)=> arr['date'])
            setDates(dateList)
        }
    },[ledgerEntries])
    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-5 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full pt-5  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">

                        <div className="flex inline justify-around lg:justify-around">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-semibold text-gray-800">Ledger Entry</h2>
                            </header>
                            <div class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-semibold text-gray-800">Total amount : 7000</h2>
                            </div>
                            <div class='max-w-md '>
                                <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-black-600">
                                    <div class="grid place-items-center h-full w-12 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input
                                        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                        type="text"
                                        id="search"
                                        placeholder="Search" />
                                </div>
                            </div>
                        </div>

                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-black-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace">
                                                <div class="font-bold text-left">Loan No.</div>
                                            </th>
                                            <th class="p-2 whitespace">
                                                <div class="font-bold text-left">Name</div>
                                            </th>
                                            <th class="p-2 whitespace">
                                                <div class="font-bold text-left">Address</div>
                                            </th>
                                            <th class="p-2 whitespace">
                                                <div class="font-bold text-center">Bal</div>
                                            </th>
                                            <th class="p-2 ">
                                                <div class="font-bold text-center">Pay Amount</div>
                                            </th>
                                            {dates && dates.length> 0 && dates.map((date)=> {
                                                return (<th class="py-6 px-1 whitespace">
                                                    <div class="font-bold text-center rotate-45">{date}</div>
                                                </th>)
                                            })}
                                            <th class="p-2 whitespace">
                                                <div class="font-bold text-center"> Amount </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                           {ledgerEntries && ledgerEntries.length > 0 && ledgerEntries.map((ledgerEntry,i)=> <LedgerEntryList key={i} ledgerEntry={ledgerEntry} />)} 
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

export default LedgerEntryTable;