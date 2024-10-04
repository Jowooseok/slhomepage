// src/App.jsx
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { Reset } from "styled-reset";
import MedicalDataValue from "./pages/MedicalDataValue";
import CompanyIntroduction from "./pages/CompanyIntroduction";
import "./index.css";


function App() {
  return (
    <React.Fragment>
      <Reset />
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/Protocol" element={<Home />} />
            <Route path="/CompanyIntroduction" element={<CompanyIntroduction />} />
            <Route path="/MedicalDataValue" element={<MedicalDataValue />} />
            <Route path="/TokenEconomy" element={<Home />} />
            <Route path="/AboutSL" element={<Home />} />
            <Route path="/SLAppUserCase" element={<Home />} />
            <Route path="/DataBuyerCase" element={<Home />} />
          </Routes>
        </MainLayout>
      </Router>
    </React.Fragment>
  );
}

export default App;
