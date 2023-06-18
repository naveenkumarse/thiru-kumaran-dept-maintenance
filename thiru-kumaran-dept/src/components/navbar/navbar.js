import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"

function Navbar() {  
    let date = localStorage.getItem('date');
    let line_name = localStorage.getItem("line_name")
    return (
        <>
            <div class="flex flex-wrap place-items-center ">
                <section class="relative mx-auto">

                    <nav class="flex justify-between bg-gray-900 text-white w-screen">
                        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
                            <a class="text-3xl font-bold font-heading flex" href="#">
                            <img class="h-12" src={logo} alt="logo"></img> 
                                    Thiru-Kumaran-Finance
                            </a>

                            <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                              <Link to='/home'>  <li><a class="hover:text-gray-200" href="#">Home</a></li> </Link>
                              <Link to='/lineboy'>  <li><a class="hover:text-gray-200" href="#">Line Boy</a></li> </Link> 
                              <Link to='/linecreate'> <li><a class="hover:text-gray-200" href="#">Line create</a></li></Link> 
                              <Link to='/thitam'> <li>Thitam</li></Link> 
                            
                              <p>Date : {date}</p>
                              {line_name!=null?<p>Line name : {line_name} </p>:<></>}
                              <li ><Link onClick={()=>localStorage.setItem("phoneNo",' ')}>Log out</Link></li>
                            </ul>

                            <div class=" xl:flex items-center space-x-5 items-center md:ml-5 sm:ml-5">
                              <Link to='/admin'>

                                <a class="flex items-center hover:text-gray-200" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </a>
                                </Link> 
                            </div>
                        </div>
                        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </a>
                    </nav>
                </section>
            </div>

        
        </>

    );
}

export default Navbar;
