import React from "react";

import { Logo } from "../../assets/images"
import { RiSearch2Line } from "react-icons/ri";

const ProductsNavBar = () => {
    return (
        <div className="products_navbar">
            <div></div>
            <form className="input_container">
                <input type="text" className="home_input" placeholder="Search..." />
                <button className="search_icon_container">
                    <RiSearch2Line size="24" />
                </button>
            </form>
            <img src={Logo} alt="" />
        </div>
    );
};

export default ProductsNavBar;
