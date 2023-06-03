// user api 
let ENDPOINT_URL = 'http://localhost:8080'
export const logout = (setUser) => {
    fetch('http://localhost:6001/user/', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((userData) => setUser(userData));
}

export const logoutbydelete = async (body) => {
    console.log(body);
    const res = await fetch("http://localhost:6001/user/", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const Login = async (body, setLogin) => {
    console.log(body);

    const res = await fetch("http://localhost:6001/user/", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setLogin(jsonData);
}

// update user by phone number
export const updateUserByNo = async (body) => {
    console.log(body);

    const res = await fetch("http://localhost:6001/user/", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}




export const register = async (body, setUser) => {
    console.log(body);
    
    const res = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setUser(jsonData);
}


// Account close api 

export const getLastEntriesFE = (body,setLastEntries) => {
    fetch('http://localhost:6001/accountclose/', {
        method: "GET",
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((userData) => setLastEntries(userData));
}


export const deleteAccountCloseFE = async (body) => {
    console.log(body);
    // body - line_name,date
    const res = await fetch("http://localhost:6001/accountclose/", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const createAccountCloseFE = async (body) => {
    console.log(body);
    // line_name,date 
    const res = await fetch("http://localhost:6001/accountclose/", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}


export const updateAccountCloseFE = async (body) => {
    console.log(body);

    const res = await fetch("http://localhost:6001/accountclose/", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}



// loan 

export const getLoanByLineNotClosedFE = (setLoan) => {
    fetch('http://localhost:6001/loan/', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((loanData) => setLoan(loanData));
}

export const getLoanByLineAllFE = (setLoan) => {
    fetch('http://localhost:6001/loan/all', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((loanData) => setLoan(loanData));
}
export const getLoansByLineClosedFE = (setLoan) => {
    fetch('http://localhost:6001/loan/closed', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((loanData) => setLoan(loanData));
}



export const getLoanByConditionFE = (body,setLoan) => {
    fetch('http://localhost:6001/loan/condition', {
        method: "GET",
        body: JSON.stringify(body)

    })
        .then((response) => response.json())
        .then((loanData) => setLoan(loanData));
}

export const getLoansByDateRange = (setLoan) => {
    fetch('http://localhost:6001/loan/date', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((loanData) => setLoan(loanData));
}


export const deleteLoan = async (body) => {
    console.log(body);
    // body - laon_no,line_name
    const res = await fetch("http://localhost:6001/loan/", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const createLoanFE = async (body) => {
    console.log(body);
    // loan_no,user_no,name,address,phone_no,order_no,date,created_on,updated_on,loan_amount,balance,pay_amount,
    //seetu_amount,interest,commission_amount,app_loan_close_date,loan_closed_date,excess,line_name
    const res = await fetch("http://localhost:6001/loan/", {
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
    const res = await fetch("http://localhost:6001/loan/updatebalance", {
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
    const res = await fetch("http://localhost:6001/loan/", {
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
    const res = await fetch("http://localhost:6001/dailycollection/", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return setCollection(jsonData);
}

export const getAllDailyCollectionFE = (setCollection) => {
    // line_name,date
    fetch('http://localhost:6001/dailycollection/', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((collectionData) => setCollection(collectionData));
}

export const getAllDailyCollectionByConditionFE = (body, setIndividualReports) => {
    // line_name,date
    fetch('http://localhost:6001/dailycollection/condition', {
        method: "GET",
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((collectionData) => setIndividualReports(collectionData));
}


export const updateDailyCollectionFE = async (body) => {
    console.log(body);
    //line_name,date,loan_no,amount_paid
    const res = await fetch("http://localhost:6001/dailycollection/", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

export const deleteDailyCollectionFE = async (body) => {
    console.log(body);
    // body - laon_no,line_name
    const res = await fetch("http://localhost:6001/dailycollection/", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}


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

export const getAllLineMemberFE = (setLineMember) => {

    fetch('http://localhost:6001/linemember/', {
        method: "GET",
    })
        .then((response) => response.json())
        .then((linememberData) => setLineMember(linememberData));
}


export const getLineMemberByPhoneNumFE = (body, setLineMember) => {
    fetch('http://localhost:6001/linemember/phone', {
        method: "GET",
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((linememberData) => setLineMember(linememberData));
}


export const createLineMemberFE = async (body, setLineMember) => {
    console.log(body);
    // line_boy_no,name,address,phone_no,password
    const res = await fetch("http://localhost:6001/linemember/", {
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
    const res = await fetch("http://localhost:6001/linemember/login", {
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
    const res = await fetch("http://localhost:6001/linemember/", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}



export const deleteLineMemberByEmailFE = async (body) => {
    console.log(body);

    const res = await fetch("http://localhost:6001/linemember/", {
        method: "DELETE",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    // const jsonData = await res.json();
    return res;
}

export const deleteLineMemberLogoutFE = async (body) => {

    // body - line_name
    const res = await fetch("http://localhost:6001/linemember/logout", {
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
    fetch('http://localhost:6001/totalcollection/', {
        method: "GET",
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((TotalCollectionData) => setTotalCollection(TotalCollectionData));
}

export const getTotalCollectionDateRangeFE = (body, setTotalCollection) => {
    console.log(body)
    //line_name,start_date,end_date
    fetch('http://localhost:6001/totalcollection/daterange', {
        method: "GET",
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((TotalCollectionData) => setTotalCollection(TotalCollectionData));
}

export const createTotalCollectionFE = async (body, setTotalCollection) => {
    console.log(body);
    // line_name,date
    const res = await fetch("http://localhost:6001/totalcollection/", {
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

    const res = await fetch("http://localhost:6001/totalcollection/:date", {
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
    const res = await fetch("http://localhost:6001/totalcollection/", {
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
    const res = await fetch("http://localhost:6001/thitam/", {
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
//     fetch('http://localhost:6001/thitam',{
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
    const res = await fetch("http://localhost:6001/thitam/head", {
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
    fetch('http://localhost:6001/thitam/head', {
        method: "GET",

    })
        .then((response) => response.json())
        .then((headData) => setHead(headData));
}

export const deleteHead = async (body) => {
    console.log(body);
    //head_name
    const res = await fetch("http://localhost:6001/thitam/head", {
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
    const res = await fetch("http://localhost:6001/thitam/head", {
        method: "PUT",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    const jsonData = await res.json();
    console.log(jsonData)
    return jsonData;
}

