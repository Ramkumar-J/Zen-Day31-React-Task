import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <ul
      class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <Link
        class="sidebar-brand d-flex align-items-center justify-content-center"
        to="/"
      >
        <div class="sidebar-brand-icon">
          <i class="fas fa-school"></i>
        </div>
        <div class="sidebar-brand-text mx-3">BYJUS</div>
      </Link>

      <hr class="sidebar-divider my-0" />

      <li class="nav-item active">
        <Link class="nav-link" to="./Dashboard">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>

      <hr class="sidebar-divider" />

      <li class="nav-item ">
        <Link to="/Teacher" class="nav-link " data-bs-toggle="" role="button">
          <i class="fas fa-user"></i>
          <span class="text-capitalize mx-2">Teacher</span>
        </Link>
      </li>
      <li class="nav-item">
        <Link to="/Student" class="nav-link" data-bs-toggle="" role="button">
          <i class="fas fa-users"></i>
          <span class="text-capitalize mx-2">Student</span>
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
