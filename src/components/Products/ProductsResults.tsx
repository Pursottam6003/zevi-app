import React from "react";
import "./ProductsResults.scss";

import { ProductType } from "../../assets/data/FakerData";
import ProductsItem from "./ProductsItem";

interface ProductsInterface {
    products: ProductType[];
}

const ProductsResults = ({ products }: ProductsInterface) => {
    return (
        <>
            {products.length <= 0 ? (
                <div className="no_results">No Results Found !!!</div>
            ) : (
                <div className="product_results_container">
                    {products.map((product, i) => {
                        return <ProductsItem key={i} product={product} />;
                    })}
                </div>
            )}
        </>
    );
};

export default ProductsResults;
