import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RiSearch2Line } from "react-icons/ri";

import home_bg from "../../assets/images/background_home.jpg";
import LogoContainer from "../../components/LogoContainer/LogoContainer";
import {
    LatestTrendType,
    SuggestionType,
    fetchLatestTrendData,
    fetchSuggestionData,
} from "../../assets/data/FakerData";

import styles from "./Home.module.scss"

const Home = () => {
    const [showSuggestionBox, setShowSuggestionBox] = useState(false);
    const [latestTrendsData, setLatestTrendsData] = useState<LatestTrendType[]>();
    const [suggestionData, setSuggestionData] = useState<SuggestionType[]>();

    const navigate = useNavigate();

    const getBoxProducts = () => {
        setShowSuggestionBox((prev) => !prev);
        setLatestTrendsData(fetchLatestTrendData());
        setSuggestionData(fetchSuggestionData());
    };

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        navigate("/products");
    };

    const navigateToProductsPage = () => {
        navigate("/products");
    };

    return (
        <div style={{ backgroundImage: `url(${home_bg})` }} className={styles.home}>
            <LogoContainer />
            <div className={styles.home_content}>
                <form className={styles.input_container} onSubmit={(e) => onSubmitHandler(e)}>
                    <input
                        onClick={() => getBoxProducts()}
                        type="text"
                        className={styles.home_input}
                        placeholder="Search..."
                    />
                    <button className={styles.search_icon_container}>
                        <RiSearch2Line size="24" />
                    </button>
                </form>
                {showSuggestionBox && (
                    <div className={styles.latest_trend_and_suggestion_box}>
                        <div className={styles.latest_trend_box}>
                            <div className={styles.category_title}>Latest Trends</div>
                            <div className={styles.latest_trend_products}>
                                {latestTrendsData?.map((product, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className={styles.latest_trend_product}
                                            onClick={navigateToProductsPage}
                                        >
                                            <img src={product.productImg} alt="" />
                                            <div>{product.productName}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div>
                            <div className={styles.category_title}>Popular Suggestion</div>
                            <div>
                                {suggestionData?.map((product, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className={styles.suggestion_product}
                                            onClick={navigateToProductsPage}
                                        >
                                            {product.productName}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
