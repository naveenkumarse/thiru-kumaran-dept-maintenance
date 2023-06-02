import React, { useEffect, useState } from "react";
import ListLoan from "./loanList";
import { getLoanByLineAllFE } from "../../../api";

const LoanTable = () => {
  let objectDate = new Date();
  let day = objectDate.getDate();
  let month = objectDate.getMonth();
  let year = objectDate.getFullYear();
  let date = `${year}-${month + 1}-${day}`;
  let loan_closed_date = !null;
  let line_name = localStorage.getItem("line_name");

  const body = { date, loan_closed_date, line_name };
  const [loans, setLoans] = useState([
    {
      "id": 1,
      "loanNo": "Lon01",
      "userNo": "Us01",
      "name": "Dharani",
      "address": "123,thangavel nagar",
      "phoneNo": "123456",
      "orderNo": "1",
      "currentLoanDate": "2023-05-29",
      "loanAmount": "5000",
      "seetuAmount": "20",
      "commissionAmount": "500",
      "interest": "10",
      "appxLoanClosedDate": "2023-09-06",
      "loanClosedDate": null,
      "excessAmount": null,
      "lineId": "Ln03",
      "balance": "5000",
      "dailyUpdate": false,
      "loanActive": true
    },
    {
      "id": 2,
      "loanNo": "Lon02",
      "userNo": "Us02",
      "name": "SivaPrakash",
      "address": "123,updated nagar",
      "phoneNo": "123456345",
      "orderNo": "2",
      "currentLoanDate": "2023-05-29",
      "loanAmount": "500000",
      "seetuAmount": "20",
      "commissionAmount": "50000",
      "interest": "10",
      "appxLoanClosedDate": "2023-09-06",
      "loanClosedDate": null,
      "excessAmount": null,
      "lineId": "Ln03",
      "balance": "500000",
      "dailyUpdate": false,
      "loanActive": true
    },
    {
        "id": 2,
        "loanNo": "Lon03",
        "userNo": "Us03",
        "name": "Indira Kumar",
        "address": "123,updated nagar",
        "phoneNo": "123456345",
        "orderNo": "2",
        "currentLoanDate": "2023-05-29",
        "loanAmount": "500000",
        "seetuAmount": "20",
        "commissionAmount": "50000",
        "interest": "10",
        "appxLoanClosedDate": "2023-09-06",
        "loanClosedDate": null,
        "excessAmount": null,
        "lineId": "Ln03",
        "balance": "500000",
        "dailyUpdate": false,
        "loanActive": true
      }
  ]);

  const [sortColumn, setSortColumn] = useState(""); // Track the currently sorted column
  const [sortOrder, setSortOrder] = useState("asc"); // Track the sorting order (asc/desc)

  const handleSort = (column) => {
    if (sortColumn === column) {
      // If the same column is clicked, toggle the sorting order
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      // If a new column is clicked, set the sorting column and default to ascending order
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  useEffect(() => {
    const sortedLoans = [...loans].sort((a, b) => {
      const valueA = a[sortColumn] || "";
      const valueB = b[sortColumn] || "";
  
      if (sortOrder === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
  
    setLoans(sortedLoans);
  }, [sortColumn, sortOrder]);  

  return (
    <>
      <section className="antialiased bg-gray-100 text-gray-600 px-4 bg-red-400 my-20">
        <div className="flex flex-col justify-center h-full">
          <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800">Loan Details</h2>
            </header>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-auto w-full">
                  <thead className="text-xs font-bold uppercase text-black-400 bg-gray-50">
                    <tr>
                    <th className="p-2 whitespace-nowrap cursor-pointer"
                    onClick={() => handleSort("loanNo")}>
                    <div className="flex items-center">
                    <div className="font-bold text-left">Loan No.</div>
                    <span className="ml-1">
                            {(sortOrder === "asc" && sortColumn === "loanNo") ? (
                                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-8 w-8">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                            ) : (
                                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-8 w-8">
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                            )}
                        </span>
                    </div>
                    </th>

                      <th
                        className="p-2 whitespace-nowrap cursor-pointer"
                        onClick={() => handleSort("name")}
                      >
                        <div className="font-bold text-left">Name</div>
                      </th>
                      <th
                        className="p-2 whitespace-nowrap cursor-pointer"
                        onClick={() => handleSort("loanAmount")}
                      >
                        <div className="font-bold text-left">Loan Amount</div>
                      </th>
                      <th className="p-2 whitespace">
                        <div className="font-bold text">Mahimai</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-bold text-center">Action</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm text-gray-00 divide-y divide-gray-100">
                    {loans?.map((loan) => (
                      <ListLoan key={loan.loanNo} loan={loan} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoanTable;