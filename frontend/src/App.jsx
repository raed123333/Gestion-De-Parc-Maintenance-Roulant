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
import EditDriver from "./admin componentes/EditDriver";
import ShowDriver from "./admin componentes/ShowDriver";
import RepairDisplay from "./componentes/RepairRequest/RepairDisplay";
import CreateRepair from "./componentes/RepairRequest/CreateRepair";
import DeleteRepair from "./componentes/RepairRequest/DeleteRepair";
import EditRepair from "./componentes/RepairRequest/EditRepair";
import DisplayMaintenancePlans from "./Maintenance components/DisplayMaintenancePlans";
import DeleteMaintenancePlan from "./Maintenance components/DeleteMaintenancePlan";
import UpdateMaintenancePlan from "./Maintenance components/UpdateMaintenancePlan";
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
        <Route path="/dashboradAdmin/editDriver/:id" element={<EditDriver />} />
        <Route
          path="/dashboradAdmin/deleteDriver/:id"
          element={<DeleteDriver />}
        />
        <Route path="/dashboradAdmin/showDriver/:id" element={<ShowDriver />} />
        <Route path="/Repair" element={<RepairDisplay />} />
        <Route path="/createRepair" element={<CreateRepair />} />
        <Route path="/deleteRepair/:id" element={<DeleteRepair />} />
        <Route path="/editRepair/:id" element={<EditRepair />} />
        <Route path="/maintenancePlans" element={<DisplayMaintenancePlans />} />
        <Route
          path="/maintenancePlans/deleteMaintenancePlan/:id"
          element={<DeleteMaintenancePlan />}
        />
        <Route
          path="/maintenancePlans/updateMaintenancePlan/:id"
          element={<UpdateMaintenancePlan />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
