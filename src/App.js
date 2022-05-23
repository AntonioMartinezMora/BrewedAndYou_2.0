import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Style/App.css'; 
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Home from './Pages/Home'
// Pages
import Categories from './Pages/Categories';
import Coffee from './Pages/Coffee'
import About from './Pages/About'
import Terms from './Pages/Terms'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import Discover from './Pages/Discover';
import Trends from './Pages/Trends';
import News from './Pages/News';
import BlogPage from './Pages/BlogPage';
import Admin from './Pages/Admin';

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/news"
          element={<News />}
        />
        <Route 
          path="/news/:id"
          element={<BlogPage />}
        />
        <Route 
          path="/trends"
          element={<Trends />}
        />
        <Route 
          path="/trends/:id"
          element={<BlogPage/>}
        />
        <Route 
          path="/discover"
          element={<Discover />}
        />
        <Route 
          path="/discovery/:category"
          element={<Categories />}
        />
        <Route 
          path="/discover/:id"
          element={<Coffee />}
        />
        <Route 
          path="/coffee/:id"
          element={<Coffee />}
        />
        <Route 
          path="/about"
          element={<About />}
        />
        <Route 
          path="/terms"
          element={<Terms />}
        />
        <Route 
          path="/contact"
          element={<Contact />}
        />
        <Route 
          path="/user/admin"
          element={<Admin />}
        />
        <Route 
          path="*"
          element={<Error />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;