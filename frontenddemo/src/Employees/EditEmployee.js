import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEmployee() {
  const [emps, setemps] = useState({
    empno: " ",
    ename: " ",
    sal: " ",
  });

  //const { empno, ename, sal } = emps;

  const onInputChange = (e) => {
    setemps({ ...emps, [e.target.name]: e.target.value });
  };

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    empload();
  }, []);

  const empsubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8082/updateEmp/${id}`, emps);
    navigate("/");
  };

  const empload = async () => {
    const result = await axios.get(`http://localhost:8082/singleEmp/${id}`);
    setemps(result.data);
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
            <h2 className="text-center n-4">Edit Employee</h2>
            <form onSubmit={(e) => empsubmit(e)}>
              <div className="mb-3">
                <label htmlFor="empno" className="form-label">
                  Empno
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="empno"
                  placeholder="Enter employee number"
                  value={emps.empno}
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="ename" className="form-label">
                  Ename
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="ename"
                  placeholder="Enter employee name"
                  value={emps.ename}
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="sal" className="form-label">
                  Salary
                </label>
                <input
                  type="text"
                  name="sal"
                  className="form-control"
                  value={emps.sal}
                  placeholder="Enter your salary"
                  onChange={(e) => {
                    onInputChange(e);
                  }}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-outline-primary">
                  Submit
                </button>
                <Link
                  type="submit"
                  className="btn btn-outline-danger mx-2"
                  to={"/"}
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
