import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to Product Page</h1>
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
