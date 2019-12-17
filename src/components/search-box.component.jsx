import React from 'react'
import './search-box.styles.css'

// functional components, unlike class components, dont have access to state because they dont have access to constructor, which is a class component or state or lifecycle methods.

export const SearchBox = ({ placeholder, handleChange }) => (
    <input 
    className = 'search'
    type='search' 
    placeholder= {placeholder}
    onChange={handleChange}  />
) 