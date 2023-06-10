import React, { useState } from "react";
import ThitamTable from "./thitamTable";
import Verify from "./verify/verify";
import Details from "./details/details";

const Thitam = () => {

    const [addHead, setAddHead] = useState();
    return (
        <>
            <div class="grid min-h-screen bg-red-400">
                <div className="justify-evenly inline-flex">
                    <div class="w-full p-12 bg-white sm:w-10/12 md:10/12 lg:w-11/12 bg-white mt-8">
                        <div className="flex-wrap lg:flex justify-between">
                            {/* <h1 class="text-xl font-bold ">Add Head <span class="font-normal"></span> </h1>
                            <h1 class="text-xl font-bold ">Edit Head <span class="font-normal"></span> </h1>
                            <h1 class="text-xl font-bold ">Edit Head <span class="font-normal"></span> </h1> */}
                        </div>
                        <div className=" grid-cols-2">
                            <div className="float-right px-48">
                                <Verify />
                            </div>

                            <form class="mt-6">
                                <h4 class=" font-bold ">Date <span class="font-normal"></span> </h4>
                                <div className=" ">
                                    <div class="p-2 bg-white border shadow rounded w-96">
                                        <div class="flex justify-between items-center">
                                            <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setAddHead(e.target.value)} placeholder="Enter head name" value={addHead} />
                                        </div>
                                    </div>
                                </div>
                                <h4 class=" font-bold ">Account Head <span class="font-normal"></span> </h4>
                                <div className=" flex inline ">

                                    <div class="p-2 bg-white border shadow rounded w-96">

                                        <div class="flex justify-between items-center">
                                            {/* <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setAddHead(e.target.value)} placeholder="Enter head name" value={addHead} /> */}
                                            <select data-te-select-init class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black">
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                                <option value="4">Four</option>
                                                <option value="5">Five</option>
                                                <option value="6">Six</option>
                                                <option value="7">Seven</option>
                                                <option value="8">Eight</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <h4 class=" font-bold ">Remarks <span class="font-normal"></span> </h4>
                                <div className=" flex inline ">
                                    <div class="p-2 bg-white border shadow rounded w-96">
                                        <div class="flex justify-between items-center">
                                            <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setAddHead(e.target.value)} placeholder="Enter head name" value={addHead} />
                                        </div>
                                    </div>
                                </div>
                                <h4 class=" font-bold ">Debit <span class="font-normal"></span> </h4>
                                <div className=" flex inline ">
                                    <div class="p-2 bg-white border shadow rounded w-96">
                                        <div class="flex justify-between items-center">
                                            <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setAddHead(e.target.value)} placeholder="Enter head name" value={addHead} />
                                        </div>
                                    </div>
                                </div>
                                <h4 class=" font-bold "> Credit <span class="font-normal"></span> </h4>
                                <div className=" flex inline ">
                                    <div class="p-2 bg-white border shadow rounded w-96">
                                        <div class="flex justify-between items-center">
                                            <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setAddHead(e.target.value)} placeholder="Enter head name" value={addHead} />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" class="w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none ">
                                        Add
                                    </button>

                                </div>
                            </form>
                        </div>
                        <br />
                        <br />
                        <Details />
                        <br />
                        <div className="pt-5">
                            <ThitamTable />
                        </div>



                    </div>

                </div>

            </div>
        </>
    )
}
export default Thitam;