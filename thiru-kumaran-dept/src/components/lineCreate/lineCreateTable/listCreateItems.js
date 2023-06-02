import React from "react";

const ListCreateItems = ({line}) => {
    return (
        <tr>
            <td class="p-2 whitespace-nowrap ">
                <div class="flex items-center">
                    <div class="font-medium text-gray-800">{line.lineId}</div>
                </div>
            </td>

            <td class="pl-24 float-left whitespace-nowrap">
                <div class="text-lg text-center">{line.lineName}</div>
            </td>

        </tr>
    )
}

export default ListCreateItems;