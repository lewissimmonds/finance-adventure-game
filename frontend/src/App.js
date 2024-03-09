import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./screens/Index";
import HubPage from "./screens/Hub";
import GamePage from "./screens/Game";
import GraphPage from "./screens/Graph";
import InflationCalc from "./screens/Inflation";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/hub" element={<HubPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/graph" element={<GraphPage />} />
        <Route path="/inflation" element={<InflationCalc />} />
      </Routes>
    </Router>
  );
}

export default App;
