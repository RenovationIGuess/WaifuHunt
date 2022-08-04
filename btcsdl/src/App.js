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
/* import Profile from './pages/profile'; */
/* import WaifuListPage from './pages/waifulist'; */
import AuthContextProvider from './contexts/AuthContext';
import ErrorNotFound from './pages/error404';
import ProtectedRoute from './components/routing/ProtectedRoute';
import ProtectedDb from './components/routing/ProtectedDb';
import ProtectedWaifu from './components/routing/ProtectedWaifu';
import WaifuContextProvider from './contexts/WaifuContext';
import ProtectedRoll from './components/routing/ProtectedGetWaifu';

function App() {
  return (
    <AuthContextProvider>
      <WaifuContextProvider>
        <Router>
          <Routes>    
            <Route path="/waifudb/:id/get" element={<ProtectedRoll />} />
            <Route path="/waifudb/:id" element={<ProtectedWaifu />} />
            <Route path="/user/:id" element={<ProtectedRoute />} />
            <Route path="/waifudb" element={<ProtectedDb />} exact />
            <Route path="/about-pj" element={<AboutProject />} exact />
            <Route path="/about-us" element={<AboutUsPage />} exact />
            <Route path="/" element={<Home />} exact />
            <Route path="/signin" element={<SignInPage />} exact />
            <Route path="*" element={<ErrorNotFound />} />
          </Routes>
        </Router>
      </WaifuContextProvider>
    </AuthContextProvider>
  );
}

export default App;
