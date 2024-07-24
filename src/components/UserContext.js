import React, { createContext, useReducer } from 'react';

// Creating the User context
const UserContext = createContext();

// Reducer function for updating user state based on action type
const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME': // Handles setting the user's name
      return { ...state, name: action.payload };
    case 'SET_EMAIL': // Handles setting the user's email
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

// Provider component that wraps child components and provides state and dispatch
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { name: '', email: '' });
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
