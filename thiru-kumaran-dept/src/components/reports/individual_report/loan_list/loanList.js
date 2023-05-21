import React from "react";


import LoanListTable from "./loanListTable";

const LoanList = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <LoanListTable />
                </div>
            </div>
        </>
    )

}
export default LoanList;
