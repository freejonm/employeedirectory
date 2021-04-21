import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Jumbotron from './components/Jumbotron/jumbotron';
// import Table from './components/Table/Table';
import Container from './components/Search/SearchResultContainer'
import './styles/index.css'

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      {/* <Table /> */}
      <Container />
    </div>
  );
}

export default App;