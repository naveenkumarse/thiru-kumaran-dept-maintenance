import React, { useState } from "react";
import DirectEntry from "./directEntry/directEntry";
import LedgerEntry from "./ledgerEntry/ledgerEntry";
import TodayList from "./todayList/todayList";

const Collection = () => {
    const [pageId, setPageId] = useState(1);
    return (
        <>
            <div className="">
                <div class="bg-white p-4 flex justify-evenly">
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={()=>setPageId(1)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                        </svg>
                        Direct Entry
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={()=>setPageId(2)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                        Ledger Entry
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={()=>setPageId(3)}>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        Today List
                    </button>
                </div>

            </div>
         
            {pageId==1?<DirectEntry /> : pageId==2?<LedgerEntry/>:<TodayList/>}
        </>
    )
}

export default Collection;