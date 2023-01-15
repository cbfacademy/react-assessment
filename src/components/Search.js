import React from 'react';

const propTypes = {};
const defaultProps = {};

const Search = ({ search, term, setTerm, ...props }) => {

    const handleSubmit = (event) =>{
        event.preventDefault();
        search(term);
    };

    return <div id="search">
        <form onSubmit={handleSubmit}>
        <label>
            <input type="text" placeholder="Enter search term..." id="term" name="term" value={term} onChange={(e) => setTerm(e.target.value)}/>
        </label>
        <input type="submit" value="Search"/>
        </form>
        <h1>{term && 'Searching for terms:' + term}</h1>
    </div>
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;