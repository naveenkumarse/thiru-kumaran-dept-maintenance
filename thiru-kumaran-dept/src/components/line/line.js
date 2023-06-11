import React from "react";
import { Link } from "react-router-dom";
import calendar from '../../assets/line/calendar.png';
import money from '../../assets/line/money.png';
import report from '../../assets/line/report.png';
import signing from '../../assets/line/signing.png';

import './line.css';


const categories = [
    {
        image: money,
        name: 'category1',
        path: '/collection',
        title: "Collection",
        description: "வசூல்",
    },
    {
        image: signing,
        name: 'category2',
        path: '/loan',
        title: "Loan",
        description: "கடன்",
    },
    {
        image: calendar,
        name: 'category3',
        path: '/dateclose',
        title: "Date Close",
        description: "கணக்கு மூடல்",
    },
    {
        image: report,
        name: 'category4',
        path: '/report',
        title: "Report",
        description: "விவர அறிக்கை",
    },
];
const Line = () => {
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

export default Line;

