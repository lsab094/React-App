// import logo from './logo.svg';
// import './App.css';
import Header from './Header.js';
import Todos from './Todos.js';
import React from 'react'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Header />
      </header>

      <header className="App-todos">
        <Todos />
      </header>

    </div>
  );
}

export default App;
