import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import HomeBanner from './component/HomeBanner';
import Login from './component/Login';
import Dashboard from './component/Dashboard'; 
import Banner from './component/Banner'

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomeBanner />
              <Banner />
            </>
          }
        />
        <Route path="/login" element={<Login page={true}/>} />
        <Route path="/register" element={<Login page={false} />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
    </Router>
  );
}

export default App;
