import React, { useState } from "react";

import TotalLedgerTable from "./totalLedgerTable";

const TotalLedger = () => {
const [value, setPageId] = useState("")
    return (
        <>
            <div className="">
                <div class="bg-white p-4 flex justify-evenly gap-2 flex-wrap ">
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId("all")}>
                        All(<span style={{color:"green"}}></span>)
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId("below120")}>
                      
                        Below 120 days (<span style={{color:"blue"}}></span>)
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId("120to240")}>
                        
                        120-240 days(<span style={{color:"orange"}}></span>)
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId("240to365")}>
                        
                        240-365 days(<span style={{color:"brown"}}></span>)
                    </button>
                    <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" onClick={() => setPageId("above365")}>
                      
                        above 365 days(<span style={{color:"red"}}></span>)
                    </button>

                </div>
            </div>
    

            <TotalLedgerTable value={value} />
        </>
    )
}

export default TotalLedger;