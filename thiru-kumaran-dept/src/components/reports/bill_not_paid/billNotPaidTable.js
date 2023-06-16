import React, { useEffect, useState } from "react";
import BillNotPaidList from "./billNotPaidList";
import { getBillNotPaid } from "../../../api";

const BillNotPaidTable = () => {
    const [date,setDate] = useState(new Date());
    const [list, setList] = useState([]);
    const handleClick = (e)=>{
        const body = {
            "date": date,
            "lineId": localStorage.getItem('lineId')
        }
        try {
            getBillNotPaid(body, setList)
        } catch (error) {
            console.log("error in fetching Bill not paid report data")
        }
    };
    useEffect(()=>{
        console.log(list);
            },[list])

    return (
        
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full pt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">

                        <div className="flex inline lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-bold text-gray-800">Bill Not Paid </h2>
                            </header>

                        </div>
                        <div class='max-w-md mx-8'>
                            <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-black-600">
                               

                                <input
                                    class="peer h-10 w-full outline-none text-sm text-gray-700 pr-10 mr-8"
                                    type="date"
                                    id="search"
                                    placeholder="Search" value={date} onChange={(e)=>setDate(e.target.value)} />
                                <button class="group relative h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow " onClick={(e)=>handleClick(e)} >
                                    <div class="absolute inset-0 w-3 bg-blue-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <span class="relative text-black group-hover:text-white"> Go!</span>
                                </button>
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
                                                <div class="font-bold text-left">Address</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Pay Amount</div>
                                            </th>
                                            <th class="p-2  whitespace-nowrap">
                                                <div class="font-bold text-left ">Paid</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left "> Date</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                    {list && list.length > 0  && list.map((loan, i)=> <BillNotPaidList key={i} loan={loan} />) }
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

export default BillNotPaidTable;