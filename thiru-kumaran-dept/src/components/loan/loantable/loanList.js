import React from "react";
import { deleteLoan } from "../../../api";
import { useNavigate } from "react-router-dom";
const ListLoan = ({loan} )=> {
    const navigate = useNavigate()
   const onLoanUpdate = (e)=>{
        e.preventDefault();
        navigate('/updateloan',  { state: { loan } })
    }
    const deleteBody = {
        "loanNo":loan.loanNo,
        "lineId":loan.lineId
    }
   const onLoanDelete = ()=>{
    deleteLoan(deleteBody)
    window.location.reload();
    }

    return (
        <tr>
            <td class="p-2 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="font-medium text-lg text-gray-400">{loan.loanNo}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="font-medium text-lg text-gray-400">{loan.name}</div>
                </div>
            </td>
            <td class="pl-8 p-2 float whitespace-nowrap">
                <div class="text-lg text-center text-gray-400">{loan.loanAmount}</div>
            </td>
            <td class="pl-8 p-2 float-left whitespace-nowrap">
                <div class="text-lg text-center text-gray-400">{loan.commissionAmount+loan.seetuAmount}</div>
            </td>
            <td class="pl-8 whitespace-nowrap">
                <div class="text-lg text-center"><button style={{ color: "green", fontSize: "14px" }} onClick={(e) => onLoanUpdate(e)}>Update</button> <button style={{ color: "red", fontSize: "14px", marginLeft: "20px" }} onClick={onLoanDelete}>Delete</button></div>
            </td>
        </tr>
    )
}

export default ListLoan;