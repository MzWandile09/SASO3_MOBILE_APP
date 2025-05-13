//SASO3 Mobile App/src/navigation/AppNavigator.js

import React from "react";

const ScheduleControl = () => {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Schedule Control</h2>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b p-2">Day</th>
            <th className="border-b p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {weekdays.map((day, idx) => (
            <tr key={idx}>
              <td className="border-b p-2">{day}</td>
              <td className="border-b p-2 space-x-2">
                <button className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">
                  Add
                </button>
                <button className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleControl;
