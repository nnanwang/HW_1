import React, { useContext, memo } from 'react';
import UserContext from './UserContext';

// UserEmail component, memoized to prevent unnecessary re-renders
const UserEmail = memo(() => {
  const { state } = useContext(UserContext); // Consuming context
  console.log('Rendering UserEmail'); // Log to show when this component re-renders
  return <div>User Email: {state.email}</div>; // Displaying user email
});

export default UserEmail;
