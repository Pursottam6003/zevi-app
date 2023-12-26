
import React from 'react'
import './home.css'

import { Logo, Search } from '../assets/images/'

const Home: React.FC = () => {

    return (
        <>
            <div className="home">
                <div className="home-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className='home-search-parent'>

                    <div className="home-search">
                        <input
                            className="home-search-input"
                            type="text"
                            placeholder="Search"
                        />
                        <div className="home-search-button">
                            <img src={Search} alt="" />
                        </div>

                    </div>

                </div>
            </div>
        </>

    )
}

export default Home;


/*
import React, { useState } from "react";
import { typeOfData } from "../assets/data/type";
import { Logo, Search } from "../assets/images/";
// import ViewModal from "..";

interface Props {
    dataList: typeOfData[];
    handleListClick: (name: string) => void;
    inputSearch: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleEnterPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleSearch: () => void;
    searchList: string[];
    setData: any;
}

const Home: React.FC<Props> = (props) => {
    const {
        dataList,
        handleListClick,
        inputSearch,
        handleInputChange,
        handleEnterPress,
        handleSearch,
        searchList,
        setData,
    } = props;
    const [isInputFocused, setInputFocus] = useState<boolean>(false);
    const [showList, setShowList] = useState<boolean>(false);

    const handleInputFocus = () => {
        setInputFocus(true);
        setShowList(true);
    };

    const handleInputBlur = () => {
        setShowList(false);
        setInputFocus(false);
    };

    const renderSearchList = () => {
        if (searchList && inputSearch.length > 0 && showList) {
            return (
                <div className="home-search-list">
                    {searchList.slice(0, 20).map((val) => (
                        <div
                            className="home-search-list-item"
                            key={val}
                            onClick={() => handleListClick(val)}
                        >
                            {val}
                        </div>
                    ))}
                </div>
            );
        }
        return null;
    };

    const renderTrendItems = () => {
        return dataList
            .sort((a, b) => b.trendingPercentage - a.trendingPercentage)
            .slice(0, 5)
            .map((val) => (
                <TrendItem key={val.name} val={val} dataList={dataList} setData={setData} />
            ));
    };

    const renderSuggestionItems = () => {
        return dataList
            .sort((a, b) => b.suggestionPercentage - a.suggestionPercentage)
            .slice(0, 5)
            .map((val) => (
                <div
                    className="home-list-suggestion-list-item"
                    key={val.name}
                    onClick={() => handleListClick(val.name)}
                >
                    <div className="home-list-suggestion-list-item-name">{val.name}</div>
                </div>
            ));
    };

*/