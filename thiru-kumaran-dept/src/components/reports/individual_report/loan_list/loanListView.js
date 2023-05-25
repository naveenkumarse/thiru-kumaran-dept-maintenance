import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoanListView = ({ report }) => {
    const navigate = useNavigate();
    const navigatetopastview = () => {
        navigate("/individualloanview")
    }
    return (
        <>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{report.loan_no}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{report.name}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{report.address}</div>
            </td> <td class="p-2 whitespace-nowrap">
                <div class="text-left">{report.phone_no}</div>
            </td> <td class="p-2 whitespace-nowrap">
                <div class="text-left">{report.loan_amount}</div>
            </td> <td class="p-2 whitespace-nowrap">
                <div class="text-left">{report.updated_on}</div>
            </td> <td class="p-2 whitespace-nowrap">
                <div class="text-left">{report.loan_closed_date}</div>
            </td>


            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium"><button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={navigatetopastview}>
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black text-sm group-hover:text-white">Action</span>
                </button></div>
            </td>


        </>
    )
}

export default LoanListView;