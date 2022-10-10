import { BsFilter, BsThreeDotsVertical } from "react-icons/bs";
function UserTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <div className="heading">
              <span>Organization</span> <BsFilter />
            </div>
          </th>
          <th>
            <div className="heading">
              <span>Username</span> <BsFilter />
            </div>
          </th>
          <th>
            <div className="heading">
              <span>Email</span> <BsFilter />
            </div>
          </th>
          <th>
            <div className="heading">
              <span>Phone number</span> <BsFilter />
            </div>
          </th>
          <th>
            <div className="heading">
              <span>Date joined</span> <BsFilter />
            </div>
          </th>
          <th>
            <div className="heading">
              <span>Status</span> <BsFilter />
            </div>
          </th>
        </tr>
      </thead>
      <tr className="row">
        <td>Lendsqr</td>
        <td>Adedeji</td>
        <td>adedeji@lendsqr.com</td>
        <td>08078903721</td>
        <td>May 15, 2020 10:00 AM</td>
        <td>
          <span className="tab">Inactive</span>
        </td>
        <td>
          <BsThreeDotsVertical />
        </td>
      </tr>
      <tr className="row">
        <td>Lendsqr</td>
        <td>Adedeji</td>
        <td>adedeji@lendsqr.com</td>
        <td>08078903721</td>
        <td>May 15, 2020 10:00 AM</td>
        <td>
          <span className="tab">Inactive</span>
        </td>
        <td>
          <BsThreeDotsVertical />
        </td>
      </tr>
      <tr className="row">
        <td>Lendsqr</td>
        <td>Adedeji</td>
        <td>adedeji@lendsqr.com</td>
        <td>08078903721</td>
        <td>May 15, 2020 10:00 AM</td>
        <td>Inactive</td>
        <td>
          <BsThreeDotsVertical />
        </td>
      </tr>
    </table>
  );
}

export default UserTable;
