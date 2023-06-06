import React from "react";
import Navbar from "../navbar/navbar";
import LineBoyForm from "./forms/form";

const LineBoy = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center bg-red-400 flex-col lg:flex-row ">
                <div className="w-full pl-12 pr-12">
                    <LineBoyForm />
                </div>
            </div>
        </>
    );
}
export default LineBoy;