import React, { useState } from 'react';
import { Select } from 'antd';

const {Option} = Select;

export const Filter = ({ movies, setFilteredMovies, genres }) => {
    
    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const getFilteredMovies = (valueInput, valueSelect) => {
        return movies.reduce((acc, item) => {
            if(valueInput && 
            valueSelect &&
            item.genre && item.genre.length
        ) {
            if(
                item.genre.some(elem => elem.trim() === valueSelect) &&
                item.title.toLowerCase().includes(valueInput.toLowerCase())
            ) {
                acc.push(item);
            }
        } else if(
            valueInput &&
            !valueSelect &&
            item.title.toLowerCase().includes(valueInput.toLowerCase()) 
        ) {
            acc.push(item);
        } else if(
            !valueInput &&
            valueSelect &&
            item.genre && item.genre.length
        ) {
            acc.push(item);
        }
        }, []);
    };

    const handleOnChangeInput = (e) => {
        const { value } = e.target;
        setValueInput(value);
        setFilteredMovies(getFilteredMovies(value, valueSelect));
    };

    const handleOnChangeSelect = (value) => {
        setValueSelect(value);
        setFilteredMovies(getFilteredMovies(valueInput, value));
    };

    return (
        <div className="filter">
            <h3>Filter: </h3>
            <span>Genre:</span>
            <Select onChange={handleOnChangeSelect} allowClear>
                {genres.map((item, i) => <Option key={i} value={item} >{item}</Option>)}
            </Select>
            <span>Title:</span>
            <input
                type="text"
                name="filter-name"
                onChange={handleOnChangeInput}
                value={valueInput}
                placeholder="Title..."
            />
        </div>
    )
};