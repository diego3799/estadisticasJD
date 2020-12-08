import React from "react";

export const Card = ({ children }) => {
  return (
    <div className=" w-5/12 m-10 rounded-lg shadow-md py-5 px-10 bg-white">
      {children}
    </div>
  );
};
