import React from "react";
import Navbar from "../navbar/navbar";
import AdminForm from "./forms/form";

const Admin = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center bg-red-400 flex-col lg:flex-row ">
                <div className="w-full pl-12 pr-12">
                    <AdminForm />
                </div>
            </div>
        </>
    );
}
export default Admin;