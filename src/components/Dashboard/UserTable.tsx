import { BsFilter, BsThreeDotsVertical } from "react-icons/bs";
import { useState, useEffect } from "react";
import Filter from "./Filter";
import Menu from "./Menu";
function UserTable(props: any) {
  const { post, fn } = props;
  const [filter, setFilter] = useState<boolean>(false);
  const [menu, setMenu] = useState<boolean>(false);
  const [view, setView] = useState<boolean>(false);
  const [top, setTop] = useState<number>(5);
  const [userId, setUserId] = useState<string>("");
  const handlemenu = (i: number, id: string) => {
    setTop(i * 5 - 2.5);
    setMenu(true);
    setUserId(id);
    setView(false);
  };
  useEffect(() => {
    menu && view && fn(userId);
  }, [fn, menu, userId, view]);

  return (
    <>
      {filter && <Filter />}
      <div>{menu && <Menu top={top} view={setView} />}</div>
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
        {post.map((item: any, i: number) => (
          <tr key={i} className="row">
            <td>{item.orgName}</td>
            <td>{item.userName}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>May 15, 2020 10:00 AM</td>
            <td>
              <span className="tab">Inactive</span>
            </td>
            <td className="options" onClick={() => handlemenu(i + 1, item?.id)}>
              <BsThreeDotsVertical />
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default UserTable;
