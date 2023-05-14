import React from "react";
import DirectEntryList from "./directEntryList";
import DirectEntryTable from "./directEntrytable";

const DirectEntry = () =>{
    return(
        <>
             <div className="flex justify-center bg-red-400 w-full h-screen ">
               
                <div className="w-full">
                    <DirectEntryTable />
                </div>

            </div>
        </>
    )
}

export default DirectEntry;