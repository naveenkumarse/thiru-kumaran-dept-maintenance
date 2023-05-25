import React from "react";

const ListLoan = (loan) => {

   const onLoanUpdate = ()=>{
        return;
    }

   const onLoanDelete = ()=>{
    }

    return (
        <>
            <td class="p-2 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="font-medium text-lg text-gray-400">{loan.loan_no}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="font-medium text-lg text-gray-400">{loan.name}</div>
                </div>
            </td>
            <td class="pl-8 p-2 float whitespace-nowrap">
                <div class="text-lg text-center text-gray-400">{loan.loan_amount}</div>
            </td>
            <td class="pl-8 p-2 float-left whitespace-nowrap">
                <div class="text-lg text-center text-gray-400">{loan.commission_amount+loan.seetu_amount}</div>
            </td>
            <td class="pl-8 whitespace-nowrap">
                <div class="text-lg text-center"><button style={{ color: "green", fontSize: "14px" }} onClick={onLoanUpdate }>Update</button> <button style={{ color: "red", fontSize: "14px", marginLeft: "20px" }} onClick={onLoanDelete}>Delete</button></div>
            </td>
        </>
    )
}

export default ListLoan;