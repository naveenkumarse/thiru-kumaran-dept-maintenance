import React from "react";

import ClosedPartyTable from "./closedpartyTable";

const ClosedParty = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <ClosedPartyTable />
                </div>
            </div>
        </>
    )

}
export default ClosedParty;
