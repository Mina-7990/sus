import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Offers from "./pages/Offers";
import Header from "./pages/Header";
import AdminLogin from "./pages/AdminLogin";
import AddOffer from "./pages/AddOffer";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Offers />} />
                <Route path="/al" element={<AdminLogin />} />
                <Route path="/ad" element={<AddOffer />} />
            </Routes>
        </Router>
    );
}

export default App;
