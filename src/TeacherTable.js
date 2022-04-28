import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TeacherTable() {
  const [newTeachers, setnewTeachers] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        let Tdata = await axios.get(
          "https://61f4eeec62f1e300173c3f56.mockapi.io/teachers"
        );
        setnewTeachers(Tdata.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  let deldata = async (teacher) => {
    try {
      await axios.delete(
        `https://61f4eeec62f1e300173c3f56.mockapi.io/teachers/${teacher.id}`
      );
      setnewTeachers(newTeachers.filter((e) => e.id !== teacher.id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Teachers</h1>
        <Link
          to="/TeacherForm"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Create new
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Teachers list</h6>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Subject</th>
                  <th>Standard</th>
                  <th>Section</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {newTeachers.map((teacher) => {
                  return (
                    <tr>
                      <td>{teacher.name}</td>
                      <td>{teacher.subject}</td>
                      <td>{teacher.standard}</td>
                      <td>{teacher.section}</td>
                      <td>
                        <Link
                          to={`/ViewTeacher/${teacher.id}`}
                          className="btn btn-info mx-1"
                          type="button"
                        >
                          View
                        </Link>
                        <Link
                          to={`/EditTeacher/${teacher.id}`}
                          className="btn btn-warning mx-1"
                          type="button"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deldata(teacher)}
                          className="btn btn-danger mx-1"
                          type="button"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default TeacherTable;
