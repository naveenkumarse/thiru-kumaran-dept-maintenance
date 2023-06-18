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
              await getBillEntry(body, SetBillentries); 
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
                                                <div class="font-bold text-left">Excess</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Total</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left"> Time</div>
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        {billentries.length > 0 && billentries.map((billentry, i) => <BillEntryList key={i} billentry={billentry} total={total[i]} />)}                                        
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