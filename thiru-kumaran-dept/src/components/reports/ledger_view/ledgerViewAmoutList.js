import React from "react";


const LedgerViewAmountList = ({ amount }) => {
    return (
            <td class="p-2 whitespace-nowrap ">
                <div class="font-medium text-lg text-center text-gray-400">{amount?amount:0}</div>
            </td>
    )
}
export default LedgerViewAmountList;