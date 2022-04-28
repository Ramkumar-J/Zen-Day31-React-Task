import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function TeacherForm() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      standard: "",
      section: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.subject) {
        errors.subject = "Required";
      }
      if (!values.standard) {
        errors.standard = "Required";
      }
      if (!values.section) {
        errors.section = "Required";
      }
      return errors;
    },
    onSubmit:async (values) => {
        try {
           await axios.post(
                "https://61f4eeec62f1e300173c3f56.mockapi.io/teachers",
                values
              );
              navigate("/Teacher");
        } catch (error) {
            console.log(error);
        } 
    },
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <label className="text-dark">Name</label>
                <input
                  className="form-control w-50"
                  type={"text"}
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.name}</span>
              </div>
              <div className="col-lg-6">
                <label className="text-dark">Subject</label>
                <input
                  className="form-control w-50"
                  type={"text"}
                  name="subject"
                  onChange={formik.handleChange}
                  value={formik.values.subject}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.subject}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label className="text-dark">Standard</label>
                <input
                  className="form-control w-50"
                  type={"text"}
                  name="standard"
                  onChange={formik.handleChange}
                  value={formik.values.standard}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.standard}</span>
              </div>
              <div className="col-lg-6">
                <label className="text-dark">Section</label>
                <input
                  className="form-control w-50"
                  type={"text"}
                  name="section"
                  onChange={formik.handleChange}
                  value={formik.values.section}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.section}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <input
                  className="btn btn-primary mt-2"
                  type={"submit"}
                  value="submit"
                ></input>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TeacherForm;
