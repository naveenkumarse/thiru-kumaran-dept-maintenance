import React from "react";

import TodayListTableLB from "./todayListTableLB";

const TodayListLB = () => {
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">
                <div className="w-full">
                    <TodayListTableLB />
                </div>
            </div>
        </>
    )
}

export default TodayListLB;