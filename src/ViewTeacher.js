import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewTeacher() {
  let params = useParams();
  const [Teachers, setTeachers] = useState([]);
  useEffect(() => {
    async function fetchViewdata() {
      try {
        let teachers = await axios.get(
          `https://61f4eeec62f1e300173c3f56.mockapi.io/teachers/${params.id}`
        );
        setTeachers(teachers.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchViewdata();
  },[]);
  return (
    <div>
      <h2>{Teachers.name}</h2>
      <h3>{Teachers.subject}</h3>
    </div>
  );
}

export default ViewTeacher;
