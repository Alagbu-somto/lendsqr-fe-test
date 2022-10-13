import { useState, useEffect } from "react";
import Header from "../../components/Dashboard/Header";
import briefcase from "../../components/assets/icons/briefcase.png";
import home from "../../components/assets/icons/home.png";
import { CUSTOMERS, BUSINESSES, SETTINGS, CARD } from "./data";
import "./dashboard.scss";
import Card from "../../components/Dashboard/Card";
import UserTable from "../../components/Dashboard/UserTable";
import system from "../../components/assets/icons/system.png";
import signout from "../../components/assets/icons/sign-out.png";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import axios from "axios";
import User from "./user";
type post = {
  orgName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  userName: string;
  lastActiveDate: string;
  id: string;
};

function Dashboad() {
  const [posts, setPost] = useState<post[]>([]);
  const [id, setId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);
  const [currentPage, setCurentPage] = useState<number>(1);
  const [press, setPress] = useState<string>("Users");
  const postPerPage: number = 10;
  const indexOfNextPage: number = currentPage * postPerPage;
  const indexOfFirstPage: number = indexOfNextPage - postPerPage;
  const currentPost: post[] = posts.slice(indexOfFirstPage, indexOfNextPage);
  const totalPageNum: number = posts.length / postPerPage;
  const paginate = (num: number) => {
    setCurentPage(num);
  };

  // Get page numbers
  const pageNums = [];
  for (let i = 1; i <= totalPageNum; i++) {
    pageNums.push(i);
  }

  const handlePreesed = (e: React.MouseEvent<HTMLElement>) => {
    const text = e.currentTarget.innerText;
    setPress(text);
  };
  // Fetch data from Api
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const post = await axios.get(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      setPost(post.data);
    };
    fetchData();
    setLoading(false);
  }, [indexOfFirstPage, indexOfNextPage]);

  // Tracking id of indidual users onclick
  useEffect(() => {
    id !== "" && setUser(true);
  }, [id]);
  const handleLogOut = () => {
    localStorage.removeItem("isLoggingin");
    window.location.href = "/";
  };
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
              <li
                key={i}
                className={press === item.name ? "pressed" : ""}
                onClick={handlePreesed}
              >
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
              </li>
            ))}
            <li className="sub-title">BUSINESSES</li>
            {BUSINESSES.map((item, i) => (
              <li
                key={i}
                className={press === item.name ? "pressed" : ""}
                onClick={handlePreesed}
              >
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
              </li>
            ))}
            <li className="sub-title">SETTINGS</li>
            {SETTINGS.map((item, i) => (
              <li
                key={i}
                className={press === item.name ? "pressed" : ""}
                onClick={handlePreesed}
              >
                <img src={item.icon} alt="" />
                <span>{item.name}</span>
              </li>
            ))}
            {user && (
              <>
                <li>
                  <img src={system} alt="" />
                  <span>Systems Messages</span>
                </li>
                <li className="logout" onClick={handleLogOut}>
                  <img src={signout} alt="" />
                </li>
                <li className="logout" onClick={handleLogOut}>
                  Logout
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="dashboard-right">
          {!user ? (
            <div>
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
                {loading ? (
                  <h1>...loading</h1>
                ) : (
                  <UserTable post={currentPost} fn={setId} />
                )}
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
                    {pageNums.map((num, i) => {
                      return (
                        <span
                          key={i}
                          className="page-number"
                          onClick={() => paginate(i + 1)}
                        >
                          {num}
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
          ) : (
            <User id={id} back={setUser} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboad;
