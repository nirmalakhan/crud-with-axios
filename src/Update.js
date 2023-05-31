import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = (props) => {
  const { data, setData, newEmployees, setNewEmployees } = props.props;
  // console.log("Data");
  // console.log(data);

  const navigate = useNavigate();
  const [update, setUpdate] = useState([
    { name: "", designation: "", education: "", age: "" },
  ]);
  const { id } = useParams();

  const updateData = async () => {
    const emp = await axios.get(
      `http://localhost:5000/api/employees/getById/${id}`
    );
    console.log(data);
    setUpdate(emp.data);
    console.log(update);
  };

  useEffect(() => {
    updateData();
  }, []);

  const updateEmployees = (id) => {
    console.log(id);
    axios.put(`http://localhost:5000/api/employees/update/${id}`, update);
    // .then((response) => {
    //   setUpdate(response.data);
    // });
    navigate("/");
  };

  const handleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
    console.log(update);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Update Employees Data</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={update.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="designation"
            value={update.designation}
            onChange={handleChange}
          />
          <input
            type="text"
            name="education"
            value={update.education}
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            value={update.age}
            onChange={handleChange}
          />

          <button type="submit" onClick={() => updateEmployees(update._id)}>
            Update Employees Data
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
