import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { FaSort, FaFilter } from "react-icons/fa";

// Sample Sales Data for Graph
const salesData = [
  { name: "JAN", sales: 90000 },
  { name: "FEB", sales: 70000 },
  { name: "MAR", sales: 50000 },
  { name: "APR", sales: 55000 },
  { name: "MAY", sales: 57000 },
  { name: "JUN", sales: 60000 },
  { name: "JUL", sales: 59000 },
  { name: "AUG", sales: 65000 },
  { name: "SEP", sales: 62000 },
  { name: "OCT", sales: 72000 },
  { name: "NOV", sales: 75000 },
  { name: "DEC", sales: 89000 },
];

// Generate Random Product Data
const productData = Array.from({ length: 20 }, (_, i) => ({
  product: `Product ${i + 1}`,
  quantity: Math.floor(Math.random() * 10) + 1,
  price: `${Math.floor(Math.random() * 10000) + 1000} $`,
  date: `20.0${(i % 9) + 1}.2024`,
}));

// Generate Random Customer Data
const customerData = Array.from({ length: 20 }, (_, i) => ({
  name: `Customer `,
  phone: `98765${Math.floor(Math.random() * 10000)}`,
  email: `customer@mail.com`,
  nominee: `Nominee`,
}));

const SalesManagement = ({ isSidebarOpen }) => {
  const [productPage, setProductPage] = useState(1);
  const [customerPage, setCustomerPage] = useState(1);
  const rowsPerPage = 5; // **Now only 5 rows per page**

  const totalProductPages = Math.ceil(productData.length / rowsPerPage);
  const totalCustomerPages = Math.ceil(customerData.length / rowsPerPage);

  const displayedProducts = productData.slice((productPage - 1) * rowsPerPage, productPage * rowsPerPage);
  const displayedCustomers = customerData.slice((customerPage - 1) * rowsPerPage, customerPage * rowsPerPage);

  return (
    <div 
    className={`mt-20 p-4 md:p-6 bg-gray-100 min-h-screen transition-all duration-300 ${
      isSidebarOpen ? "lg:ml-72 lg:w-[calc(100%-18rem)]" : "w-full"
    }`}
    >
      {/* Sales Report Section */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-md md:text-lg font-semibold">Sales Report</h3>
          <button className="bg-gray-100 px-3 py-1 rounded-lg text-gray-700 flex items-center space-x-2 text-sm md:text-base">
            <FaFilter /> <span>Filter</span>
          </button>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {/* Products Sold */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md md:text-lg font-semibold">Products Sold</h3>
            <div className="flex space-x-2">
              <button className="bg-gray-100 px-3 py-1 rounded-lg text-gray-700 flex items-center space-x-2 text-sm md:text-base">
                <FaSort /> <span>Sort</span>
              </button>
              <button className="bg-gray-100 px-3 py-1 rounded-lg text-gray-700 flex items-center space-x-2 text-sm md:text-base">
                <FaFilter /> <span>Filter</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700 text-sm md:text-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm leading-normal">
                  <th className="py-2 px-2 md:px-4 text-left">Product Name</th>
                  <th className="py-2 px-2 md:px-4 text-left">Quantity</th>
                  <th className="py-2 px-2 md:px-4 text-left">Price</th>
                  <th className="py-2 px-2 md:px-4 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {displayedProducts.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                    <td className="py-2 px-2 md:px-4">{item.product}</td>
                    <td className="py-2 px-2 md:px-4">{item.quantity}</td>
                    <td className="py-2 px-2 md:px-4">{item.price}</td>
                    <td className="py-2 px-2 md:px-4">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalProductPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base ${
                  productPage === i + 1 ? "bg-blue-700 text-white" : "bg-gray-100"
                }`}
                onClick={() => setProductPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Customer Details */}
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg w-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-md md:text-lg font-semibold">Customer Details</h3>
            <div className="flex space-x-2">
              <button className="bg-gray-100 px-3 py-1 rounded-lg text-gray-700 flex items-center space-x-2 text-sm md:text-base">
                <FaSort /> <span>Sort</span>
              </button>
              <button className="bg-gray-100 px-3 py-1 rounded-lg text-gray-700 flex items-center space-x-2 text-sm md:text-base">
                <FaFilter /> <span>Filter</span>
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-gray-700 text-sm md:text-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-xs md:text-sm leading-normal">
                  <th className="py-2 px-2 md:px-4 text-left">Customer Name</th>
                  <th className="py-2 px-2 md:px-4 text-left">Tel No</th>
                  <th className="py-2 px-2 md:px-4 text-left">Email ID</th>
                  <th className="py-2 px-2 md:px-4 text-left">Nominee Details</th>
                </tr>
              </thead>
              <tbody>
                {displayedCustomers.map((customer, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}>
                    <td className="py-2 px-2 md:px-4">{customer.name}</td>
                    <td className="py-2 px-2 md:px-4">{customer.phone}</td>
                    <td className="py-2 px-2 md:px-4">{customer.email}</td>
                    <td className="py-2 px-2 md:px-4">{customer.nominee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: totalCustomerPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 md:px-4 md:py-2 rounded-md text-sm md:text-base ${
                  customerPage === i + 1 ? "bg-blue-700 text-white" : "bg-gray-100"
                }`}
                onClick={() => setCustomerPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesManagement;