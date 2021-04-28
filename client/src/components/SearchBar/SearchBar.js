import React from "react";

import { SearchInput } from "../"

import mercadoLogo from "url:../../assets/images/Logo_ML.png";
import mercadoLogo2x from "url:../../assets/images/Logo_ML@2x.png.png.png"

export const SearchBar = () => {
    return (
        <nav className="searchBar">
            <img
                className="logo"
                srcSet={`${mercadoLogo} 750w, ${mercadoLogo2x} 1440w`}
                sizes="(min-width: 18px) 1440px, 100vw"
                src={`${mercadoLogo}`}
                alt="logo"
            />
            <SearchInput />
        </nav>
    )
}