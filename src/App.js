import './App.css';
import React from 'react'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route 
} from 'react-router-dom'
import Home from './pages'
import SignInPage from './pages/signin'
import AboutUsPage from './pages/aboutus'
import AboutProject from "./pages/aboutpj"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/signin" element={<SignInPage />} exact />
        <Route path="/about-us" element={<AboutUsPage />} exact />
        <Route path="/about-pj" element={<AboutProject />} exact />
      </Routes>
    </Router>
  );
}

export default App;
