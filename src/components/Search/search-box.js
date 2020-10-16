import React from 'react';
import './searchbox.css'

const SearchBox =(props) =>{
    return(
        <input type = 'search'
        className='search'
        placeholder={props.placeholder}
        onKeyPress={props.handleChange}
        />
    )
}
export default SearchBox;