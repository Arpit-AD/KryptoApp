import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png"

const Footer = () => {

    return(
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
                    <div className="h-[1px] w-full bg-gray-400 my-2" />
            
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4 ">
                <div className="flex flex-[0.5] justify-center items-center">
                    <img src={logo} alt="logo" className="w-32" />
                </div>
                <div className="flex flex-1 justify-evenly flex-wrap sm:mt-0 mt-5 w-full">
                    <Link to="home" className="text-white text-base text-center mx-2 cursor-pointer">Home</Link>
                    <Link to="cryptocurrencies" className="text-white text-base text-center mx-2 cursor-pointer">Cryptocurrencies</Link>
                    <Link to="exchanges" className="text-white text-base text-center mx-2 cursor-pointer">Exchanges</Link>
                    <Link to="news" className="text-white text-base text-center mx-2 cursor-pointer">News</Link>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col mt-5">
                <p className="text-white text-sm text-center">ALL RIGHTS RESERVED</p>
                <p className="text-white text-sm text-center">About me <a href="https://www.linkedin.com/in/arpit-das-9210a01a5/" target="_blank">@arpitAD</a> </p>
            </div>
        </div>
    );

}

export default Footer