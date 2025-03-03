import React from "react";
import SalesOverview from "./ManagerDashPages/SalesOverview";
import SalesContest from "./ManagerDashPages/SalesContest";
import TeamManagement from "./ManagerDashPages/TeamManagement";
import PerformanceTracking from "./ManagerDashPages/PerformanceTracking";
import SalesTable from "./ManagerDashPages/SalesTable";
import SalesChart from "./ManagerDashPages/SalesChart";
import PerformanceTrackingTeam from "./ManagerDashPages/PerformanceTrackingTeam";

const ManagerDash = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Welcome, ALLEN!</h1>

      {/* Sales Overview Section */}
      <SalesOverview />

      {/* Sales Table & Sales Graph */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <SalesTable />
        <SalesChart />
      </div>

      {/* Sales Contest & Target Achievement */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <SalesContest />
        <PerformanceTracking />
      </div>

      {/* Team Management & Performance Tracking */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <TeamManagement />
        <PerformanceTrackingTeam/>
      </div>
    </div>
  );
};

export default ManagerDash;
