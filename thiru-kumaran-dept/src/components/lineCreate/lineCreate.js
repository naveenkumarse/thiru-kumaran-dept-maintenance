import React from "react";
import LineCreateForm from "./lineCreateform/lineCreateForm";
import LineCreateTable from "./lineCreateTable/lineCreateTable";

const LineCreate = () =>{
    return(
        <>
            <div className="flex justify-center bg-red-400 ">
                <div className="w-1/2 ">
                    <LineCreateForm />
                </div>
                <div className="w-1/2 ">
                    <LineCreateTable />
                </div>

            </div>

        </>

    )
}

export default LineCreate;