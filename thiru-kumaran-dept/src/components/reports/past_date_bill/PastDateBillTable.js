import React, { useState } from "react";
import PastDateBillList from "./pastDateList";

const PastDateBillTable = ({ pastDateBills }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedBills = React.useMemo(() => {
    if (sortColumn) {
      const sorted = [...pastDateBills];
      sorted.sort((a, b) => {
        const valA = a[sortColumn];
        const valB = b[sortColumn];
        if (valA < valB) {
          return sortDirection === "asc" ? -1 : 1;
        } else if (valA > valB) {
          return sortDirection === "asc" ? 1 : -1;
        } else {
          return 0;
        }
      });
      return sorted;
    } else {
      return pastDateBills;
    }
  }, [pastDateBills, sortColumn, sortDirection]);

  const total =
    Array.isArray(pastDateBills) &&
    pastDateBills.reduce(
      (accumulator, bill) => accumulator + bill.billAmount,
      0
    );

  return (
    <>
      <div className="flex inline lg:justify-between">
        <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-lighter text-2xl text-gray-800">Total: {total}</h2>
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
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      <div class="antialiased bg-gray-100 text-gray-600 my-20">
        <div class="flex flex-col justify-center h-full">
          <div class="w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header class="px-5 py-4 border-b border-gray-100">
              <h2 class="font-semibold text-gray-800">Past Date Bill Report</h2>
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
                          Address
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
                          onClick={() => handleSort("billAmount")}
                        >
                          Paid Amount
                          {sortColumn === "billAmount" && (
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
                          Excess
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
                    {sortedBills.map((pastDateBill, i) => (
                      <PastDateBillList
                        key={i}
                        pastDateBill={pastDateBill}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PastDateBillTable;
