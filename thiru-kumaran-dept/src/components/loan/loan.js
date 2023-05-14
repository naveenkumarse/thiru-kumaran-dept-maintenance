import React from "react";
import LoanForm from "./loanform/LoanForm";
import LoanTable from "./loantable/LoanTable";

const Loan = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 flex-col lg:flex-row ">
                <div className="w-full lg:w-1/2  ">
                    <LoanForm />
                </div>
                <div className="w-full lg:w-1/2  ">
                    <LoanTable />
                </div>

            </div>
        </>
    )
}

export default Loan;