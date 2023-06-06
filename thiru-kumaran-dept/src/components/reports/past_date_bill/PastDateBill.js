import React, { useState } from "react";
// import DateCloseTable from "./monthlyBillTable";
import PastDateBillTable from "./PastDateBillTable";
import { getPastDateBill } from "../../../api";
const PastDateBill = () => {
    const [date, setDate] = useState(new Date());
    const  [pastDateBills,setPastDateBills ]= useState([])
    const handleSubmit = (e) =>{
        e.preventDefault();
        const body ={
            // "date":date,
            "date":"07-06-2023",
            "lineId":localStorage.getItem('lineId')
        }
        try {
            getPastDateBill(body, setPastDateBills)
        } catch (error) {
            console.log('Error in fetching Past date bill', error)
        }
    }
    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Closing Date <span class="font-normal"></span> </h1>

                    </div>
                    <form class="mt-6" onSubmit={(e)=> handleSubmit(e)}>
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Past Date:</label>
                        <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={date} onChange={(e) => setDate(e.target.value)} required />
                        <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Search
                        </button>
                        <button type="submit" class="w-1/3 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Cancel
                        </button>
                    </form><br></br><br></br>

                   
                    <div className="pt-12">
                        <PastDateBillTable pastDateBills={pastDateBills} />
                    </div>

                </div>

            </div>
        </>
    )
}
export default PastDateBill;