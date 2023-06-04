// user api 
let ENDPOINT_URL = 'http://localhost:8080'
// export const logout = (setUser) => {
//     fetch(ENDPOINT_URL + '/user/', {
//         method: "GET",
//     })
//         .then((response) => response.json())
//         .then((userData) => setUser(userData));
// }

// export const logoutbydelete = async (body) => {
//     console.log(body);
//     const res = await fetch(ENDPOINT_URL + "/user/", {
//         method: "DELETE",
//         headers: { "content-Type": "application/json" },
//         body: JSON.stringify(body)
//     });
//     // const jsonData = await res.json();
//     return res;
// }

// export const Login = async (body, setLogin) => {
//     console.log(body);

//     const res = await fetch(ENDPOINT_URL + "/user/", {
//         method: "POST",
//         headers: { "content-Type": "application/json" },
//         body: JSON.stringify(body)
//     });
//     const jsonData = await res.json();
//     console.log(jsonData)
//     return setLogin(jsonData);
// }

// update user by phone number
// export const updateUserByNo = async (body) => {
//     console.log(body);

//     const res = await fetch(ENDPOINT_URL + "/user/", {
//         method: "PUT",
//         headers: { "content-Type": "application/json" },
//         body: JSON.stringify(body)
//     });
//     const jsonData = await res.json();
//     console.log(jsonData)
//     return jsonData;
// }




// export const register = async (body, setUser) => {
//     console.log(body);
    
//     const res = await fetch("http://localhost:8080/user/register", {
//         method: "POST",
//         headers: { "content-Type": "application/json" },
//         body: JSON.stringify(body)
//     });
//     const jsonData = await res.json();
//     console.log(jsonData)
//     return setUser(jsonData);
// }


// Account close api 

