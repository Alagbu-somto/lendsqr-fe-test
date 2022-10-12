import { BsEye } from "react-icons/bs";
import activeUser from "../assets/icons/user-check.png";
import blacklist from "../assets/icons/user-times.png";
type top = {
  top: number;
  view: any;
};
function Menu(props: top) {
  return (
    <div className="menu" style={{ top: props.top + "rem" }}>
      <div className="menu-list">
        <BsEye />
        <span onClick={() => props.view(true)}>View Details</span>
      </div>
      <div className="menu-list">
        <img src={blacklist} alt="" />
        <span>Blacklist User</span>
      </div>
      <div className="menu-list">
        <img src={activeUser} alt="" />
        <span>Activate User</span>
      </div>
    </div>
  );
}

export default Menu;
