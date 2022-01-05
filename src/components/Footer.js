import React from "react";
import NavLink from "./NavLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text">
        <p className="logo">
          seri <span>putra</span>
        </p>
        <nav>
          <ul className="text__wrapper flex">
            <NavLink />
          </ul>
        </nav>
        <p className="copyright">Copyright © 2021 seriputra</p>
      </div>
    </footer>
  );
};

export default Footer;
