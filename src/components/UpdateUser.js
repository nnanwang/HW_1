import React, { useContext } from 'react';
import UserContext from './UserContext';

function UpdateUser() {
  const { dispatch } = useContext(UserContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: 'SET_NAME', payload: 'Jane Doe' })}>
        Set Name to Jane Doe
      </button>
      <button onClick={() => dispatch({ type: 'SET_EMAIL', payload: 'jane@example.com' })}>
        Set Email to jane@example.com
      </button>
    </div>
  );
}

export default UpdateUser;
