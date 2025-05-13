//SASO3 Mobile App/src/navigation/AppNavigator.js

import React, { useState } from "react";

const ReportDashboard = () => {
  // Sample test data
  const students = [
    { name: "Student 1", role: "Student", report: "Student 1's report details..." },
    { name: "Student 2", role: "Student", report: "Student 2's report details..." },
  ];
  const tutors = [
    { name: "Tutor 1", role: "Tutor", report: "Tutor 1's report details..." },
    { name: "Tutor 2", role: "Tutor", report: "Tutor 2's report details..." },
  ];
  const lecturers = [
    { name: "Lecturer 1", role: "Lecturer", report: "Lecturer 1's report details..." },
    { name: "Lecturer 2", role: "Lecturer", report: "Lecturer 2's report details..." },
  ];

  const reports = [
    { title: "Total Students", value: students.length, color: "bg-blue-100 text-blue-800", users: students },
    { title: "Total Tutors", value: tutors.length, color: "bg-green-100 text-green-800", users: tutors },
    { title: "Total Lecturers", value: lecturers.length, color: "bg-purple-100 text-purple-800", users: lecturers },
  ];

  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackClick = () => {
    setSelectedUser(null);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6">User Report Dashboard</h2>
      {selectedUser ? (
        <div className="bg-gray-100 p-4 rounded">
          <button
            onClick={handleBackClick}
            className="mb-4 text-blue-600 hover:text-blue-800"
          >
            Back to Dashboard
          </button>
          <h3 className="text-xl font-semibold">Report for {selectedUser.name}</h3>
          <p className="mt-2">{selectedUser.report}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report, idx) => (
            <div key={idx} className={`rounded-xl p-4 shadow ${report.color}`}>
              <div className="text-lg font-semibold">{report.title}</div>
              <div className="text-3xl font-bold mt-2">{report.value}</div>
              <div className="mt-4">
                <h4 className="font-semibold">Click a name to view their report:</h4>
                <ul>
                  {report.users.map((user, userIdx) => (
                    <li
                      key={userIdx}
                      className="text-blue-600 hover:text-blue-800 cursor-pointer"
                      onClick={() => handleUserClick(user)}
                    >
                      {user.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ReportDashboard;
