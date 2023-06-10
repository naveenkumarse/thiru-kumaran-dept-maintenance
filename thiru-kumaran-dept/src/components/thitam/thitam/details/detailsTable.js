import React, { useEffect, useState } from "react";
import DetailsList from "./detailsList";

const DetailsTable = () => {
    const list =[{
        "openingBalance": 2000,
        "date": "2023-05-30",
        "thittamList": [
            {
                "name": "Line 1 BILL",
                "description": null,
                "credit": 1000,
                "debit": 0,
                "date": null
            },
            {
                "name": "Line 1 LOAN",
                "description": null,
                "credit": 0,
                "debit": 0,
                "date": null
            },
            {
                "name": "Line 1 COMMISSION",
                "description": null,
                "credit": 0,
                "debit": 0,
                "date": null
            },
            {
                "name": "Line 1 SEETU",
                "description": null,
                "credit": 0,
                "debit": 0,
                "date": null
            },
            {
                "name": "Line 1EXCESS",
                "description": null,
                "credit": 0,
                "debit": 0,
                "date": null
            },
            {
                "name": "Line 2 BILL",
                "description": null,
                "credit": 5150,
                "debit": 0,
                "date": null
            },
            {
                "name": "Line 2 LOAN",
                "description": null,
                "credit": 0,
                "debit": 5000,
                "date": null
            },
            {
                "name": "Line 2 COMMISSION",
                "description": null,
                "credit": 500,
                "debit": 0,
                "date": null
            },
            {
                "name": "Line 2 SEETU",
                "description": null,
                "credit": 20,
                "debit": 0,
                "date": null
            },
            {
                "name": "Line 2EXCESS",
                "description": null,
                "credit": 0,
                "debit": 0,
                "date": null
            },
            {
                "name": "A LINE profit",
                "description": "",
                "credit": 250,
                "debit": 0,
                "date": null
            },
            {
                "name": "A LINE selavu",
                "description": "",
                "credit": 250,
                "debit": 0,
                "date": null
            }]
    }

    ];
    const thittamListArray = [];
    thittamListArray.push.apply(thittamListArray,list[0].thittamList);
    const [details, setDetails] = useState(thittamListArray)
    const deleteCall = ()=>{

    }
    useEffect(()=>{
        console.log(thittamListArray);
        console.log()
    },[])

    return (
        <>

            <div class="flex flex-col justify-center h-full">
                <div class="w-full pt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">

                    <div className="flex inline lg:justify-between">
                        <header class="px-5 py-4 border-b border-gray-100 ">
                            <h2 class="font-bold text-gray-800">Thitam Details</h2>
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
                                            <div class="font-bold text-lg text-left">Previous Date</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white text-lg shadow" onClick={() => deleteCall()}>
                                                <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                <span class="relative text-black group-hover:text-white">Delete</span>
                                            </button>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-lg  text-left">Head Name</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-lg  text-left">Current Date</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold  text-lg  text-left"></div>
                                        </th>
                                    </tr>
                                    <br />
                                    <tr>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">Head details</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">Description</div>
                                        </th>

                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">Debit</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">Credit </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">Balance </div>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody class="text-sm divide-y divide-gray-100">

                                    {details.map((res,i) => {
                                        
                                        return <DetailsList res={res} />
                                    })}
                                    <tr>
                                        <td></td>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">Total </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">5000 </div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="inline-flex ">
                    <button type="submit" class="w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none ">
                        Save
                    </button>
                    <button type="submit" class="mx-20 w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none ">
                        Cancel
                    </button>
                </div>



            </div>
        </>
    )
}

export default DetailsTable;