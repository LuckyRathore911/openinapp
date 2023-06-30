import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import "./App.css";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
            <Route exact path='/' element={<Auth/>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
