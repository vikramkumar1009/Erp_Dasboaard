import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import ManagerDash from "./ManagerDash";
import Team_management from "./Team_management";
import SalesManagement from "./SalesManagement";
import SalesContest from "./SalesContest";
import Signin from "./Signin";
import SignUp from "./SignUp";
import PerformanceTrackingMain from "./PerformanceTrackingMain";

 // Optional: For handling unmatched routes

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar & Sidebar */}
        <Route path="/" element={<Layout />}>
          <Route index element={<ManagerDash />} />
          <Route path="sales-management" element={<SalesManagement />} />
          <Route path="sales-contest" element={<SalesContest />} />
          <Route path="team-management" element={<Team_management />} />
          <Route path="performance-tracking" element={<PerformanceTrackingMain/>} />
        </Route>

        {/* Full-Screen Auth Pages (No Navbar & Sidebar) */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Optional: Wildcard route for unmatched paths */}
        
      </Routes>
    </Router>
  );
}

export default App;