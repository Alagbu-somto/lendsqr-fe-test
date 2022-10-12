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
  const [user, setUser] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const User: any = await axios.get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${props.id}`
      );
      setUser(User.data);
    };
    fetchData();
    setLoading(false);
  }, []);
  // console.log(user);
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
      <UserProfileCard user={user} />
      <PersonalInfo user={user} />
    </div>
  );
}

export default User;
