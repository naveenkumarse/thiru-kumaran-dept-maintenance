import React, { useEffect, useState } from "react";
import { createLoanFE } from "../../../api";

const LoanForm = () => {
    const [firstName, setFirstName] = useState("");
    const [phone_no, setPhone_on] = useState("");
    const [address, setAddress] = useState("");
    const [loanAmount, setLoanAmount] = useState(0);
    const [interest, setInterest] = useState(10);
    const [commissionAmount, setCommissionAmount] = useState(0);
    const [seetuAmount, setSeetuAmount] = useState(0);
    const [order_no, setOrder_no] = useState(0);
    const [date, setDate] = useState(new Date());
    const pay_amount = loanAmount/100;
    const currentDate = localStorage.getItem('date');
    const lineId = localStorage.getItem('lineId')
    const calculateCommissionAmount = () => {
        setCommissionAmount(loanAmount * (interest / 100));
    }
    useEffect(() => {
        calculateCommissionAmount();
    }, [loanAmount, interest])
    const body = {
        // "loanNo":loan_no,
        // "userNo":user_no,
        "name":firstName,
        "address":address,
        "phoneNo":phone_no,
        "orderNo":order_no,
        "date":date,
        "currentDate":date,
        "loanAmount":loanAmount,
        "seetuAmount":seetuAmount,
        "commissionAmount":commissionAmount,
        "interest":interest,
        "lineId":lineId
    }
    const createLoan = (e) =>{
        e.preventDefault();
        createLoanFE(body);
        window.location.reload();
    }
    const onCancelCall = ()=>{
        window.location.reload();
    }

    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400 ">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <h1 class="text-xl font-bold ">Add Loan <span class="font-normal"></span></h1>
                    <form class="mt-6" onSubmit={(e)=>createLoan(e)}>
                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-full">
                                <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                                <input id="firstname" type="text" name="firstname" placeholder="John" autoComplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                            </span>
                        </div>
                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-full">
                                <label for="date" class="block text-xs font-semibold text-gray-600 uppercase">Date</label>
                                <input id="date" type="date" name="date" placeholder="" autoComplete="date" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={date} onChange={(e) => setDate(e.target.value)} required />
                            </span>
                        </div>
                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-1/2">
                                <label for="phoneno" class="block mt-2 text-xs font-semibold text-gray-600 uppercase ">Phone no</label>
                                <input id="email" type="text" name="email" placeholder="9876543210" autoComplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={phone_no} onChange={(e) => setPhone_on(e.target.value)} required />
                            </span>
                            <span class="w-1/2">
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Order Number</label>
                                <input id="id" type="number" name="id" placeholder="id" autoComplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={order_no} onChange={(e) => setOrder_no(e.target.value)} required />
                            </span>
                        </div>

                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-1/2">
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Loan Amount</label>
                                <input id="id" type="number" name="id" placeholder="Loan Amount" autoComplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} required />
                            </span>
                            <span class="w-1/2">
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Interest</label>
                                <input id="id" type="number" name="id" placeholder="Interest" autoComplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={interest} onChange={(e) => setInterest(e.target.value)} required />
                            </span>
                        </div>
                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-1/2">
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Seetu Amount </label>
                                <input id="id" type="number" name="id" placeholder="Commission Amount" autoComplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={seetuAmount} onChange={(e) => setSeetuAmount(e.target.value)} required />
                            </span>
                            <span class="w-1/2">

                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Commission Amount</label>
                                <input id="id" type="number" name="id" placeholder="id" autoComplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={commissionAmount} onChange={(e) => setCommissionAmount(e.target.value)} required />
                            </span>
                        </div>
                        <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Address</label>
                        <input id="password-confirm" type="textarea" name="password-confirm" placeholder="address" autoComplete="new-password" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={address} onChange={(e) => setAddress(e.target.value)} required />
                        <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Save
                        </button>
                        <button type="submit" class="w-1/3 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right" onClick={onCancelCall}>
                            Cancel
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LoanForm;