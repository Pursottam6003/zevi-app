import React, { useState, useEffect } from "react";

import styles from "./ProductsNav.module.scss";

import { ProductType } from "../../../assets/data/FakerData";


interface ProductsNavBarProps {
    products: ProductType[];
    setFilteredProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

const ProductsNavBar: React.FC<ProductsNavBarProps> = ({
    products,
    setFilteredProducts,
}) => {
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const query = event.target.value;
        setSearchQuery(query);

        const filteredProducts = products.filter((product) =>
            product.productName.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredProducts(filteredProducts);
    };

    return (
        <div className={styles.searchBox}>
            <label htmlFor="q">
                <input
                    name="q"
                    type="text"
                    placeholder="Search"
                    autoComplete="off"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </label>
        </div>
    );
};

export default ProductsNavBar;