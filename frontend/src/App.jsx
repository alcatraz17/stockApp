import React from 'react'
import './App.css';
import "./components/Table/Table";
import Table from './components/Table/Table';

const App = () => {
  return (
    <div>
      <nav className="navBar">
        <h3 className="appLogo">Quikie</h3>
        <p className="appLogo">Apps</p>
      </nav>
      <Table/>
    </div>
  )
}

export default App
