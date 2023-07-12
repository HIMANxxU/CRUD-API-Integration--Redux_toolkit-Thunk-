import React from "react";
import "./Demo.css";
import { handleAvaiblity } from "../reducers/UserSlice";
import { useSelector, useDispatch } from "react-redux";

const Demo = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.demo);
  //   const container = 10;
  //   let data = [
  //     {
  //       cellno: 1,
  //       status: true,
  //     },
  //     {
  //       cellno: 2,
  //       status: false,
  //     },
  //     {
  //       cellno: 3,
  //       status: false,
  //     },
  //     {
  //       cellno: 4,
  //       status: true,
  //     },
  //     {
  //       cellno: 5,
  //       status: false,
  //     },
  //   ];

  const loopCount = 5;
  const handleclick = (i) => {
    if (selector[i].status) {
      console.log("Already taken");
    } else {
      dispatch(handleAvaiblity(i));

      console.log("booking succesfulll", selector);
    }
  };

  const renderLoop = () => {
    const items = [];
    for (let i = 0; i < selector.length; i++) {
      items.push(
        <div
          onClick={() => handleclick(i)}
          className={selector[i].status ? "box red" : "box green"}
          key={i}
        >
          Loop iteration: {i}
        </div>
      );
    }
    return items;
  };

  return <div className="box-p">{renderLoop()}</div>;
};

export default Demo;
