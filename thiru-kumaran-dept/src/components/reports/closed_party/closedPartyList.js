import React from "react";
import { useNavigate } from 'react-router-dom';


const ClosedPartyList = ({closedParty}) => {
    const navigate = useNavigate();
    const handleAddLoan = (e) =>{
        e.preventDefault();
        navigate('/addLoan',  { state: { closedParty } })
    }
    return (
        <>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{closedParty.loanNo}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{closedParty.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{closedParty.address}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{closedParty.loanAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium"><button onClick={(e)=>handleAddLoan(e)} class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow">
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black text-sm group-hover:text-white">Add Loan</span>
                </button></div>
            </td>


        </>
    )
}

export default ClosedPartyList;