import React from "react";

export const Card = ({ children, className }) => {
  return (
    <div className={`rounded-lg shadow-md py-5 px-10 bg-white ${className}`}>
      {children}
    </div>
  );
};

export const HStats = ({ children }) => {
  return <h1 className="font-foddie text-2xl">{children}</h1>;
};
export const PStats = ({ children }) => {
  return <p className="font-bold text-center text-3xl">{children}</p>;
};
