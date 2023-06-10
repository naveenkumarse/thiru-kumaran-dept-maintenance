import React, {useEffect, useState} from "react";
// import LineCreateForm from "./lineCreateform/lineCreateForm";
// import LineCreateTable from "./lineCreateTable/lineCreateTable";
import { getAllLineFE, createLineFE, updateLineFE } from "../../api";
import ListCreateItems from "./lineCreateTable/listCreateItems";

const LineCreate = () =>{
    const [lines, setLines] = useState([
    ]);
    const [id,setId] = useState('');
    const [name,setName] = useState("");

    const [editName,setEditName] = useState("");

    useEffect(()=>{
        const fetchData = async () => {
            try {
              await getAllLineFE(setLines); // Assuming getLineFE is an asynchronous function 
            } catch (error) {
              console.error("Error fetching line data:", error);
            }
          };
          fetchData();
    },[])

    useEffect(()=>{
        if (lines.length > 0){
            const newlineId = (parseInt(lines[lines.length-1].lineId.match(/\d+/)[0]) + 1);
            setId('Ln0' + String(newlineId))
        }
    }, [lines])

    const handleLineSave = (e) =>{
        e.preventDefault()
        const body = {
            "lineId":id,
            "lineName":name
        }
        createLineFE(body, setLines)
        window.location.reload();
    }
    const handleUpdate = (line)=>{
        setId(line.lineId);
        setEditName(line.lineName);
    }
    const handleLineEdit = (e) =>{
        e.preventDefault()
        const body = {
            "lineId":id,
            "lineName":editName
        }
        updateLineFE(body);
        window.location.reload();
    }
    return(
        <>
            <div className="flex justify-center bg-red-400 flex-col lg:flex-row ">
                <div className="w-full lg:w-1/2  ">
                <>
                    <div class="grid min-h-screen place-items-center bg-red-400">
                            <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 rounded-lg">
                                <h1 class="text-xl font-bold ">Add Line Details <span class="font-normal"></span></h1>
                                <form class="mt-6" onSubmit={(e)=> handleLineSave(e)}>
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Id</label>
                                <input id="id" type="text" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={id} onChange={(e)=>setId(e.target.value)} required />
                                    
                                    <label for="name" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Name</label>
                                    <input id="name" type="text" name="text" placeholder="Name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={name} onChange={(e)=>setName(e.target.value)} required />
                                    
                                    <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                        Create
                                    </button>
                                    <button type="submit" class="w-1/3 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                        Cancel
                                    </button>

                                </form>
                            </div>
                    </div>
                </>
                </div>
                <div className="w-full lg:w-1/2  ">
                <>
                    <div class="grid min-h-screen place-items-center bg-red-400">
                            <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 rounded-lg">
                                <h1 class="text-xl font-bold ">Edit Line Details <span class="font-normal"></span></h1>
                                <form class="mt-6" onSubmit={(e)=> handleLineEdit(e)}>
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Id</label>
                                <input id="id" type="text" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={id} onChange={(e)=>setId(e.target.value)} required />
                                    
                                    <label for="name" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Name</label>
                                    <input id="name" type="text" name="text" placeholder="Name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={editName} onChange={(e)=>setEditName(e.target.value)} required />
                                    
                                    <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                        Update
                                    </button>
                                    <button type="submit" class="w-1/3 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                                        Cancel
                                    </button>

                                </form>
                            </div>
                    </div>
                </>
                </div>
                <div className="w-full  ">
                        <>
                    <section class="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-52">
                        <div class="flex flex-col justify-center h-full">

                            <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg border border-gray-200">
                                <header class="px-5 py-4 border-b border-gray-100">
                                    <h2 class="font-semibold text-gray-800">Line Details</h2>
                                </header>
                                <div class="p-3">
                                    <div class="overflow-x-auto">
                                        <table class="table-auto w-full">
                                            <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                                <tr>
                                                    <th class="p-2 whitespace-nowrap">
                                                        <div class="font-semibold text-left">Id</div>
                                                    </th>
                                                    <th class="whitespace-nowrap">
                                                        <div class="pl-24 font-semibold text-left">Name</div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="text-sm divide-y divide-gray-100">
                                                {lines.map((line) => (<ListCreateItems key={line.lineId} line={line} handleUpdate={handleUpdate}/>))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
                </div>

            </div>

        </>

    )
}

export default LineCreate;