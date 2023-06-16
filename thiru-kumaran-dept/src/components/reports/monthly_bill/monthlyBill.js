import React, { useEffect, useState } from "react";
import { getMonthlyBill } from "../../../api";


const MonthlyBill = () => {
    const [startdate, setStartDate] = useState();
    const [enddate, setEndDate] = useState();
    const [monthlyBills, setMonthlyBills] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            "lineId": localStorage.getItem('lineId'),
            "startDate": startdate,
            "endDate": enddate
        }
        try {
            getMonthlyBill(body, setMonthlyBills);
            console.log(monthlyBills);
        } catch (error) {
            console.log("error in fetching monthly bill")
        }
    }

    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Monthly Bill<span class="font-normal"></span> </h1>
                    </div>
                    <form class="mt-6" onSubmit={(e) => handleSubmit(e)}>
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Staring date:</label>
                        <input id="id" type="date" name="id" placeholder="id" pattern="yyyy-mm-dd" autocomplete="id" class="block w-1/2 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={startdate} onChange={(e) => setStartDate(e.target.value)} required />
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Ending date:</label>
                        <input id="id" type="date" name="id" placeholder="id" pattern="yyyy-mm-dd" autocomplete="id" class="block w-1/2 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={enddate} onChange={(e) => setEndDate(e.target.value)} required />
                        <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Search
                        </button>
                        <button type="submit" class="w-1/3 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Cancel
                        </button>
                    </form><br></br><br></br>
                    <div className="pt-12">
                        <div class="antialiased bg-gray-100 text-gray-600 my-20">
                            <div class="flex flex-col justify-center h-full ">

                                <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                    <header class="px-5 py-4 border-b border-gray-100">
                                        <h2 class="font-semibold text-gray-800"></h2>
                                    </header>

                                    <div class="p-3">
                                        <div class="overflow-x-auto">
                                            <table class="table-auto w-full">
                                                <thead class="text-xs font-bold uppercase text-black-400 bg-gray-50">
                                                    <tr>

                                                        <th class="p-2 whitespace-nowrap">
                                                            <div class="font-bold text-center"> Date</div>
                                                        </th>
                                                        <th class="p-2 whitespace-nowrap">
                                                            <div class="font-bold text-center">Bill Amount</div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-sm text-gray-600 divide-y divide-gray-100">
                                                    {monthlyBills && monthlyBills.length > 0 && monthlyBills.map((monthlyBill) => {
                                                        return (<tr>
                                                            <td class="p-2 whitespace-nowrap ">

                                                                <div class="font-medium text-lg text-center text-gray-400">{monthlyBill.date}</div>

                                                            </td>
                                                            <td class="p-2 whitespace-nowrap ">

                                                                <div class="font-medium text-lg text-center text-gray-400">{monthlyBill.billAmount}</div>

                                                            </td>
                                                        </tr>)
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default MonthlyBill;