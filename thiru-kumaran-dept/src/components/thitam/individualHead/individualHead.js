import React, { useEffect, useState } from "react";
import IndividualHeadTable from "./individualHeadTable";
import { getAllHeads, getIndividualHead } from "../../../api";

const IndividualHead = () => {
    const [todaydate, setTodayDate] = useState(new Date());
    const [enddate, setEndDate] = useState(new Date());
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [individualHeadList, setIndividualHeadList] = useState(
        [
            // {
            //     "id": 1,
            //     "name": "A LINE selavu",
            //     "description": "",
            //     "debit": 250,
            //     "credit": 0,
            //     "date": "2023-05-06",
            //     "extraHead": true,
            //     "balance": 0
            // },
            // {
            //     "id": 2,
            //     "name": "A LINE selavu",
            //     "description": "",
            //     "debit": 0,
            //     "credit": 250,
            //     "date": "2023-05-05",
            //     "extraHead": true,
            //     "balance": 0
            // }
        ]
    )

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
      };

    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        getAllHeads(setOptions);
      } catch (error) {
        console.log(error);
      }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            "startDate":todaydate,
            "endDate":enddate,
            "name":selectedValue
        }
        try {
        getIndividualHead(body, setIndividualHeadList)
        } catch (error) {
            console.log("error in fetching head data", error)
        }    
        console.log(individualHeadList)
        // window.location.reload();
    }
    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Individual Head <span class="font-normal"></span> </h1>
                    </div>
                    <form class="mt-6" onSubmit={(e)=>handleSubmit(e)}>
                    <div className="flex justify-between">
                    <select
                        value={selectedValue}
                        onChange={(e) => handleSelectChange(e)}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="">Select an option</option>
                        {options &&
                        options.length > 0 &&
                        options.map((option) => (
                            <option key={option.id} value={option.headName}>
                            {option.headName}
                            </option>
                        ))}
                    </select>
                    </div>
                        <div className="flex justify-between">
                            
                            <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Start date</label>
                            <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">End date</label>
                        </div>


                        <div className=" flex inline justify-between">
                            
                            <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner mr-20" value={todaydate} onChange={(e) => setTodayDate(e.target.value)} required />
                            <input id="id" type="date" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={enddate} onChange={(e) => setEndDate(e.target.value)} required />
                        </div>

                        <div>
                            <button type="submit" class="w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                Search
                            </button>
                           
                        </div>
                    </form>

                    <br />
                    <br />


                    <div className="pt-12">
                        <IndividualHeadTable individualHeadList={individualHeadList} />
                    </div>

                </div>

            </div>
        </>
    )
}
export default IndividualHead;