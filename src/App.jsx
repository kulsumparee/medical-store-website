import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layout/Index'
import FirstScreen from './pages/page1/Index';
import DrawerComp from './components/header/Drawer';
import FooterSec from './components/footer/Index';
import BlogPostScreen from './pages/blogPost/Index';
import SingleCard from './pages/page3';
import AddToCartPage from './pages/page4/Index';
import CheckoutCard from './pages/page5/Index';
import OrderCompleted from './pages/page5/OrderCompleted';
import SignInForm from './components/form/Signin';


const App = () => {

  const location = useLocation();
  return (
    <Router>

      <DrawerComp />
      <Routes>

        <Route path="/" element={<Layout />} />
        <Route path="shopNow" element={<FirstScreen />} />
        <Route path="singleCardDetails" element={<SingleCard />} />
        <Route path="cart" element={<AddToCartPage />} />
        <Route path="checkout" element={<CheckoutCard />} />
        <Route path="completeOrder" element={<OrderCompleted />} />
        <Route path="blogs" element={<BlogPostScreen />} />
        <Route path="sign-In" element={<SignInForm/>} />
      </Routes>
      {location.pathname !== "/sign-In" && <FooterSec />}   

    </Router>

  )
}

export default App
