import React from "react";
import { Link } from "react-router-dom";
import bill from '../../assets/report/bill.png';
import bulkbuy from '../../assets/report/bulk-buying.png';
import businessman from '../../assets/report/businessman.png';
import close from '../../assets/report/close.png';
import immigration from '../../assets/report/immigration.png';
import ledger from '../../assets/report/ledger.png';
import news from '../../assets/report/news.png';
import past from '../../assets/report/past.png';
import pay from '../../assets/report/pay.png';
import termloan from '../../assets/report/term-loan.png';
import transfer from '../../assets/report/transfer.png';
import order from '../../assets/report/order.png';
import '../line/line.css';


const categories = [
    {
        image: immigration,
        name: 'category1',
        path: '/individualreport',
        title: "Individual Report",
        description: "Grab your Cards",
    },
    {
        image: ledger,
        name: 'category2',
        path: '/totalledger',
        title: "Total Ledger",
        description: "Write Print Play",
    },
    {
        image: bill,
        name: 'category3',
        path: '/monthlybill',
        title: "Monthly Bill",
        description: "Beautiful Anime",
    },
    {
        image: past,
        name: 'category4',
        path: '/pastdatebill',
        title: "Past Date Bill",
        description: "Protect with this",
    },
    {
        image: termloan,
        name: 'category1',
        path: '/monthlyloan',
        title: "Monthly Loan",
        description: "Grab your Cards",
    },
    {
        image: close,
        name: 'category2',
        path: '/closedparty',
        title: "Closed Party",
        description: "Write Print Play",
    },
    {
        image: news,
        name: 'category3',
        path: '/billnotpaid',
        title: "Bill Not Paid",
        description: "Beautiful Anime",
    },
    {
        image: businessman,
        name: 'category4',
        path: '/userpastloanlist',
        title: "User Past Loan List",
        description: "Protect with this",
    },
    {
        image: pay,
        name: 'category1',
        path: '/nipparty',
        title: "NIP Party",
        description: "Grab your Cards",
    },
    {
        image: transfer,
        name: 'category2',
        path: '/excessamountpaid',
        title: "Excess Amount Paid",
        description: "Write Print Play",
    },
    {
        image: ledger,
        name: 'category3',
        path: '/ledgerview',
        title: "Ledger View",
        description: "Beautiful Anime",
    },
    {
        image: bulkbuy,
        name: 'category4',
        path: '/bulkpaid',
        title: "Bulk Paid",
        description: "Protect with this",
    },
    {
        image: pay,
        name: 'category3',
        path: '/continuouslynotpaid',
        title: "Continuously Not Paid",
        description: "Beautiful Anime",
    },
    {
        image: order,
        name: 'category4',
        path: '/ordernumber',
        title: "Order Number",
        description: "Protect with this",
    },
   

];
const Report = () => {
    const links = categories.map(({ image, name, title, description, path }, index) => (
        <Link style={{ textDecoration: "none" }} key={name} to={path}>
            <div className="category" key={index}>
                <img src={image} alt="Category" className="object-fit h-20 w-20" />
                <h4 >{title}</h4>
                <p>{description}</p>
            </div>
        </Link>
    ));
    return (
        <div>
            <div className="categories-container mx-3 py-3 ">
                <div className="container">
                    {/* <div className="title-container">
                        <h2>Report</h2>
                    </div> */}
                    <div style={{ textDecoration: "none" }} className="categories">
                        {links}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Report;

