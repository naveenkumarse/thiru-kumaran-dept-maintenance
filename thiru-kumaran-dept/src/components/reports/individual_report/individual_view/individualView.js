import React from "react";
import IndividualViewTable from "./individualViewTable";
import { useLocation } from "react-router-dom";


const IndividualView = () => {
    const location = useLocation();
    const individual = location.state?.report;
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <IndividualViewTable individual={individual} />
                </div>
            </div>
        </>
    )

}
export default IndividualView;
