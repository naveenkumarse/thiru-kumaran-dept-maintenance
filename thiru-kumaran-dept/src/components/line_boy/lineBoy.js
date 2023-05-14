import React from "react";
import Navbar from "../navbar/navbar";
import LineBoyForm from "./forms/form";
import LineBoyTable from "./table/table";

const LineBoy = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center bg-red-400 flex-col lg:flex-row ">
                <div className="w-full lg:w-1/2  ">
                    <LineBoyForm />
                </div>
                <div className="w-full lg:w-1/2 ">
                    <LineBoyTable />
                </div>

            </div>

        </>
    );
}
export default LineBoy;