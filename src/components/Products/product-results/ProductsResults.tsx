import React from "react";

import { ProductType } from "../../../assets/data/FakerData";
import ProductsItem from "../product-items/ProductsItem";
import styles from "./ProductResults.module.scss"
import { BsCartXFill } from "react-icons/bs";

interface ProductsInterface {
    products: ProductType[];
}

const ProductsResults = ({ products }: ProductsInterface) => {
    return (
        <>
            {products.length <= 0 ? (
                <>
                    <div className={styles.no_results}>
                        <div>
                            <BsCartXFill size="50" />
                        </div>
                        No Results Found !!!</div>
                </>
            ) : (
                <div className={styles.product_results_container}>
                    {products.map((product, i) => {
                        return <ProductsItem key={i} product={product} />;
                    })}
                </div>
            )}
        </>
    );
};

export default ProductsResults;
