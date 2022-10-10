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
import axios from "axios";
type post = {
  orgName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  userName: string;
  lastActiveDate: string;
};
function Dashboad() {
  const [posts, setPost] = useState<post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurentPage] = useState<number>(1);
  const postPerPage: number = 10;
  const indexOfNextPage: number = currentPage * postPerPage;
  const indexOfFirstPage: number = indexOfNextPage - postPerPage;

  const paginate = (num: number) => {
    setCurentPage(num);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const post = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setPost(post.data.slice(indexOfFirstPage, indexOfNextPage));
    };
    fetchData();
    setLoading(false);
  }, [indexOfFirstPage, indexOfNextPage]);

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
              <li key={i}>
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
              </li>
            ))}
            <li className="sub-title">BUSINESSES</li>
            {BUSINESSES.map((item, i) => (
              <li key={i}>
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
              </li>
            ))}
            <li className="sub-title">SETTINGS</li>
            {SETTINGS.map((item, i) => (
              <li key={i}>
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
              <Card
                key={i}
                name={item.name}
                figure={item.figure}
                icon={item.icon}
              />
            ))}
          </div>
          <div className="table-container">
            {loading ? <h1>...loading</h1> : <UserTable post={posts} />}
            <div className="dashboard-bottom">
              <div className="page-bottom">
                <span>Showing</span>
                <span className="badge">
                  100 <RiArrowDropDownLine fontSize={35} color="#213F7D" />
                </span>
                <span>out of 100</span>
              </div>
              <div className="pagination">
                <MdOutlineArrowBackIos
                  className="badge"
                  color="#213F7D"
                  onClick={() =>
                    setCurentPage(currentPage === 1 ? 1 : currentPage - 1)
                  }
                />
                {posts.map((item, i) => {
                  return (
                    <span
                      key={i}
                      className="page-number"
                      onClick={() => paginate(i + 1)}
                    >
                      {i + 1}
                    </span>
                  );
                })}
                <MdOutlineArrowForwardIos
                  className="badge"
                  color="#213F7D"
                  onClick={() => setCurentPage(currentPage + 1)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboad;
