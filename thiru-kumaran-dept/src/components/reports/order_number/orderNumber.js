import React from "react";
import OrderNumberTable from "./orderNumberTable";


const OrderNumber = () =>{
    return(
        <>
             <div className="flex justify-center bg-red-400 w-full h-screen ">
               
                <div className="w-full">
                    <OrderNumberTable />
                </div>

            </div>
        </>
    )
}

export default OrderNumber;