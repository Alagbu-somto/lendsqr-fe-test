import { MdOutlineStarOutline, MdOutlineStarPurple500 } from "react-icons/md";
import profilePic from "../../components/assets/profilepic.svg";

function UserProfileCard(props: any) {
  const { user } = props;
  console.log(user);

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
        <span className="focus">General Details</span>
        <span>Documents</span>
        <span>Bank Details</span>
        <span>Loans</span>
        <span>Savings</span>
        <span>App and System</span>
      </div>
    </div>
  );
}

export default UserProfileCard;
