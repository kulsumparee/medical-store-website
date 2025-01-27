import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContent from './routes/Index';
import { CartProvider } from './pages/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;
