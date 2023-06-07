import React, { useState } from "react";
import VerifyTable from "./verifyTable";




const Verify = () => {
    const [todaydate, setTodayDate] = useState(new Date());

    return (
        <>
           

                    <div className="pt-12">
                        <VerifyTable />
                    </div>

                
        </>
    )
}
export default Verify;