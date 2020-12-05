import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
          <ul>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
