import React from "react";
import ExcessAmountTable from "./excessAmountTable";


const ExcessAmount = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <ExcessAmountTable />
                </div>
            </div>
        </>
    )

}
export default ExcessAmount;