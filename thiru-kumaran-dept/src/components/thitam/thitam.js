import React, { useState } from "react";

import BalanceSheet from "./balanceSheet/balanceSheet";
import IndividualHead from "./‌individualHead/individualHead";
import TrialSheet from "./trailSheet/trialSheet";
const Thitam = () => {
    const [pageId, setPageId] = useState(0);
    return (
        <>
            <div className="">
                <div class="bg-white p-4 flex justify-evenly gap-2 flex-wrap ">
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(0)}>
                        
                        Thitam
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(1)}>
                        
                        Account
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(2)}>
                       
                        Add Head
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(3)}>
                       
                        Individual Head
                    </button>

                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(3)}>
                      
                        Balance Sheet
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(3)}>
                      
                        Trial Sheet
                    </button>
                </div>

            </div>
            <IndividualHead />
            {/* {pageId == 0 ? <BillEntry /> : pageId == 1 ? <DirectEntry /> : pageId == 2 ? <LedgerEntry /> : <TodayList />} */}
        </>
    )
}

export default Thitam;