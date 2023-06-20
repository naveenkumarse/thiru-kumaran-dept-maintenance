import React, { useEffect, useState } from "react";
import IndividualViewList from "./individualViewList";
import { getIndividualLoanReport } from "../../../../api";


const IndividualViewTable = ({individual}) => {
    const [list, setList] = useState([]);
    const [total, setTotal ] = useState([]);
    const [excess,setExcess] = useState([]);
    useEffect(()=>{
     try {
         const body ={
             loanNo:individual.loanNo,
             lineId:localStorage.getItem('lineId')
         }
         getIndividualLoanReport(body, setList)
     } catch (error) {
         console.log("Individual Details Fetch failed")
     }
    }, [])
    useEffect(()=>{
        const loanAmount = individual.loanAmount;
        const newTotal = [];
        const excessList = []
        console.log("list", list)
        for(let i = 0; i <list.length;i++){
            if (i === 0){
                const temp = loanAmount - list[i]["billAmount"]
                newTotal.push(temp)
            }
            else{
                const temp = newTotal[i-1] - list[i]["billAmount"]
                newTotal.push(temp);
            }
            if (newTotal[i] < 0) {
                excessList.push(-newTotal[i]);
                newTotal[i] = 0;
            }else{
                excessList.push(0);
            }
         
        }
        setExcess(excessList)
        setTotal(newTotal)
    },[list])
    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full pt-5 mx-auto bg-white shadow-lg rounded-sm border border-gray-200 ">

                        <div className="flex inline lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-bold text-gray-800">Individual Loan History</h2>
                            </header>
                        </div>

                        <div class="p-3">
                        <div class="flex lg:justify">
                        <div class="mr-5">
                        <h4 class="p-2 text-gray-800"><b>Name:</b> {individual.name}</h4>
                        <h4 class="p-2 text-gray-800"><b>Loan No:</b> {individual.loanNo}</h4>
                        <h4 class="p-2 text-gray-800"><b>Loan Amount:</b> {individual.loanAmount}</h4>
                        <h4 class="p-2 text-gray-800"><b>Address:</b> {individual.address}</h4>
                        </div>
                        <div class="mb-5">
                        <h4 class="p-2 text-gray-800"><b>Loan date:</b> {individual.date?individual.date:individual.loanDate}</h4>
                        { individual.closeDate?<h4 class="p-2 text-gray-800"><b>Close date:</b> {individual.closeDate}</h4>:<></>}
                        {individual.orderNo? <h4 class="p-2 text-gray-800"><b>Order No: </b>{individual.orderNo}</h4>:<></>}
                        </div>

                        </div>
   

                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-black-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">SNo.</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Date</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Bill Amount</div>
                                            </th> 
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Balance</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Excess</div>
                                            </th>  
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                    {list && list.length > 0 && list.map((user, i) => 
                                        <IndividualViewList key={i} index={i} user={user} total={total[i]} excess={excess[i]} />
                                    )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IndividualViewTable;