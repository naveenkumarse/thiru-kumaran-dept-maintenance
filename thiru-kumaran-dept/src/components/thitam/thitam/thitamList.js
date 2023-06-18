import React from "react";
import { deleteParticularDataBelowTable } from "../../../api";

const ThitamList = ({ res ,id}) => {
    const onDelete = () => {
        // call edit api
        try {
        const body = {
            "date":localStorage.getItem('thittamdate'),
            "name":res.name
        }
        deleteParticularDataBelowTable(body)
        } catch (error) {
            console.log(error);
        }
        window.location.reload();
    }
    return (
        <>
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{id+1}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{res.credit}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{res.debit}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{res.name}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{res.description}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="text-left">{res.date}</div>
                </div>
            </td>
            <td class=" whitespace-nowrap pt-2">
                <button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={onDelete}>
                    <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                    <span class="relative text-black group-hover:text-white">Delete</span>
                </button>
            </td>
            </tr>
        </>
    )
}

export default ThitamList;