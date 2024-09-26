"use client";
import { Usuario } from "@/types/usuario";
import axios from "axios";
import React, { useEffect, useState } from "react";

function UserTable() {
  const [users, setUsers] = useState<Usuario[]>([]);
  const [nameEmailFilter, setNameEmailFilter] = useState("");
  const [profileFilter, setProfileFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const handleNameEmailChange = (e: any) => {
    setNameEmailFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleProfileChange = (e: any) => {
    setProfileFilter(e.target.value);
    setCurrentPage(1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/users", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => setUsers(res.data.users));
  }, []);

  return (
    <div className="p-4 max-w-5xl mx-auto text-black">
      <div className="mb-4 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Filter by name or email"
          value={nameEmailFilter}
          onChange={handleNameEmailChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={profileFilter}
          onChange={handleProfileChange}
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Profiles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Profile</th>
              <th className="py-2 px-4 border-b">Age</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="py-2 px-4 border-b">{user.id}</td>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">{user.profile}</td>
                <td className="py-2 px-4 border-b">{user.age}</td>
                <td className="py-2 px-4 border-b">{user.phone}</td>
                <td className="py-2 px-4 border-b">
                  <button className="mr-2 px-3 py-1 text-white bg-blue-500 hover:bg-blue-600 rounded-lg">
                    Edit
                  </button>
                  <button className="px-3 py-1 text-white bg-red-500 hover:bg-red-600 rounded-lg">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-lg ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserTable;
