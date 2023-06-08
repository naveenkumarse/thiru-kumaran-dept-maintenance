import React, { useState } from "react";

import AddHeadTable from "./addHeadTable";
import { createUpdateHead } from "../../../api";


const AddHead = () => {

    const [addHead, setAddHead] = useState();
    const [editHead, setEditHead] = useState();
    const [headId, setHeadId] = useState();
    const [addHeadList, setAddHeadList] = useState(
        [
            {
                "id": 1,
                "headName": "A LINE  ?????",
                "extraHead": true
            },
            {
                "id": 2,
                "headName": "B LINE ????????",
                "extraHead": true
            },
            {
                "id": 3,
                "headName": "C LINE ????????",
                "extraHead": true
            }
        ]
    )
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            "name":addHead,
            "update":false
        }
        console.log(body)
        try {
        createUpdateHead(body, setAddHeadList)
        } catch (error) {
            console.log("error in fetching head data", error)
        }        
    }
    const handleEdit = (e) =>{
        e.preventDefault();
        const body = {
            "id":headId,
            "name":editHead,
            "update":true
        }
        try {
            createUpdateHead(body, setAddHeadList)
            } catch (error) {
                console.log("error in fetching head data", error)
            }  
        // window.location.reload();
    }
    return (
        <>
            <div class="grid min-h-screen bg-red-400">
                <div className="justify-evenly inline-flex">
                    <div class="w-full p-12 bg-white sm:w-10/12 md:10/12 lg:w-11/12 bg-white mt-8">
                        <div className="flex justify-between">
                            <h1 class="text-xl font-bold ">Add Head <span class="font-normal"></span> </h1>
                            <h1 class="text-xl font-bold ">Edit Head <span class="font-normal"></span> </h1>
                        </div>
                        <div className="flex justify-between">
                            <form class="mt-6" onSubmit={(e)=> handleSubmit(e)}>
                                <div className=" flex inline ">
                                    <div class="p-2 bg-white border shadow rounded w-96">
                                        <div class="flex justify-between items-center">
                                            <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setAddHead(e.target.value)} placeholder="Enter head name" value={addHead} />
                                            <div class="flex justify-center items-center space-x-2">
                                                <button type="button" class="btn bg-black hover:bg-black text-white px-4 py-2 font-medium rounded">
                                                    Add
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <form class="mt-6" onSubmit={(e)=> handleEdit(e)}>
                                <div className=" flex inline ">
                                    <div class="p-2 bg-white border shadow rounded w-96">
                                        <div class="flex justify-between items-center">
                                            <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setEditHead(e.target.value)} placeholder="Enter head name" value={editHead} />
                                            <div class="flex justify-center items-center space-x-2">
                                                <button type="submit" class="btn bg-black hover:bg-black text-white px-4 py-2 font-medium rounded">
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <br />
                        <br />
                        <div className="pt-5">
                            <AddHeadTable headList={addHeadList} setEditHead={setEditHead} setHeadId={setHeadId} />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}
export default AddHead;