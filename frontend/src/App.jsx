// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import DashboradDriver from "./pages/DashboradDriver";
import LoginAdmin from "./pages/LoginAdmin";
import DashboradAdmin from "./pages/DashboradAdmin";
import CreateDriver from "./admin componentes/CreateDriver";
import DeleteDriver from "./admin componentes/DeleteDriver";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboradDriver" element={<DashboradDriver />} />
        <Route path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/dashboradAdmin" element={<DashboradAdmin />} />
        <Route path="/dashboradAdmin/createDriver" element={<CreateDriver />} />
        <Route
          path="/dashboradAdmin/deleteDriver/:id"
          element={<DeleteDriver />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
