import React, { useState } from "react";

import TotalLedgerTable from "./totalLedgerTable";

const TotalLedger = () => {
    const [pageId, setPageId] = useState(0);
    const all = 203;
    const below120 = 23;
    const days240 = 34;
    const days365 =12;
    const above365 = 0;
    return (
        <>
            <div className="">
                <div class="bg-white p-4 flex justify-evenly gap-2 flex-wrap ">
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(0)}>
                        All(<span style={{color:"green"}}>{all}</span>)
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(1)}>
                      
                        Below 120 days (<span style={{color:"blue"}}>{below120}</span>)
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(2)}>
                        
                        120-240 days(<span style={{color:"orange"}}>{days240}</span>)
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(3)}>
                        
                        240-365 days(<span style={{color:"brown"}}>{days365}</span>)
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId(3)}>
                      
                        above 365 days(<span style={{color:"red"}}>{above365}</span>)
                    </button>

                </div>

            </div>
    

            <TotalLedgerTable />
            {/* {pageId == 0 ? <BillEntry/>: pageId == 1 ? <DirectEntry /> : pageId == 2 ? <LedgerEntry /> : <TodayList />} */}
        </>
    )
}

export default TotalLedger;