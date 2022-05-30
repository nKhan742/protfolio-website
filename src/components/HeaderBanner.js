import React from "react";

import Header from "./Header";
import Banner from "./Banner";

import "./HeaderBanner.scss";

function HeaderBanner() {
  return (
    <div className="header-banner">
      <Header/>
      <Banner/>
    </div>
  );
}

export default HeaderBanner;