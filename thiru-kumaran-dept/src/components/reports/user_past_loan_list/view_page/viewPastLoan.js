import React from "react";
import ViewPastLoanTable from "./viewPastLoanTable";
import { useLocation } from "react-router-dom";

const ViewPastLoan = () => {
    const location = useLocation();
    const user = location.state?.user;
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <ViewPastLoanTable user={user} />
                </div>
            </div>
        </>
    )

}
export default ViewPastLoan;
