import React, { useState } from "react";
import NipPartyList from "./nipPartyList";
import {getNipParty } from "../../../api";
const NipPartyTable = () => {
    const [number, setNumber ]= useState(0);
    const [values, setValues] = useState([])
    const handleClick = (e) => {
        try {
            const body = {
                lineId: localStorage.getItem('lineId'),
                number: number
            }
            getNipParty(body, setValues)
        } catch (error) {
            console.log("Error in fetching NIP party", error)
        }
}

    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full pt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">

                        <div className="flex inline lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-bold text-gray-800">Nip Party </h2>
                            </header>

                        </div>
                        <div class='max-w-md mx-8'>
                            <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-black-600">
                                <div class="grid place-items-center h-full w-12 text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>

                                <input
                                    class="peer h-10 w-full outline-none text-sm text-gray-700 pr-10 mr-8"
                                    type="text"
                                    id="search"
                                    placeholder="Search" 
                                    onChange={(e)=> setNumber(e.target.value)}
                                    />
                                <button class="group relative h-10 w-48 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={(e)=> handleClick(e)} >
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
                                                <div class="font-bold text-left">Loan Date</div>
                                            </th>
                                            <th class="p-2  whitespace-nowrap">
                                                <div class="font-bold text-left ">Close Date</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left "> Loan Amount</div>
                                            </th>
                                            <th class="p-2  whitespace-nowrap">
                                                <div class="font-bold text-left ">Paid Amount</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left "> Balance</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left "> Pay Days</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                          {values && values.length > 0 &&  values.map((loan, i)=> <NipPartyList key={i} loan={loan} /> )}  
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

export default NipPartyTable;