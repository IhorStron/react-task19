import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Publications from './pages/publications';
import Photos from './pages/photos';
import Contacts from './pages/contacts'

function App() {
  return (
    <Router>
      <>
        <nav className='navigation'>


          <Link to="/">Home</Link>

          <Link to="/Publications">Publications</Link>

          <Link to="/Photos">Photos</Link>

          <Link to="/Contacts">Contacts</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/publications' element={<Publications />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;