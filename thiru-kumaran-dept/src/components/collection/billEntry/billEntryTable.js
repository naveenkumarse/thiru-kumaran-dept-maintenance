import React, { useEffect, useState } from "react";
import BillEntryList from "./billEntryList";
import { getBillEntry } from "../../../api";
const BillEntryTable = () => {
    const [total, setTotal] = useState([]);
    const [billentries, SetBillentries] = useState([
        // {
        //     "loanNo": "Lon02",
        //     "name": "Siva",
        //     "billAmount": 50,
        //     "excess": 100,
        //     "time": "22:02:06.182998"
        // },
        // {
        //     "loanNo": "Lon01",
        //     "name": "Dharani",
        //     "billAmount": 50,
        //     "excess": 0,
        //     "time": "22:07:20.880552"
        // },
        // {
        //     "loanNo": "Lon01",
        //     "name": "Dharani",
        //     "billAmount": 50,
        //     "excess": 0,
        //     "time": "22:07:20.880552"
        // },
        // {
        //     "loanNo": "Lon01",
        //     "name": "Dharani",
        //     "billAmount": 50,
        //     "excess": 100,
        //     "time": "22:07:20.880552"
        // },
        // {
        //     "loanNo": "Lon01",
        //     "name": "Dharani",
        //     "billAmount": 50,
        //     "excess": 0,
        //     "time": "22:07:20.880552"
        // }
    ]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const body = {
                    "lineId":localStorage.getItem('lineId'),
                    "date": localStorage.getItem('date')
                };
              await getBillEntry(body, SetBillentries); // Assuming getLineFE is an asynchronous function 
            } catch (error) {
              console.error("Error fetching Bill Entry data:", error);
            }
          };
          fetchData();
    },[])
    useEffect(()=>{
        const newTotal = [];
        for(let i = 0; i <billentries.length;i++){
            if(i===0){
                newTotal.push(parseInt(billentries[i]["billAmount"]) + parseInt(billentries[i]["excess"]));
            }
            else{
            newTotal.push(parseInt(billentries[i]["billAmount"]) + parseInt(billentries[i]["excess"]) + newTotal[i-1])
            }
            console.log(newTotal)
        }
        setTotal(newTotal)
    },[billentries])
    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full pt-5  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">

                        <div className="flex inline justify-around lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-semibold text-gray-800">Bill Entry</h2>
                            </header>
                        
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
                                        placeholder="Search.." />
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
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Bill Amount</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center">Excess</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center">Total</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center"> Time</div>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {billentries?.map((billentry, i) => <BillEntryList key={i} billentry={billentry} total={total[i]} />)}                                        
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BillEntryTable;