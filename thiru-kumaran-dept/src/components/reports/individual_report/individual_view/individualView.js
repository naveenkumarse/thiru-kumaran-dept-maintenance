import React from "react";
import IndividualViewTable from "./individualViewTable";


const IndividualView = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <IndividualViewTable />
                </div>
            </div>
        </>
    )

}
export default IndividualView;
