import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';

function App() {
  return (
    <BrowserRouter >
      <Navbar />
      <Routes path="/" >
        <Route  path="/" element={<Home />} />
        <Route  path="/login" element={<Login />} />
        <Route  path="/signup" element={<Signup />} />
        <Route  path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
