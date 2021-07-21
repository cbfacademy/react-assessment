import React from 'react';

const propTypes = {};
const defaultProps = {};

const Search = (props) => {

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.findBooks(props.keyword);
    };

    return <div className="searchBar">
        <form onSubmit={handleSubmit}>
        <label>
            <input type="text" placeholder="Enter name, author, keyword or genre..." name="search" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}/>
        </label>
        <input type="submit" value="Find"/>
        </form>
        <h1>{props.keyword && 'Searching for keyword:' + props.keyword}</h1>
    </div>
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;
// #endregion

export default Search;
