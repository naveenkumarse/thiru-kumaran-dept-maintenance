import React, { useEffect, useState } from "react";
import ListLoan from "./loanList";
import { getLoanByLineAllFE } from "../../../api";

const LoanTable = () => {

  let lineId = localStorage.getItem('lineId');
  let date = localStorage.getItem('date'); 
  const body = {
    "date":date,
    "lineId":lineId
  }
  const [loans, setLoans] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
        try {
          await getLoanByLineAllFE(body, setLoans); // Assuming getLineFE is an asynchronous 
        } catch (error) {
          console.error("Error fetching line data:", error);
        }
      };
  
      fetchData();
},[]);
  // const [sortColumn, setSortColumn] = useState(""); // Track the currently sorted column
  // const [sortOrder, setSortOrder] = useState("asc"); // Track the sorting order (asc/desc)
const handleSort = () =>{ console.log("hi")}
  // const handleSort = (column) => {
  //   if (sortColumn === column) {
  //     // If the same column is clicked, toggle the sorting order
  //     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  //   } else {
  //     // If a new column is clicked, set the sorting column and default to ascending order
  //     setSortColumn(column);
  //     setSortOrder("asc");
  //   }
  // };

  // useEffect(() => {
  //   const sortedLoans = [...loans].sort((a, b) => {
  //     const valueA = a[sortColumn] || "";
  //     const valueB = b[sortColumn] || "";
  
  //     if (sortOrder === "asc") {
  //       return valueA.localeCompare(valueB);
  //     } else {
  //       return valueB.localeCompare(valueA);
  //     }
  //   });
  
  //   setLoans(sortedLoans);
  // }, [sortColumn, sortOrder]);  

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
                    {loans.length >0 && loans.map((loan) => (
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
