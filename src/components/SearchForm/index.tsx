import * as React from 'react';
import './index.css';
import Select from '../Select';
import Input from '../Input';
import Shape from '../Shape';
import SearchButton from '../SearchButton';

const SearchForm = () =>
    <form className="search-form">
        <Select />
        <Shape />
        <Input />
        <SearchButton />
    </form>

export default SearchForm;