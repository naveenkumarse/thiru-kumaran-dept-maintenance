import React, { useState } from "react";
import { createBalance } from "../../../api";
import { useNavigate } from "react-router-dom";

const OpeningBalance = () => {
    const navigate = useNavigate();
    const [todaydate, setTodayDate] = useState(new Date());
    const [balance, setBalance] = useState(0);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = {
            "balance": balance,
            "name": "Opening Balance",
            "date":todaydate
        }
        try {
        await createBalance(body)

        } catch (error) {
            console.log("error in fetching head data", error)
        }
        navigate('/thitam')
    }
    // const addOneDay = (dateString) => {
    //     const date = new Date(dateString); // Create a Date object from the string
    //     date.setDate(date.getDate() + 1); // Add one day to the date
    //     const year = date.getFullYear();
    //     const month = String(date.getMonth() + 1).padStart(2, '0');
    //     const day = String(date.getDate()).padStart(2, '0');
    //     return `${year}-${month}-${day}`; // Convert back to string format (YYYY-MM-DD)
    //   };
    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-1/2 p-12 sm:w-8/12 md:w-1/2 lg:w-1/2 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Balance Sheet <span class="font-normal"></span> </h1>
                    </div>
                    <form class="mt-6" onSubmit={(e)=>handleSubmit(e)}>
                        <div className="flex justify-between">
                            <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Date</label>
                        </div>

                        <div className=" flex inline justify-between">
                            <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mr-20" value={todaydate} onChange={(e) => setTodayDate(e.target.value)} required />
                        </div>

                        <div className="flex justify-between">
                            <label for="opening" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Balance</label>
                        </div>


                        <div className=" flex inline justify-between">
                            <input id="id" type="number" name="opening" placeholder="Enter Opening Balance" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mr-20" value={balance} onChange={(e) => setBalance(e.target.value)} required />
                        </div>
                        <div>
                            <button type="submit" class="w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                Create
                            </button>
                           
                        </div>
                    </form>
                    <br />
                    <br />
                </div>

            </div>
        </>
    )
}
export default OpeningBalance;