/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import { getOpeningBalanceBool } from "../../api";

const ThitamNav = () => {
    const [openingbalance, setOpeningBalance] = useState(false);

    useEffect( ()=> {
        try {
            getOpeningBalanceBool(setOpeningBalance);
            console.log(openingbalance);
        } catch (error) {
            console.log(error);
        }
    }, [])
    return (
        <>
            <div className="">
                <div class="bg-white p-4 flex justify-evenly gap-2 flex-wrap ">
                    <Link to="/thitam">
                        <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md">
                            Thitam
                        </button></Link>
                {openingbalance  == 'false' && 
                    <Link to="/openingbalance">
                        <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md">
                            Opening Balance
                        </button></Link> }
                    <Link to="/account">
                        <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" >
                            Account
                        </button></Link>
                    <Link to="/addhead">
                        <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" >
                            Add Head
                        </button></Link>
                    <Link to="/individualhead">
                        <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" >
                            Individual Head
                        </button>  </Link>
                    <Link to="/balancesheet">
                        <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" >
                            Balance Sheet
                        </button>  </Link>
                    <Link to="/trailsheet">
                        <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" >
                            Trial Sheet
                        </button>
                    </Link>
                    <Link to="/outstandingbalance">
                        <button class="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-green-300 text-gray-800 text-sm font-medium rounded-md" >
                            OutstandingBalance
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ThitamNav;