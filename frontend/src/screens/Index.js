import React from "react";
import { Link } from "react-router-dom";

const IndexPage = () => (
  <div>
    <h1>Welcome to Our Game</h1>
    <Link to="/game">Start Game</Link>
  </div>
);

export default IndexPage;
