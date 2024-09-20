import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Index'
import FirstScreen from './pages/page1/Index';
import DrawerComp from './components/header/Drawer';
import FooterSec from './components/footer/Index';
import BlogPostScreen from './pages/blogPost/Index';


const App = () => {
  return (
    <Router>

      <DrawerComp />
      <Routes>

        <Route path="/" element={<Layout />} />
        <Route path="shopNow" element={<FirstScreen />} />
        <Route path="blogs" element={<BlogPostScreen />} />
      </Routes>
      <FooterSec/>

    </Router>

  )
}

export default App
