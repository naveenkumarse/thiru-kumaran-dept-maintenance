import React, { useState } from "react";

const updateLine = ({ line }) => {

    // const [id,setId] = useState('Ln0' + String(newLineId));
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const handleLineSave = (name, id) => {
        console.log(name);
        console.log(id);
    }
    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12">
                    <h1 class="text-xl font-bold ">Edit Line Details <span class="font-normal"></span></h1>
                    <form class="mt-6">
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Id</label>
                        <input id="id" type="text" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={id} onChange={(e) => setId(e.target.value)} required />

                        <label for="name" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Name</label>
                        <input id="name" type="text" name="text" placeholder="Name" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={name} onChange={(e) => setName(e.target.value)} required />

                        <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right" onClick={() => handleLineSave(id, name)}>
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

export default updateLine;