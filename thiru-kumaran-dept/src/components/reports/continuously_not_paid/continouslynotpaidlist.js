import React from "react";
import { useNavigate } from "react-router-dom";


const ContinouslyNotPaidList = ({ loan }) => {
    const navigate = useNavigate();
    const navigatetoindividualreport = ()=>{
        navigate("/individualloanview", { state: { loan} })
    }
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.loanNo}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.address}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.date}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{loan.loanAmount}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">   <div class="text-left font-medium"><button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={() => navigatetoindividualreport()}>
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black text-sm group-hover:text-white">See details</span>
                </button></div></div>
            </td>
        </tr>
    )
}

export default ContinouslyNotPaidList;