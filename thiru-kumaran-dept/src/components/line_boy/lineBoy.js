import React from "react";
import Navbar from "../navbar/navbar";
import Form from "../forms/form";
import Table from "../table/table";

const LineBoy = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center bg-red-400 ">
                <div className="w-1/2 ">
                <Form />
                </div>  
                <div className="w-1/2 ">
                <Table />
                </div>
               
            </div>

        </>
    );
}
export default LineBoy;