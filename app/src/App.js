import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {X_RapidAPI_Key, X_RapidAPI_Host} from './api_keys.js';

const App = () => {

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

//  useEffect(() => {
//    setLoading(true);
//
//    fetch('api/groups')
//      .then(response => response.json())
//      .then(data => {
//        setGroups(data);
//        setLoading(false);
//      })
//  }, []);

  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://anime-db.p.rapidapi.com/anime',
    params: {page: '1', size: '25', sortBy: 'ranking', sortOrder: 'asc'},
    headers: {
      'X-RapidAPI-Key': X_RapidAPI_Key,
      'X-RapidAPI-Host': X_RapidAPI_Host
    }
  };

  axios.request(options).then(function (response) {
  	console.log(response.data);
  }).catch(function (error) {
  	console.error(error);
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-intro">
          <h2>JUG List</h2>
          {groups.map(group =>
            <div key={group.id}>
              {group.name}
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;