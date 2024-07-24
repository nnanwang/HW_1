import React, { useContext, memo } from 'react';
import UserContext from './UserContext';

// UserName component, memoized to prevent unnecessary re-renders
const UserName = memo(() => {
  const { state } = useContext(UserContext); // Consuming context
  console.log('Rendering UserName'); // Log to show when this component re-renders
  return <div>User Name: {state.name}</div>; // Displaying user name
});

export default UserName;
