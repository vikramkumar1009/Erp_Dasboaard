const TeamManagement = () => {
    const team = [
      { img: "https://randomuser.me/api/portraits/men/1.jpg", name: "John Doe", position: "Sales Agent", salary: "$5000" },
      { img: "https://randomuser.me/api/portraits/women/2.jpg", name: "Jane Smith", position: "Marketing", salary: "$4500" },
    ];
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Team Management</h3>
        <table className="w-full text-gray-700">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
              <th className="py-3 px-6">Profile</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Position</th>
              <th className="py-3 px-6">Salary</th>
            </tr>
          </thead>
          <tbody>
            {team.map((member, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-6">
                  <img src={member.img} alt={member.name} className="w-10 h-10 rounded-full" />
                </td>
                <td className="py-3 px-6">{member.name}</td>
                <td className="py-3 px-6">{member.position}</td>
                <td className="py-3 px-6 text-green-600 font-bold">{member.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default TeamManagement;
  