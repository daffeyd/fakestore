import React from "react";
import Header from "./containers/Header";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Header />
      <Outlet />

    </div>
  );
}

export default App;