import React,{useEffect, useState} from "react";
import DirectEntryList from "./directEntryList";
import { getActiveLoansDirectEntry } from "../../../api";
const DirectEntryTable = () => {
    const [directentries, setDirectentries]=useState([
        // {
        //     "loanNo": "Lon02",
        //     "name": "siva",
        //     "address": "123,thangavel nagar",
        //     "balance": "5000",
        //     "payAmount": "50"
        // },
        // {
        //     "loanNo": "Lon03",
        //     "name": "indira",
        //     "address": "123,thangavel nagar",
        //     "balance": "5000",
        //     "payAmount": "50"
        // },
        // {
        //     "loanNo": "Lon04",
        //     "name": "naveen",
        //     "address": "123,thangavel nagar",
        //     "balance": "5000",
        //     "payAmount": "50"
        // }
    ]);
    const [filteredList, setFilteredList] =new  useState([]);
    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...directentries];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1; 
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
      };

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const body = {
                    "lineId":localStorage.getItem('lineId')
                };
              await getActiveLoansDirectEntry(body, setDirectentries); // Assuming getLineFE is an asynchronous function 
            } catch (error) {
              console.error("Error fetching Bill Entry data:", error);
            }
          };
          fetchData();
    },[])
    return (
        <>
            <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
                <div class="flex flex-col justify-center h-full">
                    <div class="w-full pt-5  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">

                        <div className="flex inline justify-around lg:justify-around">
                            <header class="px-5 py-4 border-b border-gray-100 ">
                                <h2 class="font-semibold text-gray-800">Direct Entry List</h2>
                            </header>
                            <div class='max-w-md '>
                                <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-black-600">
                                    <div class="grid place-items-center h-full w-12 text-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>

                                    <input
                                        class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                                        type="text"
                                        id="search"
                                        placeholder="Search.." onChange={(e)=>filterBySearch(e)} />
                                </div>
                            </div>
                        </div>
                        <div class="p-3">
                            <div class="overflow-x-auto">
                                <table class="table-auto w-full">
                                    <thead class="text-xs font-semibold uppercase text-black-400 bg-gray-50">
                                        <tr>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Loan No.</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Name</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-left">Address</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center">Bal</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center">Pay Amount</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center"> Amount</div>
                                            </th>
                                            <th class="p-2 whitespace-nowrap">
                                                <div class="font-bold text-center"> Enter </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody class="text-sm divide-y divide-gray-100">
                                      {filteredList.map((directentry, i)=><DirectEntryList key={i} directentry={directentry}/>)}  
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

export default DirectEntryTable;



//  REFERENCE FOR SEARCH 


// import React, { useEffect, useState } from "react";
// import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
// import CreateIcon from '@mui/icons-material/Create';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { NavLink } from "react-router-dom";
// import './workers.css'
// const Home = () => {
//     const [filteredList, setFilteredList] =new  useState([]);
//     const [getuserdata, setUserdata] = useState([]);
//     console.log(getuserdata);

//     const getdata = async (e) => {

//         const res = await fetch("http://localhost:8003/getdata", {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const data = await res.json();
//         console.log(data);
//         setFilteredList(data);
//         if (res.status === 422 || !data) {
//             console.log("error");
//         }
//         else {
//             setUserdata(data);
//             console.log("get data");
//         }
//     }
//     useEffect(() => {
//         getdata();
//     }, [])

//     const filterBySearch = (event) => {
//         // Access input value
//         const query = event.target.value;
//         // Create copy of item list
//         var updatedList = [...getuserdata];
//         // Include all elements which includes the search query
//         updatedList = updatedList.filter((item) => {
//           return item.loc.toLowerCase().indexOf(query.toLowerCase()) !== -1;
//         });
//         // Trigger render with updated values
//         setFilteredList(updatedList);
//       };


//     const deleteuser = async (id) => {
//         const res2 = await fetch(`http://localhost:8003/deleteuser/${id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });

//         const deletedata = await res2.json();
//         console.log(deletedata);

//         if (res2.status === 422 || !deletedata) {
//             console.log("error");
//         }
//         else {
//             console.log(" user deleted");
//             getdata();
//         }
//     }


//     return (

//         <>
            
       
//         <div className="hi" >


//                 <div className="mt-5">
//                     <div className="containera">
//                         <div className="add_btn mt-2 mb-2">
//                             <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
//                         </div>


//                         <table class="table">
//                             <thead>
//                                 <tr >
//                                     {/* className="table-dark" */}
//                                     <th scope="col">S.No</th>
//                                     <th scope="col">Name</th>
//                                     <th scope="col">Age</th>
//                                     <th scope="col">Location</th>
//                                     <th scope="col">Contact</th>
//                                     <th scope="col">Search<input id="search-box" onChange={(e)=>filterBySearch(e)} /></th>
//                                 </tr>
//                             </thead>
//                             <tbody>

//                                 {
//                                     filteredList.map((element, id) => {
//                                         return (
//                                             <>
//                                                 <tr>
//                                                     <th scope="row">{id + 1}</th>
//                                                     <td>{element.name}</td>
//                                                     <td>{element.age}</td>
//                                                     <td>{element.loc}</td>
//                                                     <td>{element.mob}</td>
//                                                     <td className="d-flex justify-content-between">
//                                                         <NavLink to={`view/${element._id}`}><button className="btn btn-success"><RemoveRedEyeIcon /></button></NavLink>
//                                                         <NavLink to={`edit/${element._id}`}><button className="btn btn-primary"><CreateIcon /></button></NavLink>
//                                                         <button type="submit" className="btn btn-danger" onClick={() => deleteuser(element._id)}><DeleteOutlineIcon /></button>
//                                                     </td>
//                                                 </tr>
//                                             </>
//                                         )
//                                     })
//                                 }


//                             </tbody>
//                         </table>

//                     </div>
//                 </div>

//                 </div>
                
//         </>
//     )
// }

// export default Home;