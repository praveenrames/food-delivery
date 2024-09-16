import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer.jsx';
import { LoginPopup } from './Components/LoginPopup/LoginPopup.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Cart from './pages/Cart/Cart.jsx';
import Home from './pages/Home/Home.jsx';
import Order from './pages/PlaceOrder/Order.jsx';

const App = () => {
  // display popup for login
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App;