import React, { useState } from "react";

const LoanForm = () => {
    const [loanNumber, setLoanNumber] = useState(0);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [loanAmount, setLoanAmount] = useState(0);
    const [interest, setInterest] = useState(10);
    const [userNumber, setUserNumber] = useState(10);
    const [commissionAmount, setCommissionAmount] = useState(0);
    const [seetuAmount, setSeetuAmount] = useState(0);
    const [orderNumber, setOrderNumber] = useState(0);
    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400 ">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <h1 class="text-xl font-bold ">Add Loan <span class="font-normal"></span></h1>
                    <form class="mt-6">
                      
                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-1/2">
                            <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Loan Number</label>
                        <input id="id" type="number" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={loanNumber} onChange={(e) => setLoanNumber(e.target.value)} required />
                            </span>
                            <span class="w-1/2">
                            <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase mt-2">User Number</label>
                                <input type="text" placeholder="usernumber" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} required />
                            </span>
                        </div>
                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-1/2">
                                <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                                <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                            </span>
                            <span class="w-1/2">
                                <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                                <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                            </span>
                        </div>

                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-1/2">

                            <label for="phoneno" class="block mt-2 text-xs font-semibold text-gray-600 uppercase ">Phone no</label>
                        <input id="email" type="text" name="email" placeholder="9876543210" autocomplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} required />
                            </span>
                            <span class="w-1/2">
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Order Number</label>
                                <input id="id" type="number" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)} required />
                            </span>
                        </div>

                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-1/2">
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Loan Amount</label>
                                <input id="id" type="number" name="id" placeholder="Loan Amount" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} required />
                            </span>
                            <span class="w-1/2">
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Interest</label>
                                <input id="id" type="number" name="id" placeholder="Interest" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={interest} onChange={(e) => setInterest(e.target.value)} required />
                            </span>
                        </div>
                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-1/2">
                            <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Seetu Amount </label>
                        <input id="id" type="number" name="id" placeholder="Commission Amount" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={seetuAmount} onChange={(e) => setSeetuAmount(e.target.value)} required />
                            </span>
                            <span class="w-1/2">
                               
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Commission Amount</label>
                        <input id="id" type="number" name="id" placeholder="id" autocomplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={commissionAmount} onChange={(e) => setCommissionAmount(e.target.value)} required />
                            </span>
                        </div>
                       

                   

                        <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Address</label>
                        <input id="password-confirm" type="textarea" name="password-confirm" placeholder="address" autocomplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={address} onChange={(e) => setAddress(e.target.value)} required />
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

export default LoanForm;