export const getLastEntriesFE = async (body,setLastEntries) => {
    await fetch(ENDPOINT_URL + '/restservices/dateClose/all', {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((userData) => setLastEntries(userData));
}


// export const deleteAccountCloseFE = async (body) => {
//     console.log(body);
//     // body - line_name,date
//     const res = await fetch(ENDPOINT_URL + "/accountclose/", {
//         method: "DELETE",
//         headers: { "content-Type": "application/json" },
//         body: JSON.stringify(body)
//     });
//     // const jsonData = await res.json();
//     return res;
// }

export const createAccountCloseFE = async (body) => {
    console.log("create Body", body);
    const res = await fetch(ENDPOINT_URL + "/restservices/dateClose/create", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


// export const updateAccountCloseFE = async (body) => {
//     console.log(body);

//     const res = await fetch(ENDPOINT_URL + "/accountclose/", {
//         method: "PUT",
//         headers: { "content-Type": "application/json" },
//         body: JSON.stringify(body)
//     });
//     const jsonData = await res.json();
//     console.log(jsonData)
//     return jsonData;
// }



// loan 

export const getLoanByLineNotClosedFE = (setLoan) => {
    fetch(ENDPOINT_URL + '/loan/', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((loanData) => setLoan(loanData));
}

export const getLoanByLineAllFE = async (body, setLoan) => {
    await fetch(ENDPOINT_URL + '/restservices/loan/particular/date', {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((loanData) => setLoan(loanData));
}
// export const getLoanByLineAllFE = async (body, setLoan) => {
//     await fetch(`${ENDPOINT_URL}/restservices/loan/particular/date?lineId=${body.lineId}&date=${body.date}`, {
//         method: "GET",
//     })
//         .then((response) => response.json())
//         .then((lineData) => setLoan(lineData))
//         .catch((error) => {
//             console.error("Error fetching line data:", error);
//         });
// }

export const getLoansByLineClosedFE = (setLoan) => {
    fetch(ENDPOINT_URL + '/loan/closed', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((loanData) => setLoan(loanData));
}



export const getLoanByConditionFE = (body,setLoan) => {
    fetch(ENDPOINT_URL + '/loan/condition', {
        method: "GET",
        body: JSON.stringify(body)

    })
        .then((response) => response.json())
        .then((loanData) => setLoan(loanData));
}

export const getLoansByDateRange = (setLoan) => {
    fetch(ENDPOINT_URL + '/loan/date', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((loanData) => setLoan(loanData));
}


export const deleteLoan = async (body) => {
    console.log(body);
    const res = await fetch(ENDPOINT_URL + "/restservices/loan/delete", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const createLoanFE = async (body) => {
    console.log(body);
    const res = await fetch(ENDPOINT_URL + "/restservices/loan/create", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


export const updateBalanceFE = async (body) => {
    console.log(body);
    //loan_no,line_name,paid_amount
    const res = await fetch(ENDPOINT_URL + "/loan/updatebalance", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const updateLoanFE = async (body) => {
    console.log(body);
    //loan_no,line_name,paid_amount
    const res = await fetch(ENDPOINT_URL + "/loan/", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

//daily collection 
export const createDailyCollectionFE = async (body, setCollection) => {
    console.log(body);
    // id,amount_paid,date,line_name,loan_no
    const res = await fetch(ENDPOINT_URL + "/restservices/dailycollection/", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setCollection(jsonData);
}

export const getActiveLoansDirectEntry = async (body, setCollection) => {
    // line_name,date
    await fetch(ENDPOINT_URL + '/restservices/dailycollection/all/activeloan', {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((collectionData) => setCollection(collectionData));
}

export const getBillEntry = async (body, setCollection) => {
    // line_name,date
    await fetch(ENDPOINT_URL + '/restservices/dailycollection/billentry', {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((collectionData) => setCollection(collectionData));
}

export const getParticularCollection = async (body, setCollection) => {
    // line_name,date
    await fetch(ENDPOINT_URL + '/dailycollection/condition', {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((collectionData) => setCollection(collectionData));
}

export const getActiveLoansLedgerView = async (body, setCollection) => {
    // line_name,date
    await fetch(ENDPOINT_URL + '/restservices/dailycollection/all/activeloan/ledger', {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((collectionData) => setCollection(collectionData));
}

export const updateDailyCollection = async (body) => {
    console.log(body);
    //line_name,date,loan_no,amount_paid
    const res = await fetch(ENDPOINT_URL + "/restservices/dailycollection/update", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

// export const deleteDailyCollectionFE = async (body) => {
//     console.log(body);
//     // body - laon_no,line_name
//     const res = await fetch(ENDPOINT_URL + "/dailycollection/", {
//         method: "DELETE",
//         headers: { "content-Type": "application/json" },
//         body: JSON.stringify(body)
//     });
//     // const jsonData = await res.json();
//     return res;
// }


// line router 

export const createLineFE = async (body, setLine) => {
    console.log(body);
    // line_no,line_name
    const res = await fetch( ENDPOINT_URL +"/restservices/line/create", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setLine(jsonData);
}

export const updateLineFE = async (body) => {
    console.log(body);
    //line_boy_no,member_name,address,phone_no,phone_number,password
    const res = await fetch(ENDPOINT_URL + "/restservices/line/update", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}
// export const getLineFE = async (setLine) => {
//     // setLine([
//     //     {
//     //         "date": "2023-05-10",
//     //         "lineId": "Ln03",
//     //         "lineName": "Line 3"
//     //     },
//     //     {
//     //         "date": null,
//     //         "lineId": "Ln01",
//     //         "lineName": "Line 1"
//     //     }
//     // ])
//     await fetch('http://localhost:8080/restservices/line/all/dateClose', {
//         method: "GET",
//         mode: 'no-cors'
//     })
//         .then((response) => response.json())
//         .then((lineData) => setLine(lineData));
// }
export const getLineFE = async (setLines) => {
    try {
      const response = await fetch(ENDPOINT_URL + "/restservices/line/all/dateClose", {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch line data");
      }
  
      const lineData = await response.json();
      setLines(lineData)
    } catch (error) {
      console.error("Error fetching line data:", error);
      throw error;
    }
  };
  
  export const getAllLineFE = async (setLines) => {
    try {
      const response = await fetch(ENDPOINT_URL + "/restservices/line/all", {
        method: "GET",
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch line data");
      }
  
      const lineData = await response.json();
      setLines(lineData)
    } catch (error) {
      console.error("Error fetching line data:", error);
      throw error;
    }
  };
  

export const deleteLineFE = async (body) => {
    console.log(body);
    const res = await fetch(ENDPOINT_URL + "/restservices/line/delete", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

//  linemember

export const getAllLineMemberFE = async (setLineMember) => {

    await fetch(ENDPOINT_URL + '/restservices/lineMember/all', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((linememberData) => setLineMember(linememberData));
}



export const createLineMemberFE = async (body, setLineMember) => {
    console.log(body);
    // line_boy_no,name,address,phone_no,password
    const res = await fetch(ENDPOINT_URL + "/restservices/lineMember/create", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setLineMember(jsonData);
}


export const createLineMemberLoginFE = async (body, setLineMember) => {
    console.log(body);
    // phone_no,password
    const res = await fetch(ENDPOINT_URL + "/linemember/login", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setLineMember(jsonData);
}

export const updateLineMemberFE = async (body) => {
    console.log(body);
    //line_boy_no,member_name,address,phone_no,phone_number,password
    const res = await fetch(ENDPOINT_URL + "/linemember/", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}



export const deleteLineMember = async (body) => {
    console.log(body);

    const res = await fetch(ENDPOINT_URL + "/restservices/lineMember/delete", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const deleteLineMemberLogoutFE = async (body) => {

    // body - line_name
    const res = await fetch(ENDPOINT_URL + "/linemember/logout", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

// totalcollection


export const getTotalCollectionFE = (body, setTotalCollection) => {
    console.log(body)
    //line_name
    fetch(ENDPOINT_URL + '/totalcollection/', {
        method: "GET",
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((TotalCollectionData) => setTotalCollection(TotalCollectionData));
}

export const getTotalCollectionDateRangeFE = (body, setTotalCollection) => {
    console.log(body)
    //line_name,start_date,end_date
    fetch(ENDPOINT_URL + '/totalcollection/daterange', {
        method: "GET",
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((TotalCollectionData) => setTotalCollection(TotalCollectionData));
}

export const createTotalCollectionFE = async (body, setTotalCollection) => {
    console.log(body);
    // line_name,date
    const res = await fetch(ENDPOINT_URL + "/totalcollection/", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setTotalCollection(jsonData);
}


export const deleteTotalCollection = async (body) => {
    console.log(body);

    const res = await fetch(ENDPOINT_URL + "/totalcollection/:date", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const updateTotalCollectionFE = async (body) => {
    console.log(body);
    //
    const res = await fetch(ENDPOINT_URL + "/totalcollection/", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}




// thitam 

export const createThitamFE = async (body, setThitam) => {
    console.log(body);
    // date
    const res = await fetch(ENDPOINT_URL + "/thitam/", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setThitam(jsonData);
}

// export const getThitam= (body,setThitam)=>{
//     console.log(body)
//     //line_name,start_date,end_date
//     fetch(ENDPOINT_URL + '/thitam',{
//         method:"GET",
//         body: JSON.stringify(body)
//     })
//     .then((response)=> response.json())
//     .then((TotalCollectionData)=>setThitam(TotalCollectionData));
// }

// thitam/head 

export const createHeadFE = async (body, setHead) => {
    console.log(body);
    // head_name
    const res = await fetch(ENDPOINT_URL + "/thitam/head", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setHead(jsonData);
}

export const getHead = (body,setHead) => {
    console.log(body)
    //
    fetch(ENDPOINT_URL + '/thitam/head', {
        method: "GET",

    })
        .then((response) => response.json())
        .then((headData) => setHead(headData));
}

export const deleteHead = async (body) => {
    console.log(body);
    //head_name
    const res = await fetch(ENDPOINT_URL + "/thitam/head", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const updateHead = async (body) => {
    console.log(body);
    //head_name,new_head_name
    const res = await fetch(ENDPOINT_URL + "/thitam/head", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

