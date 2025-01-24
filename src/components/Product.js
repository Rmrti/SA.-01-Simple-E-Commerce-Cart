import React from 'react';

const Product = ({ product, onAddToCart }) => {
  console.log(`Image path: ./images/${product.name.toLowerCase()}.jpg`); // Added console.log

  return (
    <div className="product-card">
      <img src={`./images/${product.name.toLowerCase()}.jpg`} alt={product.name} /> 
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default Product;
