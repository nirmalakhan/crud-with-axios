// import useFetch from "./useFetch";
import axios from "axios";
import { useEffect, useState } from "react";
// import useFetch from "./useFetch";
import { Link } from "react-router-dom";

function App(props) {
  // console.log(props);

  const { data, setData, newEmployees, setNewEmployees } = props.props;
  // const [data, setData] = useState([]);

  // const [newEmployees, setNewEmployees] = useState([
  //   { name: "", designation: "", education: "", age: "" },
  // ]);

  useEffect(() => {
    fetch("http://localhost:5000/api/employees/getall")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  console.log(data);

  const addEmployees = () => {
    axios.post("http://localhost:5000/api/employees/add", newEmployees);
    // .then((response) => {
    //   setNewEmployees(response.data);
    // });
  };

  const deleteEmployees = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:5000/api/employees/remove/${id}`)
      .then((response) => {
        console.log(response);
      });
  };

  const handleChange = (e) => {
    setNewEmployees({ ...newEmployees, [e.target.name]: e.target.value });
    console.log(newEmployees);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>Employees Data</h1>
      {data.map((item) => {
        return (
          <div key={item._id}>
            <div id="data">
              <ul>
                <li>Id:{item.name}</li>
                <li>Designation:{item.designation}</li>
                <li>Education:{item.education}</li>
              </ul>
            </div>
            <button onClick={() => deleteEmployees(item._id)}>Delete</button>

            <Link to={`/update/${item._id}`}>
              <button>Update</button>
            </Link>
          </div>
        );
      })}

      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={newEmployees.name}
            onChange={handleChange}
            placeholder="Name:"
          />
          <input
            type="text"
            name="designation"
            value={newEmployees.designation}
            onChange={handleChange}
            placeholder="Designation:"
          />
          <input
            type="text"
            name="education"
            value={newEmployees.education}
            onChange={handleChange}
            placeholder="Education:"
          />
          <input
            type="number"
            name="age"
            value={newEmployees.age}
            onChange={handleChange}
            placeholder="Age:"
          />

          <button type="submit" onClick={addEmployees}>
            Add Employees Data
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
