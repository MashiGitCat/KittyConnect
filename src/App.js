import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/main';
import Navbar from './components/Navbar/navBar';
import CatListings from './components/CatListings/catListings';

const App = () => {
  return (
    <>
      
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catlistings" element={<CatListings />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
