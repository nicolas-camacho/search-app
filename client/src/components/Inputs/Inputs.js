import React from "react";

import { SearchButton } from "../"

export const SearchInput = () => {
    return (
        <div className="searchInputContainer">
            <input className="searchInput" placeholder="Nunca dejes de buscar">
            </input>
            <SearchButton />   
        </div>
    )
}