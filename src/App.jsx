import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import ServicesPage from './pages/ServicesPage';
import Pricing from './pages/Pricing';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import BookService from './components/BookService';
import Blog from './pages/Blog';
import BlogDetail from './pages/BlogDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesPage/>} />
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/bookservice" element={<BookService/>} />
        <Route path="/blog" element={<Blog/>} />
         <Route path="/blog/:id" element={<BlogDetail/>} />
        
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
