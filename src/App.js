import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import About from './components/About/About'
import Profile from './components/Profile/Profile';


function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Profile />
    </div>
  );
}

export default App;
