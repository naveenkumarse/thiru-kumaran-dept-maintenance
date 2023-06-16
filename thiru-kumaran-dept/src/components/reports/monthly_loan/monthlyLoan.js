import React, { useEffect, useState } from "react";
import { getMonthlyLoan } from "../../../api";
import MonthlyLoanTable from "./monthlyLoanTable";
import MonthlyLoanList from "./monthlyLoanList";

const MonthlyLoan = () => {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState(null);
    const [query, setQuery] = useState("");

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };


    const [startdate, setStartDate] = useState();
    const [enddate, setEndDate] = useState();
    const [monthlyLoans, setMonthlyLoans] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            "lineId": localStorage.getItem('lineId'),
            "startDate": startdate,
            "endDate": enddate
        }
        try {
            getMonthlyLoan(body, setMonthlyLoans)
        } catch (error) {
            console.log("error in fetching monthly Loan")
        }
    }

    return (
        <>
            <div class="grid min-h-screen place-items-center bg-red-400">
                <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-10/12 bg-white">
                    <div className="flex justify-between">
                        <h1 class="text-xl font-bold ">Monthly Loan<span class="font-normal"></span> </h1>
                    </div>
                    <form class="mt-6" onSubmit={(e) => handleSubmit(e)}>
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Staring date:</label>
                        <input id="id" type="date" name="id" placeholder="id" pattern="yyyy-mm-dd" autocomplete="id" class="block w-1/2 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={startdate} onChange={(e) => setStartDate(e.target.value)} required />
                        <label for="id" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Ending date:</label>
                        <input id="id" type="date" name="id" placeholder="id" pattern="yyyy-mm-dd" autocomplete="id" class="block w-1/2 p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" value={enddate} onChange={(e) => setEndDate(e.target.value)} required />
                        <button type="submit" class="w-1/3 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Search
                        </button>
                        <button type="submit" class="w-1/3 mx-2 py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none float-right">
                            Cancel
                        </button>
                    </form><br></br><br></br>
                    <div className="pt-12">
                        <div className="flex inline lg:justify-between">
                            <header class="px-5 py-4 border-b border-gray-100">
                                <h2 class="font-lighter text-gray-800"> Loan Amount Total: {monthlyLoans["loanAmountTotal"]}</h2>
                                <h2 class="font-lighter text-gray-800 mt-2"> Interest Amount Total: {monthlyLoans["interestTotal"]}</h2>
                            </header>

                            <div class="max-w-md mr-5">
                                <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden border border-black-600">
                                    <div class="grid place-items-center h-full w-12 text-gray-300">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            class="h-6 w-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>

                                    <input
                                        class="peer h-full w-full outline-none text-sm text-gray-700 pr-10"
                                        type="text"
                                        id="search"
                                        placeholder="Search" onChange={event => setQuery(event.target.value)} 
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="antialiased bg-gray-100 text-gray-600 my-20">
                            <div class="flex flex-col justify-center h-full">
                                <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                    <header class="px-5 py-4 border-b border-gray-100">
                                        <h2 class="font-semibold text-gray-800">Monthly Loan</h2>
                                    </header>

                                    <div class="p-3">
                                        <div class="overflow-x-auto">
                                            <table class="table-auto w-full">
                                                <thead class="text-xs font-bold uppercase text-black-400 bg-gray-50">
                                                    <tr>
                                                        <th class="p-2 whitespace-nowrap text-left">
                                                            <div
                                                                class="font-bold text-left cursor-pointer"
                                                                onClick={() => handleSort("loanNo")}
                                                            >
                                                                Loan No
                                                                {sortColumn === "loanNo" && (
                                                                    <span class="ml-1">
                                                                        {sortDirection === "asc" ? "▲" : "▼"}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </th>
                                                        <th class="p-2 whitespace-nowrap">
                                                            <div
                                                                class="font-bold text-left cursor-pointer"
                                                                onClick={() => handleSort("name")}
                                                            >
                                                                Name
                                                                {sortColumn === "name" && (
                                                                    <span class="ml-1">
                                                                        {sortDirection === "asc" ? "▲" : "▼"}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </th>
                                                        <th class="p-2 whitespace-nowrap">
                                                            <div
                                                                class="font-bold text-center cursor-pointer"
                                                                onClick={() => handleSort("address")}
                                                            >
                                                                Loan Amount
                                                                {sortColumn === "address" && (
                                                                    <span class="ml-1">
                                                                        {sortDirection === "asc" ? "▲" : "▼"}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </th>
                                                        <th class="p-2 whitespace-nowrap">
                                                            <div
                                                                class="font-bold text-left cursor-pointer"
                                                                onClick={() => handleSort("LoanAmount")}
                                                            >
                                                                Interest
                                                                {sortColumn === "LoanAmount" && (
                                                                    <span class="ml-1">
                                                                        {sortDirection === "asc" ? "▲" : "▼"}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </th>
                                                        <th class="p-2 whitespace-nowrap">
                                                            <div
                                                                class="font-bold text-center cursor-pointer"
                                                                onClick={() => handleSort("excess")}
                                                            >
                                                                Date
                                                                {sortColumn === "excess" && (
                                                                    <span class="ml-1">
                                                                        {sortDirection === "asc" ? "▲" : "▼"}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody class="text-sm text-gray-600 divide-y divide-gray-100">
                                                    {monthlyLoans["loanData"] && monthlyLoans["loanData"].filter(post => {
                                                        if (query === '') {
                                                            return post;
                                                        } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                                                            return post;
                                                        }
                                                    }).map((monthlyLoan, i) => (
                                                        <MonthlyLoanList
                                                            key={i}
                                                            monthlyLoan={monthlyLoan}
                                                        />
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MonthlyLoan;