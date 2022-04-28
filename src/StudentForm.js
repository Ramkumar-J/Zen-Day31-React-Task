import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
function StudentForm() {
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: "",
      standard: "",
      section: "",
      age: "",
      address: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "Required";
      }
      if (!values.standard) {
        errors.standard = "Required";
      }
      if (!values.section) {
        errors.section = "Required";
      }
      if (!values.age) {
        errors.age = "Required";
      }
      if (!values.address) {
        errors.address = "Required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        await axios.post(
          "https://61f4eeec62f1e300173c3f56.mockapi.io/students",
          values
        );
        navigate("/Student");
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
            </div>
            <div className="row">
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
              <div className="col-lg-6">
                <label className="text-dark">Age</label>
                <input
                  className="form-control w-50"
                  type={"age"}
                  name="age"
                  onChange={formik.handleChange}
                  value={formik.values.age}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.age}</span>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label className="text-dark">Address</label>
                <input
                  className="form-control w-50"
                  type={"text"}
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                ></input>
                <span style={{ color: "red" }}>{formik.errors.address}</span>
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
export default StudentForm;
