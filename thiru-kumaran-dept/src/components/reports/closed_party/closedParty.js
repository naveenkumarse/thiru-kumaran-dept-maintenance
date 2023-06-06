import React, { useEffect, useState } from "react";
import {getClosedParty } from "../../../api"
import ClosedPartyTable from "./closedpartyTable";

const ClosedParty = () => {
    const [closedParties, setClosedParties] = useState([
        // {
        //     "loanId": 1,
        //     "loanNo": "Lon01",
        //     "userNo": "Us01",
        //     "name": "Indira Kumar",
        //     "address": "Thangavel",
        //     "phoneNo": "indirakumarak@gmail.com",
        //     "orderNo": "1",
        //     "currentLoanDate": "2023-06-07",
        //     "loanAmount": 10000,
        //     "seetuAmount": 300,
        //     "commissionAmount": 1000,
        //     "interest": 10,
        //     "appxLoanClosedDate": "2023-09-15",
        //     "loanClosedDate": null,
        //     "excessAmount": 0,
        //     "lineId": "Ln01",
        //     "balance": 9900,
        //     "dailyUpdate": true,
        //     "loanActive": true
        // }
    ])
    useEffect(()=>{
        const body = {
            "lineId":localStorage.getItem('lineId'),
        }
        try {
            getClosedParty(body, setClosedParties)
        } catch (error) {
            console.log("error in fetching monthly bill")
        }
    }, [])
    return (
        <>
            <div className="flex justify-center bg-red-400 w-full h-screen ">

                <div className="w-full">
                    <ClosedPartyTable closedParties={closedParties} />
                </div>
            </div>
        </>
    )

}
export default ClosedParty;
