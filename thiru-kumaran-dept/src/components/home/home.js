import React, {useEffect, useState} from "react";
import Button from "../button/home_button";
import { getLineFE, getThittamDate } from "../../api";
const Home = () => {
    const [date,setDate] = useState();
    useEffect(()=>{
        const fetchData = async () => {
            try {
              await getThittamDate(date); 
            } catch (error) {
              console.error("Error fetching line data:", error);
            }
          };
      
          fetchData();
    },[])
    const [lines,setLines] = useState([
        // {
        //     "date": "2023-05-10",
        //     "lineId": "Ln03",
        //     "lineName": "Line 3"
        // },
        // {
        //     "date": null,
        //     "lineId": "Ln01",
        //     "lineName": "Line 1"
        // }
    ]);
    useEffect(()=>{
        const fetchData = async () => {
            try {
              await getLineFE(setLines); 
            } catch (error) {
              console.error("Error fetching line data:", error);
            }
          };
      
          fetchData();
    },[])
    
    return (
        <>
            <div class="flex flex-col mt-28">
                <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-gray-100 border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Line No.
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                        Line Id
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                          Line Name
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            A/C Date
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                {lines.map((line,i) => (
                                        <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {line.lineId}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {line.lineName}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {line.date}
                                        </td>
                                        <td class="text-sm text-gray-900 font-light  py-4 whitespace-nowrap">
                                            <Button lineId={line.lineId} date={line.date} path='line' lineName={line.lineName}/>
                                        </td>
                                    </tr>
                                    ))}
                                   
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default Home;