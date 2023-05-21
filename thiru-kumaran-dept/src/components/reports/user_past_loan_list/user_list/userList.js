import React from "react";


import UserListTable from "./userListTable";

const UserList = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <UserListTable />
                </div>
            </div>
        </>
    )

}
export default UserList;
