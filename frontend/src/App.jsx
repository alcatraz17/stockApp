import React from 'react'
import './App.css';
import Card from './components/Card/Card';
import "./components/Table/Table";
import Table from './components/Table/Table';
import cardData from "./components/Card/CardData";

const displayCardData = cardData.map((val, indexval) => {
  return (
    <Card
      title={val.title}
      imgSrc={val.imgSrc}
      rate={val.rate}
    />
  );
});

const App = () => {
  return (
    <div>
      <nav className="navBar">
        <h3 className="appLogo">Quikie</h3>
        <p className="appLogo">Apps</p>
      </nav>
      <div className="cards">
        {displayCardData}
      </div>
      <Table />
    </div>
  )
}

export default App;
