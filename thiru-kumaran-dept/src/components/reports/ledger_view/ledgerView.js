import React, { useState } from "react";
import LedgerViewTable from "./ledgerViewTable";
import { getLedgerReport } from "../../../api";

const LedgerView = () => {
    const [todaydate, setTodayDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [list, setList] = useState(
        [
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
                ],
                "preBalance": 10000,
                "total": 0
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
                ],
                "preBalance": 10000,
                "total": 0
            }]
    )
    const handleSubmit = (e) =>{
        e.preventDefault();
        // const body = {
        //     "lineId":localStorage.getItem('lineId'),
        //     "startDate":"01-06-2023",
        //     "endDate":"08-06-2023"
        // }
        // try {
        // getLedgerReport(body, setList);
        // } catch (error) {
        //     console.log("Error in fetching ledger view report", error);
        // }        
    }
    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Ledger View <span class="font-normal"></span> </h1>
                    </div>
                    <form class="mt-6" onSubmit={(e)=> handleSubmit(e)}>
                        <div className="flex justify-between">
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Start date</label>
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">End date</label>
                        </div>
                         

                        <div className=" flex inline justify-between">
                            <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mr-20" value={todaydate} onChange={(e) => setTodayDate(e.target.value)} required />
                            <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                        </div>

                        <div>
                            <button type="submit" class="w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                Search
                            </button>
                            <button type="submit" class="w-1/6 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                Cancel
                            </button>
                        </div>
                    </form>

                    <br/>
                    <br/>


                    <div className="pt-12">
                        <LedgerViewTable list={list} />
                    </div>

                </div>

            </div>
        </>
    )
}
export default LedgerView;