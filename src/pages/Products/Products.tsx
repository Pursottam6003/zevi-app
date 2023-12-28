import React, { useState, useEffect } from "react";
import ProductsNavBar from "../../components/Products/product-nav/ProductsNavbar";

import { BiChevronDown, BiChevronUp } from "react-icons/bi";

import ProductsResults from "../../components/Products/product-results/ProductsResults";
import { RatingBox } from "../../assets/Icons/RatingBox";

import { ProductType, fetchProducts } from "../../assets/data/FakerData";
import styles from "./Products.module.scss";

interface MultipleFilterType {
    brand: boolean[];
    rating: boolean[];
    price: boolean[];
}

const Products = () => {
    const [showBrandFilter, setShowBrandFilter] = useState(false);
    const [showPriceFilter, setShowPriceFilter] = useState(false);
    const [showRatingFilter, setShowRatingFilter] = useState(false);
    const [products, setProducts] = useState<ProductType[]>(fetchProducts());
    const [multipleFilters, setMultipleFilters] = useState<MultipleFilterType>({
        brand: [false, false],
        price: [false, false],
        rating: [false, false, false, false, false],
    });

    const [tempProducts, setTempProducts] = useState<ProductType[]>(
        fetchProducts()
    );

    useEffect(() => {
        setProducts(fetchProducts());
        setTempProducts(fetchProducts());
    }, []);

    useEffect(() => {
        let filteredData: ProductType[] = [...tempProducts];

        if (multipleFilters.brand.includes(true)) {
            filteredData = filteredData.filter((product) => {
                return multipleFilters.brand.some((filter, index) => {
                    if (filter && product.productName.includes(product.productBrand[index])) {
                        return true;
                    }
                    return false;
                });
            });
        }

        if (multipleFilters.rating.includes(true)) {
            filteredData = filteredData.filter((product) => {
                return multipleFilters.rating.some((filter, index) => {
                    if (filter && product.productRating === index + 1) {
                        return true;
                    }
                    return false;
                });
            });
        }

        if (multipleFilters.price.includes(true)) {
            filteredData = filteredData.filter((product) => {
                if (
                    (multipleFilters.price[0] && product.productDisPrice < 500) ||
                    (multipleFilters.price[1] &&
                        product.productDisPrice >= 1000 &&
                        product.productDisPrice <= 3000)
                ) {
                    return true;
                }
                return false;
            });
        }

        setProducts(filteredData);
    }, [multipleFilters, tempProducts]);

    console.log(products)
    console.log(tempProducts)
    return (
        <div className={styles.products_page}>
            <ProductsNavBar products={products} setFilteredProducts={setProducts} />
            <h2>Search Results</h2>
            <div className={styles.filter_and_result_container}>
                <div className={styles.filter_container}>
                    <div className="">
                        <div
                            onClick={() => setShowBrandFilter((prev) => !prev)}
                            className={styles.dropdown_container}
                        >
                            <div className={styles.filter_title}>BRAND</div>
                            {showBrandFilter ? (
                                <BiChevronUp size={24} />
                            ) : (
                                <BiChevronDown size={24} />
                            )}
                        </div>
                        {showBrandFilter && (
                            <div>
                                <div className={styles.input_label_container}>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={multipleFilters.brand[0]}
                                        onChange={() => {
                                            const updatedFilter = [...multipleFilters.brand];
                                            updatedFilter[0] = !updatedFilter[0];
                                            setMultipleFilters({
                                                ...multipleFilters,
                                                brand: updatedFilter,
                                            });
                                        }}
                                    />
                                    <label>Morar and Sons</label>
                                </div>
                                <div className={styles.input_label_container}>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={multipleFilters.brand[1]}
                                        onChange={() => {
                                            const updatedFilter = [...multipleFilters.brand];
                                            updatedFilter[1] = !updatedFilter[1];
                                            setMultipleFilters({
                                                ...multipleFilters,
                                                brand: updatedFilter,
                                            });
                                        }}
                                    />
                                    <label>Quitzon LLC</label>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={styles.filter_divider}></div>
                    <div className="">
                        <div
                            onClick={() => setShowPriceFilter((prev) => !prev)}
                            className={styles.dropdown_container}
                        >
                            <div className={styles.filter_title}>PRICE RANGE</div>
                            {showPriceFilter ? (
                                <BiChevronUp size={24} />
                            ) : (
                                <BiChevronDown size={24} />
                            )}
                        </div>
                        {showPriceFilter && (
                            <div>
                                <div className={styles.input_label_container}>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={multipleFilters.price[0]}
                                        onChange={() => {
                                            const updatedFilter = [...multipleFilters.price];
                                            updatedFilter[0] = !updatedFilter[0];
                                            setMultipleFilters({
                                                ...multipleFilters,
                                                price: updatedFilter,
                                            });
                                        }}
                                    />
                                    <label>Under 500</label>
                                </div>
                                <div className={styles.input_label_container}>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={multipleFilters.price[1]}
                                        onChange={() => {
                                            const updatedFilter = [...multipleFilters.price];
                                            updatedFilter[1] = !updatedFilter[1];
                                            setMultipleFilters({
                                                ...multipleFilters,
                                                price: updatedFilter,
                                            });
                                        }}
                                    />
                                    <label>1000 to 3000</label>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="filter_divider"></div>
                    <div className="">
                        <div
                            onClick={() => setShowRatingFilter((prev) => !prev)}
                            className={styles.dropdown_container}
                        >
                            <div className={styles.filter_title}>RATINGS</div>
                            {showRatingFilter ? (
                                <BiChevronUp size={24} />
                            ) : (
                                <BiChevronDown size={24} />
                            )}
                        </div>
                        {showRatingFilter && (
                            <div>
                                <div className={styles.input_label_container}>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={multipleFilters.rating[4]}
                                        onChange={() => {
                                            const updatedFilter = [...multipleFilters.rating];
                                            updatedFilter[4] = !updatedFilter[4];
                                            setMultipleFilters({
                                                ...multipleFilters,
                                                rating: updatedFilter,
                                            });
                                        }}
                                    />
                                    <label>{RatingBox(5)}</label>
                                </div>
                                <div className={styles.input_label_container}>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={multipleFilters.rating[3]}
                                        onChange={() => {
                                            const updatedFilter = [...multipleFilters.rating];
                                            updatedFilter[3] = !updatedFilter[3];
                                            setMultipleFilters({
                                                ...multipleFilters,
                                                rating: updatedFilter,
                                            });
                                        }}
                                    />
                                    <label>{RatingBox(4)}</label>
                                </div>
                                <div className={styles.input_label_container}>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={multipleFilters.rating[2]}
                                        onChange={() => {
                                            const updatedFilter = [...multipleFilters.rating];
                                            updatedFilter[2] = !updatedFilter[2];
                                            setMultipleFilters({
                                                ...multipleFilters,
                                                rating: updatedFilter,
                                            });
                                        }}
                                    />
                                    <label>{RatingBox(3)}</label>
                                </div>
                                <div className={styles.input_label_container}>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={multipleFilters.rating[1]}
                                        onChange={() => {
                                            const updatedFilter = [...multipleFilters.rating];
                                            updatedFilter[1] = !updatedFilter[1];
                                            setMultipleFilters({
                                                ...multipleFilters,
                                                rating: updatedFilter,
                                            });
                                        }}
                                    />
                                    <label>{RatingBox(2)}</label>
                                </div>
                                <div className={styles.input_label_container}>
                                    <input
                                        type="checkbox"
                                        name=""
                                        id=""
                                        checked={multipleFilters.rating[0]}
                                        onChange={() => {
                                            const updatedFilter = [...multipleFilters.rating];
                                            updatedFilter[0] = !updatedFilter[0];
                                            setMultipleFilters({
                                                ...multipleFilters,
                                                rating: updatedFilter,
                                            });
                                        }}
                                    />
                                    <label>{RatingBox(1)}</label>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <ProductsResults products={products} />
            </div>
        </div>
    );
};

export default Products;