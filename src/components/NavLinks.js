import React from "react";
import { Link } from "gatsby";

const NavLinks = () => {
  const blogLinks = "/blog/";

  return (
    <>
      <li>
        <Link to="/" activeClassName="active">
          utama
        </Link>
      </li>
      <li>
        <Link to={blogLinks} activeClassName="active">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/plans/" activeClassName="active">
          Perancangan
        </Link>
      </li>
      <li>
        <Link to="/about/" activeClassName="active">
          Info
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
