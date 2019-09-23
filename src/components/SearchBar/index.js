import React, { Fragment, useContext, useState, useEffect } from 'react';

import {SearchBarStyle} from './SearchBarStyle'

const SearchBar = props => {
  return (
    <SearchBarStyle>
        <input value={props.searchValue} onChange={(event) => props.setSearchValue(event.target.value)} placeholder="Sök.."></input>
        {props.searchValue !== '' && <img onClick={() => props.setSearchValue('') } src="/svg/cross.svg" alt="Clear search" />}
    </SearchBarStyle>
  );
};

export default SearchBar;
