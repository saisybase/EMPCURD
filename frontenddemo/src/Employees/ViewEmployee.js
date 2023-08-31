import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewEmployee() {
  const [emps, setemps] = useState({
    empno: " ",
    ename: " ",
    sal: " ",
  });

  const { id } = useParams();

  useEffect(() => {
    loademps();
  }, []);

  const loademps = async () => {
    const result = await axios.get(`http://localhost:8082/singleEmp/${id}`);
    setemps(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center n-4">View Employee</h2>
          <div className="card">
            <div className="card-header">
              Details of emplyee : {emps.id}
              <ul>
                <li className="list-group-item">
                  <b>Empno </b>
                  {emps.empno}
                </li>
                <li className="list-group-item">
                  <b>Ename </b>
                  {emps.ename}
                </li>
                <li className="list-group-item">
                  <b>Salary </b>
                  {emps.sal}
                </li>
              </ul>
            </div>
            <Link className="btn btn-parimay my-2" to="/">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
