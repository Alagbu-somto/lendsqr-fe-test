import { useState, useEffect } from "react";

export type Guarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
};
export type Education = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
  email: string;
};
export type Profile = {
  address: string;
  avatar: string;
  bvn: string;
  currency: String;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
};
export interface Userdatails {
  accountBalance: string;
  accountNumber: string;
  createdAt: string;
  education: Education;
  email: string;
  guarantor: Guarantor;
  id: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: Profile;
  socials: { facebook: string; instagram: string; twitter: string };
  userName: string;
}
function PersonalInfo() {
  const [user, setUser] = useState<Userdatails | null>(null);
  // Fetch data from localStorage
  useEffect(() => {
    const User: any = localStorage.getItem("user");
    const userDetails: Userdatails = User && JSON.parse(User);
    userDetails && setUser(userDetails);
  }, []);

  return (
    <div className="personal-info">
      <div className="info">
        <h2>Personal Information</h2>
        <div className="info-container">
          <div className="info-box">
            <h5>full Name</h5>
            <h2>{user?.profile?.firstName + " " + user?.profile?.lastName}</h2>
          </div>
          <div className="info-box">
            <h5>Phone Number</h5>
            <h2>{user?.phoneNumber}</h2>
          </div>
          <div className="info-box">
            <h5>Email Address</h5>
            <h2>{user?.email}</h2>
          </div>
          <div className="info-box">
            <h5>Bvn</h5>
            <h2>{user?.profile?.bvn}</h2>
          </div>
          <div className="info-box">
            <h5>Gender</h5>
            <h2>{user?.profile?.gender}</h2>
          </div>
          <div className="info-box">
            <h5>Marital status</h5>
            <h2>Single</h2>
          </div>
          <div className="info-box">
            <h5>Children</h5>
            <h2>None</h2>
          </div>
          <div className="info-box">
            <h5>Type of residence</h5>
            <h2>{user?.profile?.address}</h2>
          </div>
        </div>
      </div>
      <div className="info">
        <h2>Education and Employment</h2>
        <div className="info-normal">
          <div className="info-box">
            <h5>level of education</h5>
            <h2>{user?.education?.level}</h2>
          </div>
          <div className="info-box">
            <h5>employment status</h5>
            <h2>{user?.education?.employmentStatus}</h2>
          </div>
          <div className="info-box">
            <h5>sector of employment</h5>
            <h2>{user?.education?.sector}</h2>
          </div>
          <div className="info-box">
            <h5>Duration of employment</h5>
            <h2>{user?.education?.duration}</h2>
          </div>
          <div className="info-box">
            <h5>office email</h5>
            <h2>{user?.education?.officeEmail}</h2>
          </div>
          <div className="info-box">
            <h5>Monthly income</h5>
            <h2>{user?.education?.monthlyIncome[1]}</h2>
          </div>
          <div className="info-box">
            <h5>loan repayment</h5>
            <h2>{user?.education?.loanRepayment}</h2>
          </div>
        </div>
      </div>
      <div className="info">
        <h2>Socials</h2>
        <div className="info-normal">
          <div className="info-box">
            <h5>Twitter</h5>
            <h2>{user?.socials?.twitter}</h2>
          </div>
          <div className="info-box">
            <h5>Facebook</h5>
            <h2>{user?.socials?.facebook}</h2>
          </div>
          <div className="info-box">
            <h5>Instagram</h5>
            <h2>{user?.socials?.instagram}</h2>
          </div>
        </div>
      </div>
      <div className="info">
        <h2>Guarantor</h2>
        <div className="info-normal">
          <div className="info-box">
            <h5>full Name</h5>
            <h2>
              {user?.guarantor?.firstName + " " + user?.guarantor?.lastName}
            </h2>
          </div>
          <div className="info-box">
            <h5>Phone Number</h5>
            <h2>{user?.guarantor?.phoneNumber}</h2>
          </div>
          <div className="info-box">
            <h5>Email Address</h5>
            <h2>none</h2>
          </div>
          <div className="info-box">
            <h5>Relationship</h5>
            <h2>single</h2>
          </div>
        </div>
      </div>
      <div className="info">
        <div className="info-normal">
          <div className="info-box">
            <h5>full Name</h5>
            <h2>
              {user?.guarantor?.firstName + " " + user?.guarantor?.lastName}
            </h2>
          </div>
          <div className="info-box">
            <h5>Phone Number</h5>
            <h2>{user?.guarantor?.phoneNumber}</h2>
          </div>
          <div className="info-box">
            <h5>Email Address</h5>
            <h2>none</h2>
          </div>
          <div className="info-box">
            <h5>Relationship</h5>
            <h2>single</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfo;
