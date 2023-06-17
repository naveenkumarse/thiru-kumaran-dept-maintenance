import React, { useState } from "react";
import DetailsTable from "./detailsTable";

const Details = ({setVerifiedTable}) => {
    const [todaydate, setTodayDate] = useState(new Date());

    return (
        <>
           

                    <div className="pt-12">
                        <DetailsTable setVerifiedTable={setVerifiedTable} />
                    </div>

              
        </>
    )
}
export default Details;