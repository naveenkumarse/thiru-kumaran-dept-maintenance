import React from "react";

import BillNotPaidTable from "./billNotPaidTable";


const BillNotPaid = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <BillNotPaidTable />
                </div>
            </div>
        </>
    )

}
export default BillNotPaid;