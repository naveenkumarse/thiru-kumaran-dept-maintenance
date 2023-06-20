import React, { useState } from "react";
import AccountTable from "./accountTable";
import { getAllAccount } from "../../../api";

const Account = () => {
    const [todaydate, setTodayDate] = useState(new Date());
    const [enddate, setEndDate] = useState(new Date());
    const [accountlist,setAccountList] = useState(
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
            // {
            //     "id": 26,
            //     "name": "Line 1 SEETU",
            //     "description": null,
            //     "debit": 0,
            //     "credit": 20,
            //     "date": "2023-06-05",
            //     "extraHead": false,
            //     "balance": 0
            // },
            // {
            //     "id": 27,
            //     "name": "Line 1EXCESS",
            //     "description": null,
            //     "debit": 0,
            //     "credit": 0,
            //     "date": "2023-06-05",
            //     "extraHead": false,
            //     "balance": 0
            // },
            // {
            //     "id": 28,
            //     "name": "Line 1 BILL",
            //     "description": null,
            //     "debit": 0,
            //     "credit": 5000,
            //     "date": "2023-06-06",
            //     "extraHead": false,
            //     "balance": 0
            // },
            // {
            //     "id": 29,
            //     "name": "Line 1 LOAN",
            //     "description": null,
            //     "debit": 5000,
            //     "credit": 0,
            //     "date": "2023-06-06",
            //     "extraHead": false,
            //     "balance": 0
            // },
            // {
            //     "id": 30,
            //     "name": "Line 1 COMMISSION",
            //     "description": null,
            //     "debit": 0,
            //     "credit": 500,
            //     "date": "2023-06-06",
            //     "extraHead": false,
            //     "balance": 0
            // },
            // {
            //     "id": 31,
            //     "name": "Line 1 SEETU",
            //     "description": null,
            //     "debit": 0,
            //     "credit": 20,
            //     "date": "2023-06-06",
            //     "extraHead": false,
            //     "balance": 0
            // },
            // {
            //     "id": 32,
            //     "name": "Line 1EXCESS",
            //     "description": null,
            //     "debit": 0,
            //     "credit": 0,
            //     "date": "2023-06-06",
            //     "extraHead": false,
            //     "balance": 0
            // }
        ]
        
    )
    const handleSubmit = (e)=>{
        e.preventDefault();
        const body = {
                "startDate":todaydate,
                "endDate":enddate
            }
        try {
            getAllAccount(body, setAccountList)
        } catch (error) {
            console.log("error in fetching monthly bill")
        }
    }
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">
                <div className="w-full">
                    <div className="bg-white m-5 p-4" >
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Account <span class="font-normal"></span> </h1>
                    </div>
                    <form class="mt-6" onSubmit={(e)=> handleSubmit(e)}>
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
                    </div>
                    <AccountTable className="mb-5" accountlist={accountlist} />
                </div>
            </div>
        </>
    )

}
export default Account;
