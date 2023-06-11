import React, { useEffect, useState } from "react";
import DetailsList from "./detailsList";
import { createBalance, deleteAllExtraHead, getAllThittam } from "../../../../api";

const DetailsTable = () => {
    const [data, setData] = useState({})
    const [list, setList] = useState([])
    const [balance, setBalance] = useState(0);
    const [balanceList, setBalanceList] = useState([]);
    const [credit, setCredit] = useState(0);
    const [debit, setDebit] = useState(0);

    useEffect(()=>{
        setList(data["thittamList"])
    }, [data])

    //useEffect for calculating balances
    useEffect(()=>{
        if (list && list.length>0){
            const balance = data.openingBalance;
            const newBalanceList = [];
            for(let i = 0; i <list.length;i++){
                if(i===0){
                    newBalanceList.push(balance - list[i].debit + list[i].credit);
                }
                else{
                    newBalanceList.push(balance - list[i].debit + list[i].credit);
                }

            }
            setBalanceList(newBalanceList);

            const sumOfCredit = list.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.credit;
              }, 0);
            const sumOfDebit = list.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.debit;
              }, 0);
            setCredit(sumOfCredit)
            setDebit(sumOfDebit)
            const finalBalance = data.openingBalance + credit - debit;
            setBalance(finalBalance)
        }
    }, [list])
    useEffect(()=>{
        const fetchData = async () => {
            try {
                const body = {
                    "date": localStorage.getItem('thittamdate')
                };
              await getAllThittam(body,setData); // Assuming getLineFE is an asynchronous function 

            } catch (error) {
              console.error("Error fetching Bill Entry data:", error);
            }
          };
          fetchData();
    },[])
    const handleSubmit =(e) =>{
        e.preventDefault();
        localStorage.setItem('thittamdate', data.date)
        const body ={
            "balance": balance,
            "name": "Closing Balance",
            "date":data.date
        }
        try {
            createBalance(body)
        } catch (error) {
            console.log("create head data error" ,error)
        }
        window.location.reload();
    }
    const deleteCall = (e) =>{
        e.preventDefault();
        localStorage.setItem('thittamdate', data.prevDate)
        const body ={
            "date":data.date
        }
        try {
            deleteAllExtraHead(body)
        } catch (error) {
            console.log("create head data error" ,error)
        }
        window.location.reload();
    }
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
                                            <div class="font-bold text-left">Previous Date:{data.prevDate} </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left"> Action</div>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">Current Date : {data.date}</div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap text-left">
                                            <button class="group relative h-8 w-24 overflow-hidden rounded-lg bg-white shadow" onClick={(e) => deleteCall(e)}>
                                                <div class="absolute inset-0 w-3 bg-green-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                                <span class="relative text-black group-hover:text-white">Delete</span>
                                            </button>
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
                                <tr>
                                <td class="p-2 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="font-medium text-gray-800">Opening Balance </div>
                                        </div>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="font-medium text-gray-800"></div>
                                        </div>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="font-medium text-gray-800"></div>
                                        </div>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="font-medium text-gray-800"></div>
                                        </div>
                                    </td>
                                    <td class="p-2 whitespace-nowrap">
                                        <div class="flex items-center">
                                            <div class="font-medium text-gray-800">{data.openingBalance}</div>
                                        </div>
                                    </td>
                                </tr>
                                    {list && list.length>0 && list.map((res,i) => {
                                        
                                        return <DetailsList key={i} res={res} balance={balanceList[i]}/>
                                    })}
                                    <tr>
                                        <td></td>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">Total </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">{debit} </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">{credit} </div>
                                        </th>
                                        <th class="p-2 whitespace-nowrap">
                                            <div class="font-bold text-left">{balance} </div>
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="inline-flex ">
                    <button onClick={(e) => handleSubmit(e)} type="submit" class="w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none ">
                        Save
                    </button>
                    {/* <button type="submit" class="mx-20 w-1/6 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none ">
                        Cancel
                    </button> */}
                </div>



            </div>
        </>
    )
}

export default DetailsTable;