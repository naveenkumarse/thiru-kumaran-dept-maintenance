import React from "react";
import AccountTable from "./accountTable";



const Account = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <AccountTable />
                </div>
            </div>
        </>
    )

}
export default Account;
