import React from "react";
import TodayListTable from "./todayListTable";

const TodayList = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <TodayListTable />
                </div>

            </div>
        </>
    )
}

export default TodayList;