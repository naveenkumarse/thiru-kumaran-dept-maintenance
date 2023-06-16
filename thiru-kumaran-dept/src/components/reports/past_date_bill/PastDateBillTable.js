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
          <h2 class="font-bold text-gray-800">Total: {total}</h2>
        </header>
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
                          class="font-bold text-left cursor-pointer"
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
                          class="font-bold text-left cursor-pointer"
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
