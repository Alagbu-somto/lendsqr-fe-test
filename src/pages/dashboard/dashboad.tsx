import { useState, useEffect } from "react";
import Header from "../../components/Dashboard/Header";
import briefcase from "../../components/assets/icons/briefcase.png";
import home from "../../components/assets/icons/home.png";
import { CUSTOMERS, BUSINESSES, SETTINGS, CARD } from "./data";
import "./dashboard.scss";
import Card from "../../components/Dashboard/Card";
import UserTable from "../../components/Dashboard/UserTable";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

function Dashboad() {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-body">
        <div className="dashboard-left">
          <ul>
            <li className="top">
              <img src={briefcase} alt="" />
              <span>Switch Organization</span>
            </li>
            <li>
              <img src={home} alt="" />
              <span>Dashboard</span>
            </li>
            <li className="sub-title">CUSTOMERS</li>
            {CUSTOMERS.map((item, i) => (
              <li>
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
              </li>
            ))}
            <li className="sub-title">BUSINESSES</li>
            {BUSINESSES.map((item, i) => (
              <li>
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
              </li>
            ))}
            <li className="sub-title">SETTINGS</li>
            {SETTINGS.map((item, i) => (
              <li>
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="dashboard-right">
          <h1>Users</h1>
          <div className="card-container">
            {CARD.map((item, i) => (
              <Card name={item.name} figure={item.figure} icon={item.icon} />
            ))}
          </div>
          <div className="table-container">
            <UserTable />
            <div className="dashboard-bottom">
              <div className="page-num">
                <span>Showing</span>
                <span className="badge">
                  100 <RiArrowDropDownLine fontSize={35} color="#213F7D" />
                </span>
                <span>out of 100</span>
              </div>
              <div className="pagination">
                <MdOutlineArrowBackIos className="badge" color="#213F7D" />
                <span>1</span>
                <MdOutlineArrowForwardIos className="badge" color="#213F7D" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboad;
