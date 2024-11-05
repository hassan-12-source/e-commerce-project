import React, { useState } from 'react';
import './App.css';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import GiftCard from './Components/GiftCard/GiftCard';
import Hero from './Components/Hero/Hero';
import MobileNav from './Components/MobileNav/MobileNav';
import Navbar from './Components/Navbar/Navbar';
import NewPlants from './Components/NewPlants/NewPlants';
import OurStory from './Components/OurStory/OurStory';
import ProductNewPlants from './Components/ProductNewPlants/ProductNewPlants';
import Reviews from './Components/Reviews/Reviews';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import PlantsPage from './Components/PlantsPage/PlantsPage';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/Navbar/Sidebar/Sidebar';
import Checkout from './Components/Navbar/Sidebar/Checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setIsSidebarOpen(true);
  };

  

  const handleRemoveItem = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  }

  return (
    <Router>
      <div className="App">
      <Navbar cartItems={cartItems} onCartIconClick={() => setIsSidebarOpen(true)} />
        
        <MobileNav />
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} cartItems={cartItems} onRemoveItem={handleRemoveItem} />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <NewPlants />
              <ProductNewPlants onAddToCart={handleAddToCart} />
              <OurStory />
              <Reviews />
              <GiftCard />
              <Features />
            </>
          } />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/plants" element={<PlantsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<ProductNewPlants onAddToCart={handleAddToCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
