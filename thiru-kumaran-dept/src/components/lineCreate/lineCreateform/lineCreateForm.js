import React, { useState } from "react";

const LineCreateForm =()=>{
    const [id,setId] = useState(0);
    const [name,setName] = useState("");
    return(
        <>
         <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <h1 class="text-xl font-bold ">Add Line Details <span class="font-normal"></span></h1>
                    <form class="mt-6">
                    <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Id</label>
                    <input id="id" type="text" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={id} onChange={(e)=>setId(e.target.value)} required />
                        
                        <label for="name" class="block mt-2 text-xs font-semibold text-gray-600 uppercase mt-2">Name</label>
                        <input id="name" type="text" name="text" placeholder="Name" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={name} onChange={(e)=>setName(e.target.value)} required />
                        
                        <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Save
                        </button>
                        <button type="submit" class="w-1/3 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Cancel
                        </button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default LineCreateForm;