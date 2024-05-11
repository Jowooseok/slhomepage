// src/App.jsx
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import DeviceSupply from "./pages/DeviceSupply";
import BusinessCertification from "./pages/BusinessCertification";
import Patent from "./pages/Patent";
import VendorCompony from "./pages/VendorCompony";
import { Reset } from "styled-reset";

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
            <Route path="/TokenEconomy" element={<Home />} />
            <Route path="/AboutSL" element={<Home />} />
            <Route path="/DeviceSupply" element={<DeviceSupply />} />
            <Route path="/BusinessCertification" element={<BusinessCertification />} />
            <Route path="/Patent" element={<Patent />} />
            <Route path="/VendorCompony" element={<VendorCompony />} />
          </Routes>
        </MainLayout>
      </Router>
    </React.Fragment>
  );
}

export default App;
