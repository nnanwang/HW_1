// App.js
import React from 'react';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductNavigation from './components/ProductNavigation';
import Profile from './components/Profile';

function App() {
  return (
    <div style={{justifyContent:"center", margin:30}}>
            <Router>
        <div >
          <h1>Your 3/4 Homework!</h1>
        <ProductNavigation />
          <Routes>
            <Route path="/" element={<h2>Welcome to our App!</h2>} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route path="/todo-list" element={<TodoList />} /> */}
            <Route path="/welcome" element={<Welcome name="Nan"/>} />
            <Route path="/counter" element={<Counter />} />
          <Route path="/profile" element={<Profile />} />
            <Route path="/todos" element={<TodoList />} />
            <Route path="/welcome" element={<Welcome name="Nan" />} />
            <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;


