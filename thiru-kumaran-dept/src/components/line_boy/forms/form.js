import React, { useState } from "react";

const LineBoyForm = () => {
    const [id,setId] = useState(0);
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phoneNo,setPhoneNo] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400 ">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <h1 class="text-xl font-bold ">Add Line Member Details <span class="font-normal"></span></h1>
                    <form class="mt-6">
                    <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Id</label>
                    <input id="id" type="text" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={id} onChange={(e)=>setId(e.target.value)} required />
                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-1/2">
                                <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                                <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                            </span>
                            <span class="w-1/2">
                                <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                                <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={lastName} onChange={(e)=>setLastName(e.target.value)} required />
                            </span>
                        </div>
                        <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase mt-2">E-mail</label>
                        <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        <label for="phoneno" class="block mt-2 text-xs font-semibold text-gray-600 uppercase ">Phone no</label>
                        <input id="email" type="text" name="email" placeholder="9876543210" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} required />
                        <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                        <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={password} onChange={(e)=>setPassword(e.target.value)} required />
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

export default LineBoyForm;