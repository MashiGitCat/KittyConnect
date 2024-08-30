import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './components/Main/main';
import Navbar from './components/Navbar/navBar';

import CatListingsPage from "./pages/catListingsPage"

const App = () => {
  return (
    <>
      
      
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/catlistingspage" element={<CatListingsPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
