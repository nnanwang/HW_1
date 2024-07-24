import { Link } from 'react-router-dom'; // Import Link component for navigation

// Updated ProductNavigation component for navigating between products and user pages
const ProductNavigation = () => (
  <div style={{fontWeight:"bold", backgroundColor:"lightblue", width:500, justifyContent:"center"}}>
    <Link style={{marginRight:20}} to="/welcome">Welcome</Link>
    <Link style={{marginRight:20}} to="/counter">Counter</Link>      
    <Link style={{marginRight:20}} to="/todos">To-Do List</Link>
    <Link style={{marginRight:20}} to="/profile">Profile</Link>
    
  </div>
);

export default ProductNavigation; // Export ProductNavigation for use in App.js
