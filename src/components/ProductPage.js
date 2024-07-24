import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook to get route params

// ProductPage component to display details based on productId from URL
const ProductPage = () => {
  const { productId } = useParams(); // Hook to get productId from URL parameters
  return <div>Displaying product details for product ID: {productId}</div>; // Render the product ID
};

export default ProductPage; // Export ProductPage component

