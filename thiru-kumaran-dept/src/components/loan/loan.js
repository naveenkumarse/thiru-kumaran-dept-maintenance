import React from "react";
import LoanForm from "./loanform/LoanForm";
import LoanTable from "./loantable/LoanTable";

const Loan = () =>{
    return(
        <>
         <div className="flex justify-center bg-red-400 ">
                <div className="w-1/2 ">
                    <LoanForm />
                </div>
                <div className="w-1/2 ">
                    <LoanTable />
                </div>

            </div>
        </>
    )
}

export default Loan;