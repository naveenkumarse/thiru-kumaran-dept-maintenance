import React, { useEffect, useState } from "react";
import DateCloseTable from "./dateCloseTable";
import { createAccountCloseFE } from "../../api";

const DateClose = () => {
    const [todaydate, setTodayDate] = useState(String(localStorage.getItem('date')));
    const lineId = localStorage.getItem("lineId");

    const saveDateClose = (e) =>{
        e.preventDefault();
        let dateParts = todaydate.split("-");
        let year = dateParts[0];
        let month = dateParts[1];
        let day = dateParts[2];
        const formattedDate = day + "-" + month + "-" + year;
        const body = {
            "lineId":lineId,
            "date":formattedDate
        }
        createAccountCloseFE(body)
        window.location.reload();
    }

    const onCancelCall = () =>{
        window.location.reload();
    }  

    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Closing Date <span class="font-normal"></span> </h1>
                        <h3 className="pt-4">Previous date of close :{todaydate}</h3>
                    </div>


                    <form class="mt-6" onSubmit={(e)=>saveDateClose(e)}>
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Date of Close</label>
                        <input id="id" type="date" name="id" placeholder="id" autoComplete="id" pattern="dd-mm-yyyy" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={todaydate} defaultValue={todaydate} onChange={(e) => setTodayDate(e.target.value)} required />
                        <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Save
                        </button>
                        <button type="submit" class="w-1/3 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right" onClick={onCancelCall}>
                            Cancel
                        </button>
                    </form>

                    <div className="pt-12">
                    <DateCloseTable />
                    </div>
                   
                </div>

            </div>
        </>
    )
}
export default DateClose;