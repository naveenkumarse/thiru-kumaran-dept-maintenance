import React from "react";
import ContinuouslyNotPaidTable from "./ContinouslyNotPaidTable";

const ContinuouslyNotPaid = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <ContinuouslyNotPaidTable />
                </div>
            </div>
        </>
    )

}
export default ContinuouslyNotPaid;
