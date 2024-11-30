import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  // Mengambil parameter id dari URL
  const { id } = useParams();
  
  return (
    <div>
      <h2>Product Detail for Product ID: {id}</h2>
    </div>
  );
};

export default ProductDetail;
