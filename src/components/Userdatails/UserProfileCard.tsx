import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import profilePic from "../../components/assets/profilepic.svg";
import { useState, useEffect } from "react";
function UserProfileCard() {
  const [user, setUser] = useState<any>({});
  const [press, setPress] = useState<string>("General Details");

  // Fetch data from localStorage
  useEffect(() => {
    const User: any = localStorage.getItem("user");
    const userDetails = JSON.parse(User);
    setUser(userDetails);
  }, []);

  const handlePressed = (e: React.MouseEvent<HTMLElement>) => {
    const text = e.currentTarget.innerText;
    setPress(text);
  };
  return (
    <div className="profile-card">
      <div className="profile">
        <div className="img-container">
          <img src={user?.profile?.avatar || profilePic} alt="" />
        </div>
        <div className="profile-details">
          <h2>{user?.profile?.firstName + " " + user?.profile?.lastName}</h2>
          <h5>LSQFf587g90</h5>
        </div>
        <div className="rating">
          <h5>User’s Tier</h5>
          <span>
            <MdOutlineStarPurple500 color="#E9B200" />
            <MdOutlineStarOutline color="#E9B200" />
            <MdOutlineStarOutline color="#E9B200" />
          </span>
        </div>
        <div>
          <h2>₦{user?.accountBalance}</h2>
          <h5>{user?.accountNumber}/Providus Bank</h5>
        </div>
      </div>
      <div className="profile-bottom">
        <span
          className={press === "General Details" ? "focus" : ""}
          onClick={handlePressed}
        >
          General Details
        </span>
        <span
          className={press === "Documents" ? "focus" : ""}
          onClick={handlePressed}
        >
          Documents
        </span>
        <span
          className={press === "Bank Details" ? "focus" : ""}
          onClick={handlePressed}
        >
          Bank Details
        </span>
        <span
          className={press === "Loans" ? "focus" : ""}
          onClick={handlePressed}
        >
          Loans
        </span>
        <span
          className={press === "Savings" ? "focus" : ""}
          onClick={handlePressed}
        >
          Savings
        </span>
        <span
          className={press === "App and System" ? "focus" : ""}
          onClick={handlePressed}
        >
          App and System
        </span>
      </div>
    </div>
  );
}

export default UserProfileCard;
