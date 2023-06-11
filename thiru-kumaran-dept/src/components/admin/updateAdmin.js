import React, { useState } from "react";
import { updateAdmin} from "../../api";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateAdmin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const Admin= location.state?.Admin;
    const [firstName,setFirstName] = useState(Admin.userName);
    const [phoneNo,setPhoneNo] = useState(Admin.phoneNo);
    const [password,setPassword] = useState('');
    const [newPassword,setNewPassword] = useState('');

    const handleAdminCreate = (e) =>{
        e.preventDefault();
        const body = {
            "userName":firstName,
            "phoneNo":phoneNo,
            "newPassword":newPassword,
            "oldPassword":password,
            "adminId":Admin.adminId
        }
        updateAdmin(body);
        navigate('/admin')
    }

    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400 lg:flex"> 
                <div class="m-2 w-full lg:w-1/2 p-12 bg-white">
                    <h1 class="text-xl font-bold ">Edit Admin Details <span class="font-normal"></span></h1>
                    <form class="mt-6" onSubmit={(e)=>handleAdminCreate(e)}>
                        <label for="firstname" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                        <input id="firstname" type="text" name="address" placeholder="Siva"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                        <label for="phoneno" class="block mt-2 text-xs font-semibold text-gray-600 uppercase ">Phone no</label>
                        <input id="email" type="text" name="email" placeholder="9876543210" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={phoneNo} onChange={(e)=>setPhoneNo(e.target.value)} required />
                        <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Old Password</label>
                        <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                        <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">New Password</label>
                        <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required />
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

export default UpdateAdmin;