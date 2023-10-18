import React from "react";
import "./TopBar.css";

function Topbar() {
  return (
    <div className="topbar">
      <div className="greeting">
        <span>Hello Shahrukh 👋</span>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Topbar;
