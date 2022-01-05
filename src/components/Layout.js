import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, theme }) => {
  return (
    <>
      <Navbar theme={theme} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
