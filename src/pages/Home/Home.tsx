import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiSearch2Line } from "react-icons/ri";
import Searchbox from "../../components/Searchbox/Searchbox";

import {
  LatestTrendType,
  SuggestionType,
  fetchLatestTrendData,
  fetchSuggestionData,
} from "../../assets/data/FakerData";

import styles from "./Home.module.scss";
import SearchSuggestions from "../../components/SearchSuggestions/SearchSuggestions";

const Home = () => {
  const [showSuggestionBox, setShowSuggestionBox] = useState(false);
  const [latestTrendsData, setLatestTrendsData] = useState<LatestTrendType[]>();
  const [suggestionData, setSuggestionData] = useState<SuggestionType[]>();
  const [isOpen, setIsOpen] = useState(false);

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
    <div className={`page ${styles.home}`}>
      <Searchbox
        handleClick={() => {
          setIsOpen(true);
          getBoxProducts();
        }}
        onSubmitHandler={onSubmitHandler}
      />
      <SearchSuggestions isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2>Latest Trends</h2>
        <div className={styles.latest_trend_products}>
          {latestTrendsData?.map((product, i) => (
            <div
              key={i}
              className={styles.latest_trend_product}
              onClick={navigateToProductsPage}
            >
              <img src={product.productImg} alt="" />
              <div>{product.productName}</div>
            </div>
          ))}
        </div>

        <h2>Popular Suggestions</h2>
        <div>
          {suggestionData?.map((product, i) => (
            <div
              key={i}
              className={styles.suggestion_product}
              onClick={navigateToProductsPage}
            >
              {product.productName}
            </div>
          ))}
        </div>
      </SearchSuggestions>
    </div>
  );
};

export default Home;
