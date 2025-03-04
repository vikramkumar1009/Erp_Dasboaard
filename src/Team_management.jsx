import { useState } from "react";
import EmployeeModel from "./EmployeeModel";

function Team_management({ isSidebarOpen }) {
  const [modalType, setModalType] = useState(null);
  const [employees, setEmployees] = useState([
    { id: 1, name: "Parviz Aslanov", department: "Marketing", position: "UI Designer", startDate: "20.11.2023", salary: "1700 $", image: "https://randomuser.me/api/portraits/men/1.jpg" },
    { id: 2, name: "Seving Aslanova", department: "Marketing", position: "UX Designer", startDate: "19.02.2023", salary: "1200 $", image: "https://randomuser.me/api/portraits/women/2.jpg" },
    { id: 3, name: "Ceyhun Aslanov", department: "Program Tester", position: "React Developer", startDate: "18.05.2024", salary: "3999 $", image: "https://randomuser.me/api/portraits/men/3.jpg" },
    { id: 4, name: "Ayla Mammadova", department: "Marketing", position: "UX Researcher Intern", startDate: "18.07.2024", salary: "400 $", image: "https://randomuser.me/api/portraits/women/4.jpg" },
    { id: 5, name: "Orxan Hüseyinov", department: "Marketing", position: "Accountant", startDate: "17.09.2022", salary: "2000 $", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu toggle

  // Search Functionality
  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (filterDepartment ? emp.department === filterDepartment : true)
  );

  // Sort Functionality
  const sortedEmployees = [...filteredEmployees].sort((a, b) => {
    if (sortConfig.key) {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
    }
    return 0;
  });

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const Button = ({ children, className, onClick }) => {
    return (
      <button className={`px-4 py-2 rounded ${className}`} onClick={onClick}>
        {children}
      </button>
    );
  };

  return (
    <div>
      <main
        className={`mt-20 p-4 md:p-6 bg-gray-100 min-h-screen transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-72 lg:w-[calc(100%-18rem)]" : "w-full"
        }`}
      >
        <div className="mt-5">
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex justify-end mb-4">
            <Button
              className="bg-blue-900 text-white hover:bg-blue-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close Menu" : "Open Menu"}
            </Button>
          </div>

          {/* Action Buttons and Search/Filter Section */}
          <div className={`${isMenuOpen ? "block" : "hidden"} md:flex md:flex-row justify-between items-center space-y-4 md:space-y-0`}>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
              <select
                value={filterDepartment}
                onChange={(e) => setFilterDepartment(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              >
                <option value="">All Departments</option>
                <option value="Marketing">Marketing</option>
                <option value="Program Tester">Program Tester</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <Button className="bg-white rounded-3xl text-black hover:bg-blue-600" onClick={() => setModalType("add")}>
                Add Employee
              </Button>
              <Button className="bg-white rounded-3xl text-black hover:bg-red-600" onClick={() => setModalType("delete")}>
                Delete Employee
              </Button>
              <Button className="bg-white rounded-3xl text-black hover:bg-yellow-600" onClick={() => setModalType("edit")}>
                Edit Employee
              </Button>
            </div>
          </div>

          {/* Employee Modal */}
          {modalType && (
            <EmployeeModel
              modalType={modalType}
              onClose={() => setModalType(null)}
              employees={employees}
              setEmployees={setEmployees}
            />
          )}

          {/* Team Management Table */}
          <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-lg mt-6">
            <h3 className="text-md font-semibold mb-4">Team Members</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-gray-700">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-3 md:px-6 cursor-pointer" onClick={() => handleSort("name")}>
                      Full Name {sortConfig.key === "name" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="py-3 px-3 md:px-6 cursor-pointer" onClick={() => handleSort("department")}>
                      Department {sortConfig.key === "department" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="py-3 px-3 md:px-6 cursor-pointer" onClick={() => handleSort("position")}>
                      Position {sortConfig.key === "position" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="py-3 px-3 md:px-6 cursor-pointer" onClick={() => handleSort("startDate")}>
                      Start Date {sortConfig.key === "startDate" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                    <th className="py-3 px-3 md:px-6 cursor-pointer" onClick={() => handleSort("salary")}>
                      Salary {sortConfig.key === "salary" && (sortConfig.direction === "asc" ? "↑" : "↓")}
                    </th>
                  </tr>
                </thead>
                <tbody className="text-gray-600 text-sm font-light">
                  {sortedEmployees.map((emp, index) => (
                    <tr
                      key={index}
                      className={`${index % 2 === 0 ? "bg-blue-50" : "bg-gray-50"} border-b border-gray-200 hover:bg-gray-200`}
                    >
                      <td className="py-3 px-3 md:px-6 flex items-center">
                        <img src={emp.image} alt={emp.name} className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-gray-300 shadow-sm" />
                        <span className="ml-2">{emp.name}</span>
                      </td>
                      <td className="py-3 px-3 md:px-6">{emp.department}</td>
                      <td className="py-3 px-3 md:px-6">{emp.position}</td>
                      <td className="py-3 px-3 md:px-6">{emp.startDate}</td>
                      <td className="py-3 px-3 md:px-6 font-bold text-green-600">{emp.salary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Team_management;