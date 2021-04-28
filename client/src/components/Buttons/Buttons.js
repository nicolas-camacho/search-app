import React from "react";

import searchIcon from "url:../../assets/images/ic_Search.png"
import searchIcon2x from "url:../../assets/images/ic_Search@2x.png.png.png"

export const SearchButton = () => {
    return (
        <button aria-label="search" className="searchButton">
            <img
                className="searchButton__logo"
                srcSet={`${searchIcon} 750w, ${searchIcon2x} 1440w`}
                sizes="(min-width: 18px) 1440px, 100vw"
                src={`${searchIcon}`}
                alt="logo"
            />
        </button>
    )
}