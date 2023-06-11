import React, { useState } from "react";
import { createAdmin } from "../../../api";
import AdminTable from "../table/table";

const AdminForm = () => {
    const [firstName,setFirstName] = useState("");
    const [phoneNo,setPhoneNo] = useState("");
    const [password,setPassword] = useState("");

    const handleAdminCreate = (e) =>{
        e.preventDefault();
        const body = {
            "userName":firstName,
            "phoneNo":phoneNo,
            "password":password
        }
        createAdmin(body);
        window.location.reload()

    }
    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400 lg:flex"> 
                <div class="m-2 w-full lg:w-1/2 p-12 bg-white">
                    <h1 class="text-xl font-bold ">Add Admin Details <span class="font-normal"></span></h1>
                    <form class="mt-6" onSubmit={(e)=>handleAdminCreate(e)}>
                     
                        <label for="firstname" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                        <input id="firstname" type="text" name="address" placeholder="Siva"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
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
                <div className="w-full lg:w-1/2 ">
                    <AdminTable />
                </div>
            </div>
        </>
    )
}

export default AdminForm;