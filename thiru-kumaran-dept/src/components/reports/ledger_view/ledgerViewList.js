import React from "react";
import LedgerViewAmountList from "./ledgerViewAmoutList";

const LedgerViewList = () => {
    return (
        <>
            <tr>
                <td class="p-2 whitespace-nowrap ">

                    <div class="font-medium text-lg text-center text-gray-400">1</div>

                </td>
                <td class="p-2 whitespace-nowrap ">

                    <div class="font-medium text-lg text-center text-gray-400">1</div>

                </td><td class="p-2 whitespace-nowrap ">

                    <div class="font-medium text-lg text-center text-gray-400">1</div>

                </td><td class="p-2 whitespace-nowrap ">

                    <div class="font-medium text-lg text-center text-gray-400">1</div>

                </td>
                <LedgerViewAmountList amount={40}/>
                <td class="p-2 whitespace-nowrap ">

                    <div class="font-medium text-lg text-center text-gray-400">1</div>

                </td>
                <td class="p-2 whitespace-nowrap ">

                    <div class="font-medium text-lg text-center text-gray-400">Naveenkumar</div>

                </td>
            </tr>
        </>
    )
}

export default LedgerViewList;