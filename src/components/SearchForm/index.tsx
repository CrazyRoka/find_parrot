import * as React from 'react';
import './index.scss';

const SearchForm = () =>
    <form className="search-form">
        <select className="select">
            <option value="category">Category</option>
            <option value="name">Name</option>
        </select>
        <div className="shape" />
        <input className="input" />
        <button className="search-button">START SEARCHING</button>
    </form>

export default SearchForm;