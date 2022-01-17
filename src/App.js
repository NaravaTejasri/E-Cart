import React from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Categories from "./pages/Home/Categories";

function App() {
  return (
    <div className="App">
      <h1>E-Cart</h1>
      <Routes>
        <Route exact path="/" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
