import React, { useEffect, useState } from "react";
import AccountList from "./accountList";
import { getAllAccount } from "../../../api";

const AccountTable = ({startDate, endDate}) => {
    const [total, newTotal] = useState(0);
    const [accountlist,setAccountList] = useState(
        [
            {
                "id": 23,
                "name": "Line 1 BILL",
                "description": null,
                "debit": 0,
                "credit": 6000,
                "date": "2023-06-05",
                "extraHead": false,
                "balance": 0
            },
            {
                "id": 24,
                "name": "Line 1 LOAN",
                "description": null,
                "debit": 5000,
                "credit": 0,
                "date": "2023-06-05",
                "extraHead": false,
                "balance": 0
            },
            {
                "id": 25,
                "name": "Line 1 COMMISSION",
                "description": null,
                "debit": 0,
                "credit": 500,
                "date": "2023-06-05",
                "extraHead": false,
                "balance": 0
            },
            {
                "id": 26,
                "name": "Line 1 SEETU",
                "description": null,
                "debit": 0,
                "credit": 20,
                "date": "2023-06-05",
                "extraHead": false,
                "balance": 0
            },
            {
                "id": 27,
                "name": "Line 1EXCESS",
                "description": null,
                "debit": 0,
                "credit": 0,
                "date": "2023-06-05",
                "extraHead": false,
                "balance": 0
            },
            {
                "id": 28,
                "name": "Line 1 BILL",
                "description": null,
                "debit": 0,
                "credit": 5000,
                "date": "2023-06-06",
                "extraHead": false,
                "balance": 0
            },
            {
                "id": 29,
                "name": "Line 1 LOAN",
                "description": null,
                "debit": 5000,
                "credit": 0,
                "date": "2023-06-06",
                "extraHead": false,
                "balance": 0
            },
            {
                "id": 30,
                "name": "Line 1 COMMISSION",
                "description": null,
                "debit": 0,
                "credit": 500,
                "date": "2023-06-06",
                "extraHead": false,
                "balance": 0
            },
            {
                "id": 31,
                "name": "Line 1 SEETU",
                "description": null,
                "debit": 0,
                "credit": 20,
                "date": "2023-06-06",
                "extraHead": false,
                "balance": 0
            },
            {
                "id": 32,
                "name": "Line 1EXCESS",
                "description": null,
                "debit": 0,
                "credit": 0,
                "date": "2023-06-06",
                "extraHead": false,
                "balance": 0
            }
        ]
        
    )
    // useEffect(()=>{
    //     const body = {
    //             "startDate":startDate,
    //             "endDate":endDate
    //         }
    //     try {
    //         getAllAccount(body, setAccountList)
    //     } catch (error) {
    //         console.log("error in fetching monthly bill")
    //     }
    // }, [])
    // use reduce function to calculate the total amount 

    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full pt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">

                        <div className="flex inline lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-bold text-gray-800">Account</h2> <br/>
                                <h2 class="font-bold text-gray-800">Total Amount : {total} </h2>
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
                                        placeholder="Search" />
                                </div>
                            </div>
                        </div>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-black-400 bg-gray-50">
                                        <tr>
                                        <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">SNo.</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Date</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Credit </div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Debit</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Balance</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                        
                                           {accountlist && accountlist.length> 0 && accountlist.map((res)=>{
                                            return <AccountList key={res.id} res={res}/>
                                           })} 
                                        
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

export default AccountTable;