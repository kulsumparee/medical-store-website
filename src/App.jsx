import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './container/layout/Index'
import FirstScreen from './screens/screen1/page1';
import DrawerComp from './components/header/Drawer';


const App = () => {
  return (
    <Router>
    
          
      <Routes>
        
        <Route path="/" element={<Layout />} />
        <Route path="shopNow" element={<FirstScreen/>} />
      </Routes>
     
      
    </Router>

  )
}

export default App
