import React from "react";

import AddHeadList from "./addHeadList";


const AddHeadTable = ({headList, setHeadId, setEditHead}) => {
    return (
        <>

            <div class="flex flex-col justify-center h-full">
                <div class="w-full pt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">

                    <div className="flex inline lg:justify-between">
                        <header class="px-5 py-4 border-b border-gray-100 ">
                            <h2 class="font-bold text-gray-800">Account Head List</h2>
                        </header>
                        {/* <div class='max-w-md mr-5'>
                                <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-black-600">
                                    <div class="grid place-items-center h-full w-12 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input
                                        class="peer h-full w-full outline-none text-sm text-gray-700 pr-10"
                                        type="text"
                                        id="search"
                                        placeholder="Search" />
                                </div>
                            </div> */}
                    </div>

                    <div class="p-3">
                        <div class="overflow-x-auto">
                            <table class="table-auto w-full">
                                <thead class="text-xs font-semibold uppercase text-black-400 bg-gray-50">
                                    <tr>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">SNo.</div>
                                        </th>

                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">Name</div>
                                        </th>

                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left ml-16">Action</div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">
                                {headList && headList.length>0 && headList.map((res,i)=>{
                                    return   <AddHeadList key={res.id} index={i} id={res.id} headName={res.headName} setEditHead={setEditHead} setHeadId={setHeadId} />
                                })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddHeadTable;