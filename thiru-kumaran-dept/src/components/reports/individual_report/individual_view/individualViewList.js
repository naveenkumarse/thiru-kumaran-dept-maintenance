import React from "react";

const IndividualViewList = ({user}) => {
    return (
        <tr>
            <td class="p-2 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{user.id}</div>
                </div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left">{user.date}</div>
            </td>
            <td class="p-2 whitespace-nowrap">
                <div class="text-left font-medium">{user.billAmount}</div>
            </td>
        </tr>
    )
}

export default IndividualViewList;