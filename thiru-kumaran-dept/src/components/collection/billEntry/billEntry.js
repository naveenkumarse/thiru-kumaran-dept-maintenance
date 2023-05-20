import React from "react";
import BillEntryTable from "./billEntryTable";

const BillEntry = () =>{
    return(
        <>
         <div className="flex justify-center bg-red-400 w-full h-screen ">
               
               <div className="w-full">
                   <BillEntryTable />
               </div>

           </div>
        </>
    )
}
export default BillEntry;