import React, { useEffect, useState } from "react";
import { getUsersData, PostUsersData } from "../reducers/UserSlice";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [tabledata, setTabledata] = useState([]);
  const dispatch = useDispatch();
  const dispatchh = useDispatch();
  const data = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.user.status);
  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);
  useEffect(() => {
    if (status == "succeeded") {
      setTabledata(data);
    }
  });
  console.log(status);
  console.log(data, "----------");
  const handleAddUser = () => {
    dispatchh(
      PostUsersData({
        name: "vishal",
        gender: "Male",
        profession: "Teacher",
      })
    );
  };
  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>PROFESSION</th>
          </tr>
        </thead>
        <tbody>
          {status == "loading" ? (
            <h1>Loading...</h1>
          ) : status == "succeeded" ? (
            tabledata.map((item, i) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.gender}</td>
                  <td>{item.profession}</td>
                </tr>
              );
            })
          ) : (
            <h1>Error...</h1>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
