import React, { useState } from "react";


const AccountList = ({ res }) => {
    const [amount, setAmount] = useState(0);
    return (
        <>
            <tr>
                <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="font-medium text-gray-800">{res.id}</div>
                    </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="flex items-center">
                        <div class="font-medium text-gray-800">{res.date}</div>
                    </div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{res.name}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium">{res.debit}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left">{res.credit}</div>
                </td>
                <td class="p-2 whitespace-nowrap">
                    <div class="text-left font-medium">{res.balance}</div>
                </td>
            </tr>

        </>
    )
}

export default AccountList;