import React from "react";
import Dashboardcard from "./Dashboardcard";

function Dashboard() {
  let Cards = [
    {
      cardname: "Teachers",
      text: "text-primary",
      border: "border-left-primary",
      icon: "fa-user",
      Cardinfo: "500+",
    },
    {
      cardname: "Students",
      text: "text-success",
      border: "border-left-success",
      icon: "fa-users",
      Cardinfo: "10000+",
    },
    {
      cardname: "NEET Pass",
      text: "text-info",
      border: "border-left-info",
      icon: "fa-graduation-cap",
      Cardinfo: "90%",
    },
    {
      cardname: "Ranking",
      text: "text-warning",
      border: "border-left-warning",
      icon: "fa-trophy",
      Cardinfo: "6",
    },
  ];
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
      </div>
      <div class="row">
        {Cards.map((card) => {
          return <Dashboardcard Card={card}></Dashboardcard>;
        })}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6 bg-white">
                <h4 className="mt-3 mb-3 mx-3 text-warning">About BYJUS</h4>
                <ul className="mt-2 mx-2 text-dark">
                  <li>
                    <p>One to One Live classes</p>
                  </li>
                  <li>
                    <p>Worldclass Teaching</p>
                  </li>
                  <li>
                    <p>Live classes</p>
                  </li>
                  <li>
                    <p>Expert Teachers</p>
                  </li>
                  <li>
                    <p>Classes from KG to 12th</p>
                  </li>
                  <li>
                    <p>NEET and JEE Traning</p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <img
                  className="img-fluid"
                  src="assets/undraw_Teaching_re_g7e3.png"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
