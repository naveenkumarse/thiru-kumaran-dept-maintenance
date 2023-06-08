import React, { useState } from "react";
import AccountTable from "./accountTable";

const Account = () => {
    const [todaydate, setTodayDate] = useState(new Date());
    const [enddate, setEndDate] = useState(new Date());
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">
                <div className="w-full">
                    <div className="bg-white m-5 p-4" >
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Account <span class="font-normal"></span> </h1>
                    </div>
                    <form class="mt-6">
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
                    <AccountTable startDate={todaydate} endDate={enddate} />
                </div>
            </div>
        </>
    )

}
export default Account;
