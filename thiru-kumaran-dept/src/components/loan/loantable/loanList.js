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
                    <div class="text-left">{loan.loanNo}</div>
            </td>
            <td class="p-2 whitespace-nowrap ">
                    <div class="text-left">{loan.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.loanAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.commissionAmount+loan.seetuAmount}</div>
            </td>
            <td class="pl-8 whitespace-nowrap">
                <div class="text-left"><button style={{ color: "green", fontSize: "14px" }} onClick={(e) => onLoanUpdate(e)}>Update</button> <button style={{ color: "red", fontSize: "14px", marginLeft: "20px" }} onClick={onLoanDelete}>Delete</button></div>
            </td>
        </tr>
    )
}

export default ListLoan;