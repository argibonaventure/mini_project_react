import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const VoucherPage = () => {
    return (
        <div>
            <Navbar/>
            <h1 className="font-bold text-3xl text-red-800 text-center mt-20">Let's Reedem Your Voucher !</h1>
            <div className="flex w-[300px] gap-4 justify-center m-auto mt-[100px]">
                <img src="src/assets/Diskon 1.jpg"/>
                <img src="src/assets/Diskon 2.jpg"/>
                <img src="src/assets/Diskon 3.jpg"/>
                <img src="src/assets/Diskon 4.jpg"/>
            </div>
            <Footer/>
        </div>
    )
}

export default VoucherPage