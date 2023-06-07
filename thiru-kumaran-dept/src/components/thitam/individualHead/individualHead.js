import React, { useState } from "react";
import IndividualHeadTable from "./individualHeadTable";




const IndividualHead = () => {
    const [todaydate, setTodayDate] = useState(new Date());

    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Individual Head <span class="font-normal"></span> </h1>
                    </div>
                    <form class="mt-6">
                        <div className="flex justify-between">
                            
                            <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Start date</label>
                            <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">End date</label>
                        </div>


                        <div className=" flex inline justify-between">
                            <input type="select" />
                            <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mr-20" value={todaydate} onChange={(e) => setTodayDate(e.target.value)} required />
                            <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={todaydate} onChange={(e) => setTodayDate(e.target.value)} required />
                        </div>

                        <div>
                            <button type="submit" class="w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                Search
                            </button>
                           
                        </div>
                    </form>

                    <br />
                    <br />


                    <div className="pt-12">
                        <IndividualHeadTable />
                    </div>

                </div>

            </div>
        </>
    )
}
export default IndividualHead;