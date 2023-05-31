import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Update from "./Update";

const Home = () => {
  const [data, setData] = useState([]);

  const [newEmployees, setNewEmployees] = useState([
    { name: "", designation: "", education: "", age: "" },
  ]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <App props={{ data, setData, newEmployees, setNewEmployees }} />
            }
          />
          <Route
            path="/update/:id"
            element={
              <Update
                props={{ data, setData, newEmployees, setNewEmployees }}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
