import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexPage from "./screens/Index";
import HubPage from "./screens/Hub";
import GamePage from "./screens/Game";
import GraphPage from "./screens/Graph";
import InflationCalc from "./screens/Inflation";
import TestPage from "./screens/Test";
import AboutPage from "./screens/About";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/hub" element={<HubPage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/graph" element={<GraphPage />} />
        <Route path="/inflation" element={<InflationCalc />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
