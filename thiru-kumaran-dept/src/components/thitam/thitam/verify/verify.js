import React, { useState } from "react";
import VerifyTable from "./verifyTable";




const Verify = ({verifiedTable}) => {
    const [todaydate, setTodayDate] = useState(new Date());

    return (
        <>
           

                    <div className="pt-12">
                        <VerifyTable verifiedTable={verifiedTable} />
                    </div>

                
        </>
    )
}
export default Verify;