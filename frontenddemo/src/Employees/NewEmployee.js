import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NewEmployee() {
  const [emps, setemps] = useState([
    {
      empno: "",
      ename: " ",
      sal: " ",
    },
  ]);

  //const { empno, ename, sal } = emps;

  let navigate = useNavigate();

  const onInputChange = (e) => {
    setemps({ ...emps, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8082/add", emps);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center n-4">Register Employee</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div>
              <label htmlFor="Empno" className="form-label">
                Empno
              </label>
              <input
                type="text"
                className="form-control"
                name="empno"
                placeholder="Enter empno"
                defaultValue="empno"
                onChange={(e) => onInputChange(e)}
              />
            </div> 
            <div>
              <label htmlFor="Ename" className="form-label">
                Ename
              </label>
              <input
                type="text"
                className="form-control"
                name="ename"
                defaultValue="ename"
                placeholder="Enter employee name"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label htmlFor="salary" className="form-label">
                salary
              </label>
              <input
                type="text"
                className="form-control"
                name="sal"
                defaultValue="sal"
                placeholder="Enter salary"
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to={"/"}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
