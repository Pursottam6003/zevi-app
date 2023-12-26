import React from "react";
import { Logo, Search } from "../assets/images";

import "./products.css";
const Products: React.FC = () => {
    return (
        <>
            <div className="products">
                <div className="products-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="products-search-parent">
                    <div className="products-search">
                        <input
                            className="products-search-input"
                            type="text"
                            placeholder="Search"
                        />
                        <div className="products-search-button">
                            <img src={Search} alt="" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="parent-grid-container">
                <div className="filter grid-item">
                    <div className="brand">
                        <h2>Brand</h2>
                        <div className="brand-list">
                            <div className="brand-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Brand 1</label>
                            </div>
                            <div className="brand-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Brand 2</label>
                            </div>
                            <div className="brand-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Brand 3</label>
                            </div>
                            <div className="brand-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Brand 4</label>
                            </div>
                        </div>
                    </div>
                    <div className="price">
                        <h2>Price</h2>
                        <div className="price-list">
                            <div className="price-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Price 1</label>
                            </div>
                            <div className="price-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Price 2</label>
                            </div>
                            <div className="price-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Price 3</label>
                            </div>
                            <div className="price-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Price 4</label>
                            </div>
                        </div>
                    </div>
                    <div className="rating">
                        <h2>Rating</h2>
                        <div className="rating-list">
                            <div className="rating-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Rating 1</label>
                            </div>
                            <div className="rating-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Rating 2</label>
                            </div>
                            <div className="rating-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Rating 3</label>
                            </div>
                            <div className="rating-list-item">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Rating 4</label>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="products-list-item grid-item">
                    <div className="products-list-item-image">
                        <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <div className="products-list-item-title">
                        <h2>Product Name</h2>
                    </div>
                    <div className="products-list-item-price">
                        <h2>Price</h2>
                    </div>
                    <div className="products-list-item-button">
                        <button>Add to Cart</button>
                    </div>
                </div>


                <div className="products-list-item grid-item">
                    <div className="products-list-item-image">
                        <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <div className="products-list-item-title">
                        <h2>Product Name</h2>
                    </div>
                    <div className="products-list-item-price">
                        <h2>Price</h2>
                    </div>
                    <div className="products-list-item-button">
                        <button>Add to Cart</button>
                    </div>
                </div>

                <div className="products-list-item grid-item">
                    <div className="products-list-item-image">
                        <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <div className="products-list-item-title">
                        <h2>Product Name</h2>
                    </div>
                    <div className="products-list-item-price">
                        <h2>Price</h2>
                    </div>
                    <div className="products-list-item-button">
                        <button>Add to Cart</button>
                    </div>
                </div>


                <div className="products-list-item grid-item">
                    <div className="products-list-item-image">
                        <img src="https://picsum.photos/200/300" alt="" />
                    </div>
                    <div className="products-list-item-title">
                        <h2>Product Name</h2>
                    </div>
                    <div className="products-list-item-price">
                        <h2>Price</h2>
                    </div>
                    <div className="products-list-item-button">
                        <button>Add to Cart</button>
                    </div>
                </div>


            </div>


        </>
    )
}
export default Products;