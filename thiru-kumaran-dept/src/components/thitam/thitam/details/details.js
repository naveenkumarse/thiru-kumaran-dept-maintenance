import React, { useState } from "react";
import DetailsTable from "./detailsTable";

const Details = () => {
    const [todaydate, setTodayDate] = useState(new Date());

    return (
        <>
           

                    <div className="pt-12">
                        <DetailsTable />
                    </div>

              
        </>
    )
}
export default Details;