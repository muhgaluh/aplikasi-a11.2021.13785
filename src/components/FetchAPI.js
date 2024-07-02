import React, { useState, useEffect, useMemo } from 'react';

function FetchAPI() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const filteredData = useMemo(() => {
    return data.filter(post => 
      post.title.toLowerCase().includes(filter.toLowerCase())
    );
  }, [data, filter]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="mt-4">
        <h2>Fetch API</h2>
        <div className="mb-3">
          <label htmlFor="filterInput" className="form-label">Filter:</label>
          <input
            type="text"
            className="form-control"
            id="filterInput"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <ul className="list-group">
          {filteredData.slice(0, 2).map(post => (
            <li key={post.id} className="list-group-item">
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      </div>
  );
}

export default FetchAPI;
