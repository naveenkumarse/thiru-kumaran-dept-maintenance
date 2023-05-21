import React from "react";


import ViewPastLoanTable from "./viewPastLoanTable";

const ViewPastLoan = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <ViewPastLoanTable />
                </div>
            </div>
        </>
    )

}
export default ViewPastLoan;
