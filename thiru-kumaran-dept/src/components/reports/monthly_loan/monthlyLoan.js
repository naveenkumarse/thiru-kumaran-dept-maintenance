import React, { useState } from "react";
import DateCloseTable from "./monthlyLoanTable";
import MonthlyLoanTable from "./monthlyLoanTable";

const MonthlyLoan = () => {
    const [todaydate, setTodayDate] = useState(new Date());

    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Closing Date <span class="font-normal"></span> </h1>

                    </div>


                    <form class="mt-6">
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Date of Close</label>
                        <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={todaydate} onChange={(e) => setTodayDate(e.target.value)} required />
                        <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={todaydate} onChange={(e) => setTodayDate(e.target.value)} required />
                        <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Search
                        </button>
                        <button type="submit" class="w-1/3 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Cancel
                        </button>
                    </form>

                    <div className="pt-12">
                        <MonthlyLoanTable />
                    </div>

                </div>

            </div>
        </>
    )
}
export default MonthlyLoan;