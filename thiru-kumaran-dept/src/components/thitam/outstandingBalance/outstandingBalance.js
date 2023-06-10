import React, { useState } from "react";
import OutstandingBalanceTable from "./outstandingBalanceTable";
import { getOutstandingBalance } from "../../../api";


const OutstandingBalance = () => {
    const [todaydate, setTodayDate] = useState(new Date());
    const [outstandingBalance, setoutstandingBalance] = useState([
        // {
        //     "id": 3,
        //     "date": "2023-06-05",
        //     "lineName": "Line 1",
        //     "firstCount": 2,
        //     "firstBalance": 10000,
        //     "secondCount": 2,
        //     "secondBalance": 10000,
        //     "thirdCount": 2,
        //     "thirdBalance": 10000,
        //     "fourthCount": 4,
        //     "fourthBalance": 20000
        // }
    ]);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const body = {
                "date":todaydate,
            }
        try {
            getOutstandingBalance(body,setoutstandingBalance )
        } catch (error) {
            console.log("error in fetching monthly bill")
        }
    }
    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-11/12 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Outstanding Balance <span class="font-normal"></span> </h1>
                    </div>
                    <form class="mt-6" onSubmit={(e)=> handleSubmit(e)}>
                        <div className="flex justify-between">
                            <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Enter date</label>
                        </div>


                        <div className=" flex inline ">

                            <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-1/3 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mr-20" value={todaydate} onChange={(e) => setTodayDate(e.target.value)} required />
                            <button type="submit" class="w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                Search
                            </button>
                        </div>
                        <div>
                        </div>
                    </form>

                    <br />
                    <br />


                    <div className="pt-12">
                        <OutstandingBalanceTable outstandingBalance={outstandingBalance} />
                    </div>

                </div>

            </div>
        </>
    )
}
export default OutstandingBalance;