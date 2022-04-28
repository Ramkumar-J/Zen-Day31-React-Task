import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function ViewStudent() {
  let params = useParams();
  const [viewstudent, setViewstudent] = useState([]);
  useEffect(() => {
    async function fetchViewstudent() {
      try {
        let studentinfo = await axios.get(
          `https://61f4eeec62f1e300173c3f56.mockapi.io/students/${params.id}`
        );
        setViewstudent(studentinfo.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchViewstudent();
  });

  return (
    <div>
      <h2>{viewstudent.name}</h2>
      <h3>{viewstudent.standard}</h3>
    </div>
  );
}
export default ViewStudent;
