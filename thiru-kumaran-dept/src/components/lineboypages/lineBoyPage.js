import React from "react";
import { Link } from "react-router-dom";
import calendar from '../../assets/line/calendar.png';
import money from '../../assets/line/money.png';
import signing from '../../assets/line/signing.png';
import cost from '../../assets/line/cost.png';
import close from '../../assets/report/close.png';
import immigration from '../../assets/report/immigration.png';
import order from '../../assets/report/order.png';
import './lineBoyPage.css';


const categories = [
    {
        image: money,
        name: 'category1',
        path: '/directentry',
        title: "directentry",
        description: "Grab your Cards",
    },
    {
        image: signing,
        name: 'category2',
        path: '/lineboyloan',
        title: "Loan",
        description: "Write Print Play",
    },
    {
        image: calendar,
        name: 'category3',
        path: '/lineboydateclose',
        title: "Date Close",
        description: "Beautiful Anime",
    },
    {
        image: cost,
        name: 'category4',
        path: '/todaylist',
        title: "Today List",
        description: "Protect with this",
    },
    {
        image: immigration,
        name: 'category4',
        path: '/lineboyindividualreport',
        title: "Individual report",
        description: "Protect with this",
    },
    {
        image: close,
        name: 'category4',
        path: '/lineboyclosedparty',
        title: "Closed party",
        description: "Protect with this",
    },
    {
        image: order,
        name: 'category4',
        path: '/lineboyordernumber',
        title: "Order Number",
        description: "Protect with this",
    },
];
const LineBoyPages = () => {
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

                    <div className="title-container mt-14">
                        <h2></h2>
                    </div>
                    <div style={{ textDecoration: "none" }} className="categories">
                        {links}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LineBoyPages;

