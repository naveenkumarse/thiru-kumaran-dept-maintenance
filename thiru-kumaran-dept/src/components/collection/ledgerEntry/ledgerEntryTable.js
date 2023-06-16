import React, { useEffect, useState } from "react";
import LedgerEntryList from "./ledgerEntryList";
import { getActiveLoansLedgerView } from "../../../api";
const LedgerEntryTable = () => {
    const [dates, setDates] = useState([])
    const [ledgerEntries, setLedgerEntries] = useState(
    //     [
    //     {
    //         "loanNo": "Lon01",
    //         "name": "Dharani",
    //         "address": "123,thangavel nagar",
    //         "balance": "4000",
    //         "payAmount": "50",
    //         "dateValue": [
    //             {date:"2023-05-24", amount:"50"},
    //             {date:"2023-05-25", amount:"50"},
    //             {date:"2023-05-26", amount:"50"},
    //             {date:"2023-05-27", amount:"50"},
    //             {date:"2023-05-21", amount:"50"},
    //             {date:"2023-05-22", amount:"50"},
    //             {date:"2023-05-23", amount:"50"},
    //             {date:"2023-05-28", amount:"50"},
    //             {date:"2023-05-29", amount:"50"}
    //         ]
    //     },
    //     {
    //         "loanNo": "Lon01",
    //         "name": "Dharani",
    //         "address": "123,thangavel nagar",
    //         "balance": "4000",
    //         "payAmount": "50",
    //         "dateValue": [
    //             {date:"2023-05-24", amount:"50"},
    //             {date:"2023-05-25", amount:"50"},
    //             {date:"2023-05-26", amount:"50"},
    //             {date:"2023-05-27", amount:"50"},
    //             {date:"2023-05-21", amount:"50"},
    //             {date:"2023-05-22", amount:"50"},
    //             {date:"2023-05-23", amount:"50"},
    //             {date:"2023-05-28", amount:"50"},
    //             {date:"2023-05-29", amount:"50"}
    //         ]
    //     },
    // ]
    );
   
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const body = {
                    "lineId":localStorage.getItem('lineId')
                };
              await getActiveLoansLedgerView(body, setLedgerEntries); 
            } catch (error) {
              console.error("Error fetching Bill Entry data:", error);
            }
          };
          fetchData();
    },[])
    useEffect(()=>{
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

                        <div className="flex inline ">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-semibold text-gray-800">Ledger Entry</h2>
                            </header>
                            
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
                                                <div class="font-bold text-left">Bal</div>
                                            </th>
                                            <th class="p-2 ">
                                                <div class="font-bold text-left">Pay Amount</div>
                                            </th>
                                            {dates && dates.length> 0 && dates.map((date)=> {
                                                return (<th class="py-6 px-1 whitespace">
                                                    <div class="font-bold text-left rotate-45">{date}</div>
                                                </th>)
                                            })}
                                            <th class="p-2 whitespace">
                                                <div class="font-bold text-left"> Amount </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                           { ledgerEntries&& ledgerEntries.length > 0 && ledgerEntries.map((ledgerEntry,i)=> <LedgerEntryList key={i} ledgerEntry={ledgerEntry} />)} 
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