import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import ManagerDash from "./ManagerDash";
import PerformanceTrackingMain from "./PerformanceTrackingMain";
import SalesContest from "./SalesContest";
import SalesManagement from "./SalesManagement";
import Team_management from "./Team_management"

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="flex">
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
        <div className="flex-1">
          <Navbar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} />
          <Routes>
            <Route path="/" element={<ManagerDash isSidebarOpen={isSidebarOpen} />} />
            <Route path="/performance-tracking" element={<PerformanceTrackingMain isSidebarOpen={isSidebarOpen} />} />
            <Route path="/sales-contest" element={<SalesContest isSidebarOpen={isSidebarOpen} />} />
            <Route path="/sales-management" element={<SalesManagement isSidebarOpen={isSidebarOpen} />} />
            <Route path="/team-management" element={<Team_management isSidebarOpen={isSidebarOpen} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
