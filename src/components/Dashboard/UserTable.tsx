import { BsFilter, BsThreeDotsVertical } from "react-icons/bs";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import Menu from "./Menu";
// type post = {
//   orgName: string;
//   email: string;
//   phoneNumber: string;
//   createdAt: string;
//   userName: string;
//   lastActiveDate: string;
// };
function UserTable(props: any) {
  const [filter, setFilter] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [top, setTop] = useState<number>(5);
  const handlemenu = (i: number) => {
    setTop(i * 4 - 2);
    console.log(top);

    setMenu(true);
  };
  return (
    <>
      {filter && <Filter />}
      <div onClick={() => setMenu(false)}>{menu && <Menu top={top} />}</div>

      <table>
        <thead>
          <tr>
            <th>
              <div className="heading">
                <span>Organization</span>
                <BsFilter
                  className="options"
                  onClick={() => setFilter(!filter)}
                />
              </div>
            </th>
            <th>
              <div className="heading">
                <span>Username</span>{" "}
                <BsFilter
                  className="options"
                  onClick={() => setFilter(!filter)}
                />
              </div>
            </th>
            <th>
              <div className="heading">
                <span>Email</span>{" "}
                <BsFilter
                  className="options"
                  onClick={() => setFilter(!filter)}
                />
              </div>
            </th>
            <th>
              <div className="heading">
                <span>Phone number</span>{" "}
                <BsFilter
                  className="options"
                  onClick={() => setFilter(!filter)}
                />
              </div>
            </th>
            <th>
              <div className="heading">
                <span>Date joined</span>{" "}
                <BsFilter
                  className="options"
                  onClick={() => setFilter(!filter)}
                />
              </div>
            </th>
            <th>
              <div className="heading">
                <span>Status</span>{" "}
                <BsFilter
                  className="options"
                  onClick={() => setFilter(!filter)}
                />
              </div>
            </th>
          </tr>
        </thead>
        {props.post.map((item: any, i: number) => (
          <tr key={i} className="row">
            <td>{item.orgName}</td>
            <td>{item.userName}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span className="tab">Inactive</span>
            </td>
            <td className="options" onClick={() => handlemenu(i + 1)}>
              <BsThreeDotsVertical />
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default UserTable;
