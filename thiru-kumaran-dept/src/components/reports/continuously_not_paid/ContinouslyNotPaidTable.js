import React, { useState } from "react";
import ContinouslyNotPaidList from "./continouslynotpaidlist";
import { getContinouslyNotPaid } from "../../../api";

const ContinuouslyNotPaidTable = () => {
    const [list, setList] = useState({});
    const [number,  setNumber]= useState(5)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const body = {
            "lineId":localStorage.getItem('lineId'),
            "number":number
        }
        try {
            getContinouslyNotPaid(body, setList)
        } catch (error) {
            console.log("error in fetching monthly bill")
        }

    }
    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full pt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">

                        <div className="flex lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-bold text-gray-800">Bill Continously Not Paid</h2>
                            </header>
                            <div className="w-1/2 m-auto">
                            <form class="mt-6 w-full" onSubmit={(e)=> handleSubmit(e)}>
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Number of days:</label>
                                <input id="id" type="number" min={1} max={5} name="id" placeholder="Enter the Number of days" autocomplete="id" class="block w-1/2 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={number} onChange={(e) => setNumber(e.target.value)} required />
                                <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                    Search
                                </button>
                                <button type="submit" class="w-1/3 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                    Cancel
                                </button>
                            </form> <br></br><br></br> 
                            </div>
                        </div>
 

                        <div class="p-3 pt-12">
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
                                                <div class="font-bold text-left">Start Date</div>
                                            </th>
                                            <th class="p-2  whitespace-nowrap">
                                                <div class="font-bold text-left ">End Date</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left ">Loan Date</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                    {list && list.length > 0 && list.map((loan,i)=> <ContinouslyNotPaidList loan={loan} key={i}/>)}                                  
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

export default ContinuouslyNotPaidTable;