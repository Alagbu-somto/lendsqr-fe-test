import PersonalInfo from "../../components/Userdatails/PersonalInfo";
import UserProfileCard from "../../components/Userdatails/UserProfileCard";
import back from "../../components/assets/icons/back.png";
import { useState, useEffect } from "react";
import axios from "axios";
type user = {
  id: string;
  back: any;
};

function User(props: user) {
  const [loading, setLoading] = useState<boolean>(false);

  // Fetch data from Api
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const user: any = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${props.id}`
      );
      user.data && localStorage.setItem("user", JSON.stringify(user.data));
    };
    fetchData();
    setLoading(false);
  }, [props.id]);

  return (
    <div className="user-datails">
      <div className="back">
        <div onClick={() => props.back(false)}>
          <img src={back} alt="" />
        </div>
        <span>Back to Users</span>
      </div>
      <div className="sub-header">
        <h3>Users</h3>
        <div className="header-left">
          <span>Blacklist User</span>
          <span className="active">Activate User</span>
        </div>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <UserProfileCard />
          <PersonalInfo />
        </>
      )}
    </div>
  );
}

export default User;
