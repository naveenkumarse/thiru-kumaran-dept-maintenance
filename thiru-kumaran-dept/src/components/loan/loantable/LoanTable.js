import React, { useEffect, useState } from "react";
import ListLoan from "./loanList";
import { getLoanByLineAllFE } from "../../../api";

const LoanTable = () =>{
    let objectDate = new Date();
    let day = objectDate.getDate();
    let month = objectDate.getMonth();
    let year = objectDate.getFullYear();    
    let date = `${year}-${month+1}-${day}`;
    let loan_closed_date = !null;
    let line_name= localStorage.getItem("line_name")
    const body = {date,loan_closed_date,line_name}
    const [loans,setLoans] = useState([]);
    useEffect((body)=>{
        getLoanByLineAllFE(body,setLoans)
    },[])
    return(
        <>
             <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">

                    <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <header class="px-5 py-4 border-b border-gray-100">
                            <h2 class="font-semibold text-gray-800">Loan Details</h2>
                        </header>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-bold uppercase text-black-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Loan No.</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Loan Amount</div>
                                            </th>
                                            <th class="p-2 whitespace">
                                                <div class="font-bold text">Mahimai</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center">Action</div>
                                            </th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm text-gray-00 divide-y divide-gray-100">
                                        <tr>
                                           {loans?.map((loan)=><ListLoan key={loan.loan_no} loan={loan}/>)} 
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LoanTable;