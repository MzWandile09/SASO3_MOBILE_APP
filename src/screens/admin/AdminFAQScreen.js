import { useState } from "react";

const UsersPage = () => {
  const [activeProfile, setActiveProfile] = useState("student");

  const studentUsers = [
    { role: "Student" },
    { role: "Student" },
  ];

  const tutorUsers = [
    { role: "Tutor" },
    { role: "Tutor" },
  ];

  const lecturerUsers = [
    { role: "Lecturer" },
    { role: "Lecturer" },
  ];

  const renderTable = (users) => (
    <table className="w-full text-left mt-4">
      <thead>
        <tr>
          <th className="border-b p-2">Role</th>
          <th className="border-b p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => (
          <tr key={idx}>
            <td className="border-b p-2">{user.role}</td>
            <td className="border-b p-2 space-x-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600">View</button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white px-2 py-1 rounded">
                Send
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Users</h2>
      <div className="space-x-4 mb-4">
        <button
          onClick={() => setActiveProfile("student")}
          className={`px-4 py-2 rounded ${activeProfile === "student" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Student
        </button>
        <button
          onClick={() => setActiveProfile("tutor")}
          className={`px-4 py-2 rounded ${activeProfile === "tutor" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Tutor
        </button>
        <button
          onClick={() => setActiveProfile("lecturer")}
          className={`px-4 py-2 rounded ${activeProfile === "lecturer" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        >
          Lecturer
        </button>
      </div>
      {activeProfile === "student" ? renderTable(studentUsers) : activeProfile === "tutor" ? renderTable(tutorUsers) : renderTable(lecturerUsers)}
    </div>
  );
};

export default UsersPage;
