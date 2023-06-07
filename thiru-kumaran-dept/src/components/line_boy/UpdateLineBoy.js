import React, { useState } from "react";
import { updateLineMemberFE} from "../../api";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateLineBoy = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const lineBoy= location.state?.lineboy;
    // const [id,setId] = useState(lineBoy.lineMemId);
    const [firstName,setFirstName] = useState(lineBoy.memberName);
    const [address,setAddress] = useState(lineBoy.address);
    const [phoneNo,setPhoneNo] = useState(lineBoy.phoneNo);
    const [password,setPassword] = useState(lineBoy.password);

    const handleLineBoyCreate = (e) =>{
        e.preventDefault();
        const body = {
            "lineMemId":lineBoy.lineMemId,
            "memberName":firstName,
            "phoneNo":phoneNo,
            "address":address,
            "password":password
        }
        updateLineMemberFE(body);
        navigate('/lineboy')
    }

    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400 lg:flex"> 
                <div class="m-2 w-full lg:w-1/2 p-12 bg-white">
                    <h1 class="text-xl font-bold ">Add Line Member Details <span class="font-normal"></span></h1>
                    <form class="mt-6" onSubmit={(e)=>handleLineBoyCreate(e)}>
                        <label for="firstname" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                        <input id="firstname" type="text" name="address" placeholder="Siva"  class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required />
                        <label for="address" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Address</label>
                        <input id="address" type="text" name="address" placeholder="Annaipalayam, Karur" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={address} onChange={(e)=>setAddress(e.target.value)} required />
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

export default UpdateLineBoy;