import "./App.css";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import StudentTable from "./StudentTable";
import TeacherTable from "./TeacherTable";
import TeacherForm from "./TeacherForm";
import EditTeacher from "./EditTeacher";
import ViewTeacher from "./ViewTeacher";
import StudentForm from "./StudentForm";
import ViewStudent from "./ViewStudent";
import EditStudent from "./EditStudent";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
          <Sidebar></Sidebar>
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar></Topbar>
              <div class="container-fluid">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Student" element={<StudentTable />} />
                  <Route path="/Teacher" element={<TeacherTable />} />
                  <Route path="/TeacherForm" element={<TeacherForm />} />
                  <Route path="/EditTeacher/:id" element={<EditTeacher />} />
                  <Route path="/ViewTeacher/:id" element={<ViewTeacher />} />
                  <Route path="/StudentForm" element={<StudentForm />} />
                  <Route path="/ViewStudent/:id" element={<ViewStudent />} />
                  <Route path="/EditStudent/:id" element={<EditStudent />} />
                </Routes>
              </div>
            </div>
            <Footer></Footer>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
