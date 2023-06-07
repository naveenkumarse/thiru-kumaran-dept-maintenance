import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateLoanFE } from "../../api";

const UpdateLoan = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const loan = location.state?.loan;
    const [loanNo, setLoanNo] = useState(loan.loanNo);
    const [firstName, setFirstName] = useState(loan.name);
    const [phone_no, setPhone_on] = useState(loan.phoneNo);
    const [address, setAddress] = useState(loan.address);
    const [loanAmount, setLoanAmount] = useState(loan.loanAmount);
    const [interest, setInterest] = useState(10);
    // const [userNumber, setUserNumber] = useState();
    const [commissionAmount, setCommissionAmount] = useState(loan.commissionAmount);
    const [seetuAmount, setSeetuAmount] = useState(loan.seetuAmount);
    const [order_no, setOrder_no] = useState(loan.orderNo);
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
        "loanNo":loanNo,
        // "userNo":user_no,
        "name":firstName,
        "address":address,
        "phoneNo":phone_no,
        "orderNo":order_no,
        "currentDate":currentDate,
        "loanAmount":loanAmount,
        "seetuAmount":seetuAmount,
        "commissionAmount":commissionAmount,
        "interest":interest,
        "lineId":lineId
    }
    const createLoan = (e) =>{
        e.preventDefault();
        updateLoanFE(body);
        navigate('/loan')
        // window.location.reload();
    }
    const onCancelCall = ()=>{
        window.location.reload();
    }

    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400 ">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <h1 class="text-xl font-bold ">Update Loan <span class="font-normal"></span></h1>
                    <form class="mt-6" onSubmit={(e)=>createLoan(e)}>
{/* 
                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-1/2">
                                <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Loan Number</label>
                                <input id="id" type="text" name="id" placeholder="id" autoComplete="id" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={loan_no} onChange={(e) => setLoan_no(e.target.value)} required />
                            </span>
                            <span class="w-1/2">
                                <label class="block mt-2 text-xs font-semibold text-gray-600 uppercase mt-2">User Number</label>
                                <input type="text" placeholder="usernumber" autoComplete="email" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={userNumber} onChange={(e) => setUserNumber(e.target.value)} required />
                            </span>
                        </div> */}
                        <div class="flex justify-between gap-3 mt-2">
                            <span class="w-full">
                                <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                                <input id="firstname" type="text" name="firstname" placeholder="John" autoComplete="given-name" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
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

export default UpdateLoan;