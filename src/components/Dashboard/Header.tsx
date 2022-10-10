import avater from "../../components/assets/avater-test.png";
import logo from "../../components/assets/logo-test.png";
import { BiSearch } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";

export default function Header() {
  return (
    <header>
      <span className="logo">
        <img src={logo} alt="" />
      </span>
      <div className="search">
        <div className="search-box">
          <input type="text" name="search" placeholder="Search for anything" />
          <span>
            <BiSearch />
          </span>
        </div>
      </div>
      <ul>
        <li>Docs</li>
        <li>
          <MdOutlineNotifications fontSize={30} />
        </li>
        <li>
          <img src={avater} alt="" />
        </li>
        <li>Adedeji</li>
      </ul>
    </header>
  );
}
