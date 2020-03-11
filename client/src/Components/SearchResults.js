import React, { useState, useEffect } from 'react';
import Result from './Result';
import SearchForm from './SearchForm';
import { useParams } from 'react-router-dom';
import { foodSearch } from '../Services/requests';
import M from 'materialize-css';

const SearchResults = ({ date }) => {
  const { query } = useParams();

  useEffect(() => M.AutoInit());

  const [results, setResults] = useState([]);

  useEffect(() => {
    foodSearch(query).then(response => {
      setResults(response);
    });
  }, [query]);

  return (
    <div className="container">
      <SearchForm />
      <h4>Search results for "{query}"</h4>
      <ul className="collapsible">
        {results.map(result => (
          <Result key={result.api_id} result={result} date={date} />
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
