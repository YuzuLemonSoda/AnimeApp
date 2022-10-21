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
import User from './pages/user';

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
        <Route exact path='/home' exact element={<Home />} />
        <Route path='/about' element={<About/>} />
        <Route path='/rankings' element={<Rankings/>} />
        <Route path='/users' element={<User/>} />
        <Route path='/sign-up' element={<SignUp/>} />
    </Routes>
    </Router>
);

}

export default App;