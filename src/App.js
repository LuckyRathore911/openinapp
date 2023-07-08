import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

import "./App.css";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <div className='main-div'>
      <Router>
        <Routes>
            <Route exact path='/' element={<Auth/>} />
        </Routes>
      </Router>
    </div>
  );
};
export default App