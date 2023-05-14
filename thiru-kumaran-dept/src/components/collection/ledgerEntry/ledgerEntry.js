import React from "react";
import LedgerEntryTable from "./ledgerEntryTable";

const LedgerEntry = () =>{
    return(
        <>
             <div className="flex justify-center bg-red-400 w-full h-screen ">
                <div className="w-full">
                    <LedgerEntryTable />
                </div>
            </div>
        </>
    )
}

export default LedgerEntry;