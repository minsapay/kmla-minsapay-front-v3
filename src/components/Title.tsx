import React from "react";

import './styles.css';

const logo = require("../assets/logo.png");

const Title = () => {
  return (
    <div className="row">
      <img alt="logo" style={{ width: 200 }} src={String(logo)} className = "block" />
      <h1 className = "block">민사페이 - MinsaPay</h1>
    </div>
  );
};

export default Title;
