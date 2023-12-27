import React from "react";

import { Logo } from "../../../assets/images"
import { RiSearch2Line } from "react-icons/ri";
import styles from "./ProductsNav.module.scss"

const ProductsNavBar = () => {
    return (
        <div className={styles.products_navbar}>
            <div></div>
            <form className={styles.input_container}>
                <input type="text" className={styles.home_input} placeholder="Search..." />
                <button className={styles.search_icon_container}>
                    <RiSearch2Line size="24" />
                </button>
            </form>
        </div>
    );
};

export default ProductsNavBar;
