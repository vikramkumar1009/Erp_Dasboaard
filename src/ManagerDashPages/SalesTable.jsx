const SalesTable = () => {
    const salesData = [
      { product: "Health Insurance", quantity: "100", price: "$10,000", date: "10-02-2024" },
      { product: "Life Insurance", quantity: "150", price: "$15,000", date: "10-02-2024" },
      { product: "Car Insurance", quantity: "80", price: "$8,000", date: "10-02-2024" },
    ];
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Sales</h3>
        <table className="w-full text-gray-700">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-6">Product Name</th>
              <th className="py-3 px-6">Quantity</th>
              <th className="py-3 px-6">Total Price</th>
              <th className="py-3 px-6">Date</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-6">{item.product}</td>
                <td className="py-3 px-6">{item.quantity}</td>
                <td className="py-3 px-6">{item.price}</td>
                <td className="py-3 px-6">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default SalesTable;
  