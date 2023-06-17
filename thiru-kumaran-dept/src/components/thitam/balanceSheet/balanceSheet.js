import React, { useState } from "react";

import BalanceSheetTable from "./balanceSheetTable";
import { createUpdateHead } from "../../../api";


const BalanceSheet = () => {
    const [todaydate, setTodayDate] = useState(new Date());
    const [enddate, setEndDate] = useState(new Date());
    const [balanceList,setBalanceList] = useState(
        [
            // {
            //     "id": 23,
            //     "name": "Line 1 BILL",
            //     "description": null,
            //     "debit": 0,
            //     "credit": 6000,
            //     "date": "2023-06-05",
            //     "extraHead": false,
            //     "balance": 0
            // },
            // {
            //     "id": 24,
            //     "name": "Line 1 LOAN",
            //     "description": null,
            //     "debit": 5000,
            //     "credit": 0,
            //     "date": "2023-06-05",
            //     "extraHead": false,
            //     "balance": 0
            // },
            // {
            //     "id": 25,
            //     "name": "Line 1 COMMISSION",
            //     "description": null,
            //     "debit": 0,
            //     "credit": 500,
            //     "date": "2023-06-05",
            //     "extraHead": false,
            //     "balance": 0
            // },
        ]
    ) 
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            "startDate":todaydate,
            "endDate":enddate
        }
        console.log(body)
        try {
        createUpdateHead(body, setBalanceList)
        } catch (error) {
            console.log("error in fetching head data", error)
        }        
    }
    
    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Balance Sheet <span class="font-normal"></span> </h1>
                    </div>
                    <form class="mt-6" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="flex justify-between">
                            <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Start date</label>
                            <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">End date</label>
                        </div>


                        <div className=" flex inline justify-between">
                            <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mr-20" value={todaydate} onChange={(e) => setTodayDate(e.target.value)} required />
                            <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={enddate} onChange={(e) => setEndDate(e.target.value)} required />
                        </div>

                        <div>
                            <button type="submit" class="w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                Search
                            </button>
                           
                        </div>
                    </form>

                    <br />
                    <br />


                    <div className="pt-12">
                        <BalanceSheetTable balanceList={balanceList} />
                    </div>

                </div>

            </div>
        </>
    )
}
export default BalanceSheet;