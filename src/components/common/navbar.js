import React from "react";

const NavbarCommon = ({ setView }) => {
  const viewHandler = (status) => {
    setView(status);
  };
  return (
    <div className="w-1/2 m-auto">
      <div className="flex justify-between items-center pt-5 pb-3 ">
        <div className="font-bold text-lg">MY TODO'S</div>
        <div className="flex justify-between gap-3 items-center ">
          <div
            className="cursor-pointer hover:scale-105"
            onClick={() => {
              viewHandler(1);
            }}
          >
            Todos
          </div>
          <div
            className="cursor-pointer hover:scale-105"
            onClick={() => {
              viewHandler(2);
            }}
          >
            Done
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarCommon;
