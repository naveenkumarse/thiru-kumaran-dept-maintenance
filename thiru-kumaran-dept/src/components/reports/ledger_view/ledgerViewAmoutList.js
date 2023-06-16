import React from "react";


const LedgerViewAmountList = ({ amount }) => {
    return (
            <td class="p-2 whitespace-nowrap ">
                <div class="text-left">{amount?amount:0}</div>
            </td>
    )
}
export default LedgerViewAmountList;