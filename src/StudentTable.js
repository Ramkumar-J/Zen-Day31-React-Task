import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function StudentTable() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    async function fetchStudentdata() {
      try {
        let studentsdata = await axios.get(
          "https://61f4eeec62f1e300173c3f56.mockapi.io/students"
        );
        setStudents(studentsdata.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchStudentdata();
  }, []);

  let handledelete = async (student) => {
    try {
      await axios.delete(
        `https://61f4eeec62f1e300173c3f56.mockapi.io/students/${student.id}`
      );
      setStudents(students.filter((e) => e.id !== student.id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Students</h1>
        <Link
          to="/StudentForm"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i>Create new
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Students list</h6>
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
                  <th>Standard</th>
                  <th>Section</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => {
                  return (
                    <tr>
                      <td>{student.name}</td>
                      <td>{student.standard}</td>
                      <td>{student.section}</td>
                      <td>{student.age}</td>
                      <td>{student.address}</td>
                      <td>
                        <Link
                          to={`/ViewStudent/${student.id}`}
                          className="btn btn-info mx-1"
                        >
                          View
                        </Link>
                        <Link
                          to={`/EditStudent/${student.id}`}
                          className="btn btn-warning mx-1"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handledelete(student)}
                          className="btn btn-danger mx-1"
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

export default StudentTable;
