import React from "react";

import BgGrids from "./components/BgGrids";
import FollowMe from "./components/FollowMe";

import HeaderBanner from "./components/HeaderBanner";
import Services from "./components/Services";
import AboutMe from "./components/AboutMe";
import PortfolioHome from "./components/PortfolioHome";


function App() {
  return (
    <div className="App position-relative">
      <BgGrids/>
      <FollowMe/>
      <HeaderBanner/>
      <Services/>
      <AboutMe/>
      <PortfolioHome/>
    </div>
  );
}

export default App;