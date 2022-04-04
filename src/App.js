import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavBar from "./components/Navigation/NavBar";
import Home from "./components/Home";
import Employees from "./components/Employees/Employees";
import Employee from "./components/Employees/Employee";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";

import PageNotFound from "./components/AppUtils/PageNotFound";

function App() {
  const [employees, setEmployees] = useState({});

  return (
    <div className="h-full">
      <NavBar setEmployees={setEmployees} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route
          path="/employees"
          element={
            <Employees employees={employees} setEmployees={setEmployees} />
          }
        ></Route>
        <Route
          path="/employees/:employeeId"
          element={
            <Employee employees={employees} setEmployees={setEmployees} />
          }
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  )
}

export default App;
