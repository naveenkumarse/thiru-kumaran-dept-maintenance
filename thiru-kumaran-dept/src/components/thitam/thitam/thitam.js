import React, { useEffect, useState } from "react";
import ThitamTable from "./thitamTable";
import Verify from "./verify/verify";
import Details from "./details/details";
import { createHeadData, getAllHeads, getOpeningBalanceBool } from "../../../api";
// import { useNavigate } from "react-router-dom";
const Thitam = () => {
    // const navigate = useNavigate();
    // const [openingBalance, setOpeningBalance] = useState("false");
    const [options, setOptions] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');
    const [date, setDate] = useState(new Date());
    const [debit, setDebit] = useState();
    const [description, setDescription ] = useState('');
    const [credit, setCredit] = useState();
    const [remarks, setRemarks] = useState();
    // useEffect(()=>{
    //     getOpeningBalanceBool(setOpeningBalance)
    //     console.log(openingBalance)
    //     if (openingBalance === false){
    //         navigate('/openingbalance')
    //     }
    // }, []);

    useEffect(() => {
        fetchOptionsData();
      }, []);
    
      const fetchOptionsData = async () => {
        try {
          getAllHeads(setOptions);
        } catch (error) {
          console.log(error);
        }
      };
    
      const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
      };

      const handleHeadSubmit = (e) =>{
        e.preventDefault();
        const body ={
            "name":description,
            "description":remarks,
            "credit":credit,
            "debit":debit,
            "date":date
        }
        try {
            createHeadData(body)
        } catch (error) {
            console.log(error)
        }
        window.location.reload();
      }
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

                            <form class="mt-6" onClick={(e)=>handleHeadSubmit}>
                                <h4 class=" font-bold ">Date <span class="font-normal"></span> </h4>
                                <div className=" ">
                                    <div class="p-2 bg-white border shadow rounded w-96">
                                        <div class="flex justify-between items-center">
                                            <input type="date" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setDate(e.target.value)} placeholder="Enter head name" value={date} />
                                        </div>
                                    </div>
                                </div>
                                <h4 class=" font-bold ">Account Head <span class="font-normal"></span> </h4>
                                <div className=" flex inline ">

                                    <div class="p-2 bg-white border shadow rounded w-96">

                                        <div class="flex justify-between items-center">
                                            {/* <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setAddHead(e.target.value)} placeholder="Enter head name" value={addHead} /> */}
                                            <select
                                            value={selectedValue}
                                            onChange={(e) => handleSelectChange(e)}
                                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            <option value="">Select an option</option>
                                            {options &&
                                            options.length > 0 &&
                                            options.map((option) => (
                                                <option key={option.id} value={option.id} onChange={(e)=> setDescription(e.target.value)}>
                                                {option.headName}
                                                </option>
                                            ))}
                                        </select>
                                        </div>
                                    </div>
                                </div>
                                <h4 class=" font-bold ">Remarks <span class="font-normal"></span> </h4>
                                <div className=" flex inline ">
                                    <div class="p-2 bg-white border shadow rounded w-96">
                                        <div class="flex justify-between items-center">
                                            <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setRemarks(e.target.value)} placeholder="Enter head name" value={remarks} />
                                        </div>
                                    </div>
                                </div>
                                <h4 class=" font-bold ">Debit <span class="font-normal"></span> </h4>
                                <div className=" flex inline ">
                                    <div class="p-2 bg-white border shadow rounded w-96">
                                        <div class="flex justify-between items-center">
                                            <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setDebit(e.target.value)} placeholder="Enter head name" value={debit} />
                                        </div>
                                    </div>
                                </div>
                                <h4 class=" font-bold "> Credit <span class="font-normal"></span> </h4>
                                <div className=" flex inline ">
                                    <div class="p-2 bg-white border shadow rounded w-96">
                                        <div class="flex justify-between items-center">
                                            <input type="text" class="w-full bg-gray-100 rounded p-2 mr-4 border focus:outline-none focus:border-black" onChange={(e) => setCredit(e.target.value)} placeholder="Enter head name" value={credit} />
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