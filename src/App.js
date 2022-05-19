import React from "react";
import './components/FontAwesome'
import Header from "./components/Header";
import Banner from "./components/Banner";
import BgGrids from "./components/BgGrids";


function App() {
  return (
    <div className="App">
      <BgGrids/>
      <Header/>
      <Banner/>
    </div>
  );
}

export default App;