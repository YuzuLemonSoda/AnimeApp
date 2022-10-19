import React, { useEffect, useState } from 'react';
import './App.css';
import {X_RapidAPI_Key, X_RapidAPI_Host} from './api_keys.js';
import Navbar from './components/index';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Blogs from './pages/index';
import Rankings from './pages/rankings';
import SignUp from './pages/signup';
import Contact from './pages/user';

const App = () => {

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);
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

return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
);


//  if (loading) {
//    return <p>Loading...</p>;
//  }
//
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <div className="App-intro">
//          <h2>JUG List</h2>
//          {groups.map(group =>
//            <div key={group.id}>
//              {group.name}
//            </div>
//          )}
//        </div>
//      </header>
//    </div>
//  );
}

export default App;