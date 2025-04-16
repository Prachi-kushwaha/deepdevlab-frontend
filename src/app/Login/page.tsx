"use client";
import { BASE_URL } from "@/constant/const";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "@/utils/userSlice";
import { useRouter } from "next/navigation";

interface ILogin {
  role: string;
  email: string;
  password: string;
  username: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [formData, setFormData] = useState<ILogin>({
    role: "ADMIN",
    email: "pranshi@gmail.com",
    password: "pranshi123",
    username: "pranshi",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(BASE_URL + "/login", formData, {
        withCredentials: true,
      });
      dispatch(addUser(res.data));
      console.log(res.data);
      router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <div className="border-2 border-gray-500 p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-gray-300 mb-6">
          Login
        </h2>

        <div className="flex flex-col gap-4">
          <label className="flex flex-col">
            <span className="text-gray-400 mb-1">Name</span>
            <input
              type="text"
              name="username"
              value={formData.username}
              placeholder="Enter your name"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-400 mb-1">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-400 mb-1">Password</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 "
            />
          </label>

          <label className="flex flex-col">
            <span className="text-gray-400 mb-1">Role</span>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="ADMIN">Admin</option>
              <option value="USER">User</option>
            </select>
          </label>

          <button
            className="mt-4 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
