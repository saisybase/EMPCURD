import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [emps, setemps] = useState([]);

  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    loademps();
  }, []);

  const loademps = async () => {
    const result = await axios.get("http://localhost:8082/ListEmp");
    setemps(result.data);
  };

  const deleteemp = async (id) => {
    await axios.delete(`http://localhost:8082/deleteEmp/${id}`);
    loademps();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Empno</th>
              <th scope="col">Ename</th>
              <th scope="col">Salary</th>
              <th SCOPE="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {emps.map((emp1, index) => (
              <tr>
                <th scope="row" key={index}>
                  {emp1.id}
                </th>
                <td>{emp1.empno}</td>
                <td>{emp1.ename}</td>
                <td>{emp1.sal}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`ViewEmployee/${emp1.id}`}
                  >
                    ReadEMP
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/EditEmployee/${emp1.id}`}
                  >
                    EditEMP
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => {
                      deleteemp(emp1.id);
                    }}
                  >
                    DeleteEMP
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
